import PropTypes from "prop-types";
import "../App.css";

export default function WorkandEducation({
  work,
  setWork,
  education,
  setEducation,
}) {
  const handleAddWork = () => {
    setWork([
      ...work,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        // description: "",
      },
    ]);
  };
  const handleAddEducation = () => {
    setEducation([
      ...education,
      { institution: "", degree: "", startDate: "", endDate: "", location: "" },
    ]);
  };

  const handleWorkChange = (index, property, value) => {
    const updatedWork = [...work];
    updatedWork[index][property] = value;
    setWork(updatedWork);
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...education];
    updatedEducation[index][field] = value;
    setEducation(updatedEducation);
  };
  return (
    <div className="input-container">
      <div>
        <h2 className="exp-form">
          <i className="fa-solid fa-suitcase"></i> Experience
        </h2>
        {work.map((workEntry, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Company Name"
              value={workEntry.company}
              onChange={(e) =>
                handleWorkChange(index, "company", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="Position Title"
              value={workEntry.position}
              onChange={(e) =>
                handleWorkChange(index, "position", e.target.value)
              }
            />
            <br />
            {/* company: "", position: "", startDate: "", endDate: "", location: "", */}
            <input
              type="text"
              placeholder="Start Date"
              value={workEntry.startDate}
              onChange={(e) =>
                handleWorkChange(index, "startDate", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="End Date"
              value={workEntry.endDate}
              onChange={(e) =>
                handleWorkChange(index, "endDate", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="Location"
              value={workEntry.location}
              onChange={(e) =>
                handleWorkChange(index, "location", e.target.value)
              }
            />
          </div>
        ))}
        <button onClick={handleAddWork}>Add Work Experience</button>
      </div>
      <div>
        <h2 className="edu-form">
          {" "}
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h2>
        {education.map((educationEntry, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Institution"
              value={educationEntry.institution}
              onChange={(e) =>
                handleEducationChange(index, "institution", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="Degree"
              value={educationEntry.degree}
              onChange={(e) =>
                handleEducationChange(index, "degree", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="Start Date"
              value={educationEntry.startDate}
              onChange={(e) =>
                handleEducationChange(index, "startDate", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="End Date"
              value={educationEntry.endDate}
              onChange={(e) =>
                handleEducationChange(index, "endDate", e.target.value)
              }
            />
            <br />
            <input
              type="text"
              placeholder="Location"
              value={educationEntry.location}
              onChange={(e) =>
                handleEducationChange(index, "location", e.target.value)
              }
            />
            <br />
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
    </div>
  );
}

WorkandEducation.propTypes = {
  work: PropTypes.array.isRequired,
  setWork: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
  setEducation: PropTypes.func.isRequired,
};
