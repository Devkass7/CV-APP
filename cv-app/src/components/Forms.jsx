import { useState } from "react";

import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";



export default function Forms(){

function HandleSubmit(event){
   

    const formData = new FormData(event.currentTarget)

    console.log(formData.get("school"))


}

/**
 * ! Getting educational entries
 */
function educationalEntry(e){
    e.preventDefault();

    const formData = new FormData(e.currentTarget)

}


    return <form onSubmit={HandleSubmit}>
         <General />
         <EducationalBackground   />
         <WorkExperience />

       <button>GENERATE CV</button>           
    </form>
}