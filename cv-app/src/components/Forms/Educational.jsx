export default function EducationalBackground(props) {

  
function onChangeHandler(e){
 e.preventDefault()

}


function click(){
  console.log(props.school)
}
  
  return (
    <> <h2>Educational Background</h2>
     <div className="education">
    
    <div>
      <label htmlFor="school">NAME OF UNIVERSITY</label>
      <input  type="text" id="school" name="school" value="Accra Technical University" />
    </div>

    <div>
      <label htmlFor="programme">PROGRAMME OFFERED</label>
      <input
        type="text"
        id="programme"
       value="Medical Laboratory Science"
        name="programme"
      />
    </div>
    <div>
      <label htmlFor="date">DATE COMPLETED</label>
      <input type="date" id="date" name="dateCompleted"/>
    </div>

    <div>
      <button onClick={click}>Add</button>
    </div>
  </div></>
 
  )
 
}
