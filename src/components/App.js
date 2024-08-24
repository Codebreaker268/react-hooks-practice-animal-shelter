import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import{ getAll,getByType} from "../mocks/data"
import { handlers } from "../mocks/handlers";

function App() {
  const [pets, setPets] = useState(getAll());
  const [filters, setFilters] = useState("all");
  const handleChangeType=(newtype)=>{
    setFilters(newtype);
  };
  const handleFindPets=()=>{
    if(filters==="all"){
      setPets(getAll());
    }else{
      setPets(getByType(filters));
    }
  };
  const handleAdoptPet=(id)=>{
    setPets(pets.map(pet=>
      pet.id===id?{ ...pet,isAdopted:true}:pet
    ));
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChangeType} onFindPetsClick={handleFindPets} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;