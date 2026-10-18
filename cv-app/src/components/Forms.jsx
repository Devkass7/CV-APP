import { useState } from "react";

import General from "./Forms/General";
import EducationalBackground from "./Forms/Educational";
import WorkExperience from "./Forms/WorkExperience";
import Cv from "./Cv";
import Header from "./Header";

const emptyGeneral = { fname: "", lname: "", phone: "", email: "", profile: "" };

export default function Forms() {
  const [showCv, setShowCv] = useState(false);
  const [general, setGeneral] = useState(emptyGeneral);
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  function handleGeneralChange(e) {
    const { name, value } = e.target;
    setGeneral((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setShowCv(true);
  }

  if (showCv) {
    return (
      <Cv
        general={general}
        education={education}
        work={work}
        onEdit={() => setShowCv(false)}
      />
    );
  }

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <General data={general} onChange={handleGeneralChange} />

        <EducationalBackground
          entries={education}
          onAdd={(entry) => setEducation((prev) => [...prev, entry])}
          onRemove={(id) => setEducation((prev) => prev.filter((e) => e.id !== id))}
        />

        <WorkExperience
          entries={work}
          onAdd={(entry) => setWork((prev) => [...prev, entry])}
          onRemove={(id) => setWork((prev) => prev.filter((w) => w.id !== id))}
        />

        <button type="submit">GENERATE CV</button>
      </form>
    </>
  );
}
