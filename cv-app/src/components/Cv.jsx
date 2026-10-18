import Header from "./Header";
import { formatDate } from "../utils/formatDate";

export default function Cv({ general, education, work, onEdit }) {
  return (
    <>
      <Header fname={general.fname} lname={general.lname} />

      <div className="main">
        <div className="actions">
          <button type="button" onClick={onEdit}>Edit</button>
        </div>

        {(general.phone || general.email) && (
          <section>
            {general.phone && <p>Phone Number: {general.phone}</p>}
            {general.email && <p>Email: {general.email}</p>}
          </section>
        )}

        {general.profile && (
          <section className="careerprofile">
            <h2>Career Profile</h2>
            <p>{general.profile}</p>
          </section>
        )}

        <section>
          <h2>Educational Background</h2>
          {education.length === 0 ? (
            <p>No education added.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Institution</th>
                  <th>Programme Studied</th>
                  <th>Date Completed</th>
                </tr>
              </thead>
              <tbody>
                {education.map((e) => (
                  <tr key={e.id}>
                    <th scope="row">{e.school}</th>
                    <td>{e.programme}</td>
                    <td>{formatDate(e.dateCompleted)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          <h2>Work Experience</h2>
          {work.length === 0 ? (
            <p>No work experience added.</p>
          ) : (
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
                {work.map((w) => (
                  <tr key={w.id}>
                    <td>{w.facility}</td>
                    <td>{w.jobTitle}</td>
                    <td>{formatDate(w.startDate)}</td>
                    <td>{w.endDate ? formatDate(w.endDate) : "Present"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </>
  );
}
