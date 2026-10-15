import { useState } from "react";

import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";
import Cv from "./Cv";



export default function Forms(){

  const [values, setValues] = useState({})

function HandleSubmit(event){
   
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
   const data = Object.fromEntries(formData.entries())

 setValues(prev => ({...prev, ...data}))


}

// function HandleChange(e){
//     const {name, value} = e.target;
//     console.log(name, value)
// }

/**
 * ! Getting educational entries
 */



    return <form onSubmit={HandleSubmit}>
       <General />
       <EducationalBackground   />
        <WorkExperience />
       
        <button>GENERATE CV</button>           
     </form>
  
}

