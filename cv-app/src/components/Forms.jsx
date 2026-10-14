import { useState } from "react";

import General from "./Forms/General";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";



export default function Forms(){

function HandleSubmit(event){
   

    const formData = new FormData(event.currentTarget)

    console.log(formData.get("school"))


}

const [education , setEducation] = useState({school:"",
    programme:"",
    dateCompleted:""
})

function EducationalData(e){
    e.preventDefault()

   let school = document.getElementById("school").value
  let programme =  document.getElementById("programme").value
  let dateCompleted =  document.getElementById("date").value

    //console.log(school,dateCompleted,programme);
    
    setEducation(prev => {
        return{
            ...prev, school:school , programme:programme, dateCompleted:dateCompleted
        }
    })
    education && console.log(education);
}




    return <form onSubmit={HandleSubmit}>
         <General />
         <EducationalBackground  addClicked = {EducationalData}/>
         <WorkExperience />

       <button>GENERATE CV</button>           
    </form>
}