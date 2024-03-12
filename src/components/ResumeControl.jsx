import PropTypes from "prop-types";
import "../App.css";

export default function ResumeControls({ clearResume, loadExample }) {
  return (
    <div className="resume-control">
      <button onClick={clearResume} className="clear-resume">
        <i className="fa-solid fa-trash"></i>
        Clear Resume
      </button>
      <button onClick={loadExample} className="load-example">
        Load Example
      </button>
    </div>
  );
}

ResumeControls.propTypes = {
  clearResume: PropTypes.func.isRequired,
  loadExample: PropTypes.func.isRequired,
};
