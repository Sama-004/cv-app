import { useState } from "react";
import PropTypes from "prop-types";

export default function ExperienceSection({
  work,
  setWork,
  selectedExperience,
  setSelectedExperience,
  handleDeleteEntry,
  handleWorkChange,
  handleAddWork,
}) {
  return (
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
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <button onClick={() => handleDeleteEntry("work", index)}>
              <i className="fa-solid fa-trash-can"></i>
            </button>
          </div>
        ))}
      </div>
      <br />
      <button onClick={handleAddWork}>Add Experience</button>
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

ExperienceSection.propTypes = {
  work: PropTypes.array.isRequired,
  setWork: PropTypes.func.isRequired,
  selectedExperience: PropTypes.number,
  setSelectedExperience: PropTypes.func.isRequired,
  handleDeleteEntry: PropTypes.func.isRequired,
  handleWorkChange: PropTypes.func.isRequired,
  handleAddWork: PropTypes.func.isRequired,
};
