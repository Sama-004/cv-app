import PropTypes from "prop-types";

export default function ResumeControls({ clearResume, loadExample }) {
  return (
    <div className="resume-controls">
      <button onClick={clearResume}>Clear Resume</button>
      <button onClick={loadExample}>Load Example</button>
    </div>
  );
}

ResumeControls.propTypes = {
  clearResume: PropTypes.func.isRequired,
  loadExample: PropTypes.func.isRequired,
};
