import PropTypes from "prop-types";
import "../App.css";

export default function WorkandEducation({
  work,
  setWork,
  education,
  setEducation,
}) {
  const handleAddWork = () => {
    setWork([...work, ""]);
  };
  const handleAddEducation = () => {
    setEducation([...education, ""]);
  };

  const handleWorkChange = (index, value) => {
    const updatedWork = [...work];
    updatedWork[index] = value;
    setWork(updatedWork);
  };

  const handleEducationChange = (index, value) => {
    const updatedEducation = [...education];
    updatedEducation[index] = value;
    setEducation(updatedEducation);
  };
  return (
    <div className="input-container">
      <div>
        <h2>Experience</h2>
        {work.map((workEntry, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Work experience"
              value={workEntry}
              onChange={(e) => handleWorkChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleAddWork}>Add Work Experience</button>
      </div>
      <div>
        <h2>Education</h2>
        {education.map((educationEntry, index) => (
          <div key={index}>
            <input
              type="text"
              placeholder="Education details"
              value={educationEntry}
              onChange={(e) => handleEducationChange(index, e.target.value)}
            />
          </div>
        ))}
        <button onClick={handleAddEducation}>Add Education</button>
      </div>
    </div>
  );
}

WorkandEducation.propTypes = {
  work: PropTypes.string.isRequired,
  setWork: PropTypes.func.isRequired,
  education: PropTypes.string.isRequired,
  setEducation: PropTypes.func.isRequired,
};
