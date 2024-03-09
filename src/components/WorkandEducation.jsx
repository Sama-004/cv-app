import PropTypes from "prop-types";
import { useState } from "react";
import "../App.css";

export default function WorkandEducation({
  work,
  setWork,
  education,
  setEducation,
}) {
  const [selectedExperience, setSelectedExperience] = useState(null);

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
      },
    ]);
  };

  const handleAddEducation = () => {
    setEducation([
      ...education,
      { name: `Education ${education.length + 1}`, details: "" },
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

  return (
    <div className="input-container">
      <div>
        <h2 className="exp-form">
          <i className="fa-solid fa-suitcase"></i> Experience
        </h2>
        <div>
          {work.map((workEntry, index) => (
            <div key={index}>
              <button onClick={() => setSelectedExperience(index)}>
                {workEntry.name}
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleAddWork}>Add Work Experience</button>
      </div>
      {selectedExperience !== null && work[selectedExperience] ? (
        <div>
          <h2>{work[selectedExperience].name}</h2>
          {work[selectedExperience] ? (
            <div>
              <input
                type="text"
                placeholder="Company Name"
                value={work[selectedExperience].company}
                onChange={(e) =>
                  handleWorkChange(
                    selectedExperience,
                    "company",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="Position Title"
                value={work[selectedExperience].position}
                onChange={(e) =>
                  handleWorkChange(
                    selectedExperience,
                    "position",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="Start Date"
                value={work[selectedExperience].startDate}
                onChange={(e) =>
                  handleWorkChange(
                    selectedExperience,
                    "startDate",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="End Date"
                value={work[selectedExperience].endDate}
                onChange={(e) =>
                  handleWorkChange(
                    selectedExperience,
                    "endDate",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="Location"
                value={work[selectedExperience].location}
                onChange={(e) =>
                  handleWorkChange(
                    selectedExperience,
                    "location",
                    e.target.value
                  )
                }
              />
            </div>
          ) : null}
        </div>
      ) : null}
      <div>
        <h2 className="edu-form">
          {" "}
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h2>
        {education.map((educationEntry, index) => (
          <div key={index}>
            <button onClick={() => setSelectedExperience(index)}>
              {educationEntry.name}
            </button>
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
      {selectedExperience !== null && education[selectedExperience] ? (
        <div>
          <h2>{education[selectedExperience].name}</h2>
          {education[selectedExperience].details ? (
            <div>
              <input
                type="text"
                placeholder="Details"
                value={education[selectedExperience].details}
                onChange={(e) =>
                  handleEducationDetailsChange(
                    selectedExperience,
                    "details",
                    e.target.value
                  )
                }
              />
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

WorkandEducation.propTypes = {
  work: PropTypes.array.isRequired,
  setWork: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
  setEducation: PropTypes.func.isRequired,
};
