import { useState } from "react";
import PropTypes from "prop-types";

export default function EducationSection({
  education,
  setEducation,
  selectedEducation,
  setSelectedEducation,
  handleDeleteEntry,
  handleEducationDetailsChange,
  handleAddEducation,
}) {
  return (
    <div>
      <h2 className="edu-form">
        <i className="fa-solid fa-graduation-cap"></i> Education
      </h2>
      {education.map((educationEntry, index) => (
        <div key={index}>
          <button
            className="num-button"
            onClick={() => setSelectedEducation(index)}>
            {educationEntry.name
              ? educationEntry.name
              : `Education ${index + 1}`}
          </button>
          &nbsp;&nbsp;&nbsp;
          <button
            className="delete-button"
            onClick={() => handleDeleteEntry("education", index)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
      <br />
      <button onClick={handleAddEducation} className="create-form">
        <h4>
          <i className="fa-solid fa-plus"></i>
          Education
        </h4>
      </button>
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
    </div>
  );
}

EducationSection.propTypes = {
  education: PropTypes.array.isRequired,
  setEducation: PropTypes.func.isRequired,
  selectedEducation: PropTypes.number,
  setSelectedEducation: PropTypes.func.isRequired,
  handleDeleteEntry: PropTypes.func.isRequired,
  handleEducationDetailsChange: PropTypes.func.isRequired,
  handleAddEducation: PropTypes.func.isRequired,
};
