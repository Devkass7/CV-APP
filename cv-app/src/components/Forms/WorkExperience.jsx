import { useState } from "react";
import { formatDate } from "./formatDate";

const emptyDraft = { facility: "", jobTitle: "", startDate: "", endDate: "" };

export default function WorkExperience({ entries, onAdd, onRemove }) {
  const [draft, setDraft] = useState(emptyDraft);
  const canAdd = draft.facility.trim() !== "";

  function handleChange(e) {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  }

  function addEntry() {
    if (!canAdd) return;
    onAdd({ id: crypto.randomUUID(), ...draft });
    setDraft(emptyDraft);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addEntry();
    }
  }

  return (
    <>
      <h2>Work Experience</h2>
      <section className="work" onKeyDown={handleKeyDown}>
        <div>
          <label htmlFor="facility">NAME OF FACILITY</label>
          <input type="text" id="facility" name="facility" placeholder="Korle Bu Teaching Hospital"
            value={draft.facility} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="jobTitle">JOB TITLE</label>
          <input type="text" id="jobTitle" name="jobTitle" placeholder="Medical Laboratory Scientist"
            value={draft.jobTitle} onChange={handleChange} />
        </div>

        <div className="date">
          <label htmlFor="startDate">Start Date:</label>
          <input type="date" id="startDate" name="startDate"
            value={draft.startDate} onChange={handleChange} />

          <label htmlFor="endDate">End Date:</label>
          <input type="date" id="endDate" name="endDate"
            value={draft.endDate} onChange={handleChange} />
        </div>

        <button type="button" onClick={addEntry} disabled={!canAdd}>Add</button>
      </section>

      <ul className="entries">
        {entries.map((entry) => (
          <li key={entry.id}>
            <span>
              {entry.facility}
              {entry.jobTitle && `,  ${entry.jobTitle}`}
              {entry.startDate && ` (${formatDate(entry.startDate)} – ${entry.endDate ? formatDate(entry.endDate) : "Present"})`}
            </span>
            <button className="remove" type="button" onClick={() => onRemove(entry.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
