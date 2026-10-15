import { useState } from "react";

import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";



export default function Forms(){

function HandleSubmit(event){
   
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
const values = Object.fromEntries(formData.entries())




}

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