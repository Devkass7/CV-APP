import { useState } from "react";
import Header from "./Header";
import WorkExperience from "./Forms/WorkExperience";
import EducationalBackground from "./Forms/Educational";
import General from "./Forms/General";

export default function Cv(props) {

  const [general, setGeneral ] = useState(false)
  const [education, setEducation ] = useState(false)
  const [work, setWork ] = useState(false)

function changeGeneral() {
  setGeneral(prev => !prev)
}

function changeEducation() {
  setEducation(prev => !prev)
}

function changeWork() {
  setWork(prev => !prev)
}



  return (<>
  <Header fname = {props.data.fname} lname= {props.data.lname + "'s"}/>
 
    <div className="main">
      

      <section>
        <p>Phone Number: {props.data.phone}</p>
        <p>Email: {props.data.email}</p>
      </section>

      <section className="careerprofile">
        <h2>Career Profile</h2>
        <p>{props.data.profile}</p>
      </section>

     { education ? (<EducationalBackground /> ):(<section>
       <div className="educatinol">
        <h2>Educational Background</h2>
        <table>
          <thead>
            <tr>
              <th>Institution</th>
              <th>Programme Studied</th>
              <th>Year of Completion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{props.data.school}</th>
              <td>{props.data.programme}</td>
              <td>{props.data.dateCompleted}</td>
            </tr>
          </tbody> 
        </table><button onClick={changeEducation}></button>
        </div>)

        <div className="workExperience">
        <h2>Work Experience</h2>
        <table>
          <thead>
            <tr>
              <th>Organisation</th>
              <th>Job Title</th>
              <th>Date Started</th>
              <th>Date Ended</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.data.facility}</td>
              <td>{props.data.jobTitle}</td>
              <td>{props.data.startDate}</td>
              <td>{props.data.endDate}</td>
            </tr>
          </tbody>
        </table><button></button>
        </div>
      </section>
     )}
    </div> </>
  );
}
