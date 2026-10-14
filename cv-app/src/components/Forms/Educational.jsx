import { useState } from "react"

export default function EducationalBackground() {

  const [education, setEducation] = useState({
    school:"",
    programme:"",
    year:""
  })


  function EducationalHandler(event){

    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const school = formData.get("school")
    const programme = formData.get("programme")
    const dateCompleted = formData.get("date-completed")


    setEducation(prev => {
      return {...prev, }
    })
  }




  
  return (
    <> <h2>Educational Background</h2>
    <form action={EducationalBackground}>
     <div className="education">
    
    <div>
      <label htmlFor="school">NAME OF UNIVERSITY</label>
      <input type="text" id="school" name="school" placeholder="Accra Technical University" />
    </div>

    <div>
      <label htmlFor="programme">PROGRAMME OFFERED</label>
      <input
        type="text"
        id="programme"
        placeholder="Medical Laboratory Science"
        name="progrmme"
      />
    </div>
    <div>
      <label htmlFor="date">DATE COMPLETED</label>
      <input type="date" id="date" name="date-completed" />
    </div>

    <div>
      <button>Add</button>
    </div>
  </div></form>
  </>
 
  )
 
}
