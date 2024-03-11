import PropTypes from "prop-types";
import { useState } from "react";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";

import "../App.css";

export default function WorkandEducation({
  work,
  setWork,
  education,
  setEducation,
}) {
  const [selectedExperience, setSelectedExperience] = useState();
  const [selectedEducation, setSelectedEducation] = useState();

  const handleAddWork = () => {
    setWork([
      ...work,
      {
        name: `Experience ${work.length + 1}`,
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      {
        name: `Education ${education.length + 1}`,
        institution: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        description: "",
      },
    ]);
  };

  const handleWorkChange = (index, field, value) => {
    const updatedWork = [...work];
    updatedWork[index][field] = value;
    setWork(updatedWork);
  };

  const handleEducationDetailsChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };

  const handleDeleteEntry = (type, index) => {
    if (type === "work") {
      const updatedWork = [...work];
      updatedWork.splice(index, 1);
      setWork(updatedWork);
    } else if (type === "education") {
      const updatedEducation = [...education];
      updatedEducation.splice(index, 1);
      setEducation(updatedEducation);
    }
  };

  return (
    <div className="input-container work-edu-container">
      <EducationSection
        education={education}
        setEducation={setEducation}
        selectedEducation={selectedEducation}
        setSelectedEducation={setSelectedEducation}
        handleDeleteEntry={handleDeleteEntry}
        handleEducationDetailsChange={handleEducationDetailsChange}
        handleAddEducation={handleAddEducation}
      />
      <ExperienceSection
        work={work}
        setWork={setWork}
        selectedExperience={selectedExperience}
        setSelectedExperience={setSelectedExperience}
        handleDeleteEntry={handleDeleteEntry}
        handleWorkChange={handleWorkChange}
        handleAddWork={handleAddWork}
      />
    </div>
  );
}

WorkandEducation.propTypes = {
  work: PropTypes.array.isRequired,
  setWork: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
  setEducation: PropTypes.func.isRequired,
};
