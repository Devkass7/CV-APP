import Forms from "./Forms";
import Header from "./Header";

export default function Cv(props) {
  return (
    <div className="main">
      {/* <Header /> */}

      <section>
        <p>Phone Number: {props.data.phone}</p>
        <p>Email: {props.data.email}</p>
      </section>

      <section className="careerprofile">
        <h2>Career Profile</h2>
        <p>{props.data.profile}</p>
      </section>

      <section>
        {" "}
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
        </table>
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
        </table>
      </section>
    </div>
  );
}
