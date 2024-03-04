import PropTypes from "prop-types";
import "../App.css";
export default function WorkandEducation({
  work,
  setWork,
  education,
  setEducation,
}) {
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="work experience"
        value={work}
        onChange={(e) => setWork(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Education details"
        value={education}
        onChange={(e) => setEducation(e.target.value)}
      />
    </div>
  );
}
WorkandEducation.propTypes = {
  work: PropTypes.string.isRequired,
  setWork: PropTypes.func.isRequired,
  education: PropTypes.string.isRequired,
  setEducation: PropTypes.func.isRequired,
};
