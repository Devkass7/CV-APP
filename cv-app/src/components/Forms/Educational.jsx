export default function EducationalBackground(props) {

  



  
  return (
    <> <h2>Educational Background</h2>
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
        name="programme"
      />
    </div>
    <div>
      <label htmlFor="date">DATE COMPLETED</label>
      <input type="date" id="date" name="date-completed" />
    </div>

    <div>
      <button onClick={props.addClicked}>Add</button>
    </div>
  </div></>
 
  )
 
}
