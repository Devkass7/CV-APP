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
            placeholder="Korlebu Teaching Hospital"
          />
        </div>
        <div>
          <label htmlFor="programme">JOB TITLE</label>
          <input
            type="text"
            id="programme"
            placeholder="Medical Laboratory Scientist"
          />
        </div>
        <div className="date">
          <label for="start-date">Start Date:</label>
          <input type="date" id="start-date" name="start-date"></input>

          <label for="end-date">End Date:</label>
          <input type="date" id="end-date" name="end-date"></input>
        </div>
        <div>
          <button>Add</button>
        </div>
      </section>
    </>
  );
}
