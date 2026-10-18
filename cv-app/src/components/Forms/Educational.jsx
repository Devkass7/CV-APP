import { useState } from "react";
import {formatDate} from "./formatDate";

const emptyDraft = { school: "", programme: "", dateCompleted: "" };

export default function EducationalBackground({ entries, onAdd, onRemove }) {
  const [draft, setDraft] = useState(emptyDraft);
  const canAdd = draft.school.trim() !== "";

  function handleChange(e) {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  }

  function addEntry() {
    if (!canAdd) return;
    onAdd({ id: crypto.randomUUID(), ...draft });
    setDraft(emptyDraft);
  }

  // Enter adds the entry instead of submitting the whole CV form
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addEntry();
    }
  }

  return (
    <>
      <h2>Educational Background</h2>
      <div className="education" onKeyDown={handleKeyDown}>
        <div>
          <label htmlFor="school">NAME OF UNIVERSITY</label>
          <input type="text" id="school" name="school" placeholder="Accra Technical University"
            value={draft.school} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="programme">PROGRAMME OFFERED</label>
          <input type="text" id="programme" name="programme" placeholder="Medical Laboratory Science"
            value={draft.programme} onChange={handleChange} />
        </div>

        <div>
          <label htmlFor="dateCompleted">DATE COMPLETED</label>
          <input type="date" id="dateCompleted" name="dateCompleted"
            value={draft.dateCompleted} onChange={handleChange} />
        </div>

        <button type="button" onClick={addEntry} disabled={!canAdd}>Add</button>
      </div>

      <ul className="entries">
        {entries.map((entry) => (
          <li key={entry.id}>
            <span>
              {entry.school}
              {entry.programme && `, ${entry.programme}`}
              {entry.dateCompleted && ` (${formatDate(entry.dateCompleted)})`}
            </span>
            <button type="button" onClick={() => onRemove(entry.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
