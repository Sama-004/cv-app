import PropTypes from "prop-types";
import { useState } from "react";
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
    <div className="input-container">
      <div>
        <h2 className="edu-form">
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h2>
        {education.map((educationEntry, index) => (
          <div key={index}>
            <button onClick={() => setSelectedEducation(index)}>
              {educationEntry.name
                ? educationEntry.name
                : `Education ${index + 1}`}
            </button>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDeleteEntry("education", index)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      <br />
      <button onClick={handleAddEducation}>Add Education</button>
      {selectedEducation !== null && education[selectedEducation] ? (
        <div>
          <h2>{education[selectedEducation].name}</h2>
          {education[selectedEducation] ? (
            <div className="input-container">
              <input
                type="text"
                placeholder="institution"
                value={education[selectedEducation].institution}
                onChange={(e) =>
                  handleEducationDetailsChange(
                    selectedEducation,
                    "institution",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="degree"
                value={education[selectedEducation].degree}
                onChange={(e) =>
                  handleEducationDetailsChange(
                    selectedEducation,
                    "degree",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="Start Date"
                value={education[selectedEducation].startDate}
                onChange={(e) =>
                  handleEducationDetailsChange(
                    selectedEducation,
                    "startDate",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="End Date"
                value={education[selectedEducation].endDate}
                onChange={(e) =>
                  handleEducationDetailsChange(
                    selectedEducation,
                    "endDate",
                    e.target.value
                  )
                }
              />
              <br />
              <input
                type="text"
                placeholder="location"
                value={education[selectedEducation].location}
                onChange={(e) =>
                  handleEducationDetailsChange(
                    selectedEducation,
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
        <h2 className="exp-form">
          <i className="fa-solid fa-suitcase"></i> Experience
        </h2>
        <div>
          {work.map((workEntry, index) => (
            <div key={index}>
              <button onClick={() => setSelectedExperience(index)}>
                {workEntry.name ? workEntry.name : `Experience ${index + 1}`}
              </button>
              &nbsp;&nbsp;&nbsp;
              <button onClick={() => handleDeleteEntry("work", index)}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <br />
        <button onClick={handleAddWork}>Add Work Experience</button>
      </div>
      {selectedExperience !== null && work[selectedExperience] ? (
        <div>
          <h2>{work[selectedExperience].name}</h2>
          {work[selectedExperience] ? (
            <div className="input-container">
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
              <textarea
                placeholder="Enter description here"
                value={work[selectedExperience].description}
                onChange={(e) =>
                  handleWorkChange(
                    selectedExperience,
                    "description",
                    e.target.value
                  )
                }></textarea>
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
