import { useState } from "react";

import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";



export default function Forms(){

  const [values, setValues] = useState({})

function HandleSubmit(event){
   
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
   const data = Object.fromEntries(formData.entries())

setValues(data)
console.log(values)

}

function HandleChange(e){
    const [name, value] = e.currentTarget;
    console.log(name, value)
}

/**
 * ! Getting educational entries
 */



    return <form onSubmit={HandleSubmit}>
         <General />
         <EducationalBackground  school={values.school} programme = {values.programme} date = {values.dateCompleted}  change ={HandleChange}/>
         <WorkExperience />
       
       <button>GENERATE CV</button>           
    </form>
}