import { useState } from "react";

import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";
import Cv from "./Cv";



export default function Forms(){

    const[cv, setCv] = useState(false)

  const [values, setValues] = useState({})

function HandleSubmit(event){
   
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
   const data = Object.fromEntries(formData.entries())

   console.log(data);
   
 setValues(prev => ({...prev, ...data}))

 setCv(prev => !prev)

}

// function HandleChange(e){
//     const {name, value} = e.target;
//     console.log(name, value)
// }

/**
 * ! Getting educational entries
 */



    return cv ? <Cv data = {values}/>:  <form onSubmit={HandleSubmit}>
       <General />
       <EducationalBackground   />
        <WorkExperience />
       
        <button>GENERATE CV</button>           
     </form> 
  
}

