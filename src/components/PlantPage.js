import { useState, useEffect } from "react"; 
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
    const[search,setSearch]=useState("")


  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then(setPlants);
  }, []);


  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  const plantsToDisplay = plants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
);

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search Search={search} onSearchChange={setSearch}/>
      <PlantList plants={plantsToDisplay} />
    </main>
  );
}

export default PlantPage;
