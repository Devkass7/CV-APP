export default function WorkExperience() {
  return (
    <>
      <h2>Work Experience</h2>
      <section className="work">
        {" "}
        <div>
          <label htmlFor="facility">NAME OF FACILITY</label>
          <input
            type="text"
            id="facility"
           defaultValue="Korlebu Teaching Hospital"
            name="facility"
          />
        </div>
        <div>
          <label htmlFor="programme">JOB TITLE</label>
          <input
            type="text"
            id="jobTitle"
           defaultValue="Medical Laboratory Scientist"
            name="jobTitle"
          />
        </div>
        <div className="date">
          <label htmlFor="start-date">Start Date:</label>
          <input type="date" id="start-date" name="startDate"></input>

          <label htmlFor="end-date">End Date:</label>
          <input type="date" id="end-date" name="endDate"></input>
        </div>
        <div>
          <button>Add</button>
        </div>
      </section>
    </>
  );
}
