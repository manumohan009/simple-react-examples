
import React, {useState, useEffect} from "react";
import DogPhoto from "./dog-photo";
import Dogs from "./dogs";

function GraphQLAppParent() {
    const [selectedDog, setSelectedDog] = useState(null)
    useEffect(() => {
        console.log(selectedDog, 'parent selectedDog')
    },[selectedDog])
    function onDogSelected({target}){
        setSelectedDog(target.value)
    }
  return (
      <div>
          <div>
              <h2>Dogs</h2>
              <Dogs onDogSelected={onDogSelected}/>
              { selectedDog && <DogPhoto breed={selectedDog}/> }
          </div>
      </div>
  )
}

export default GraphQLAppParent;
