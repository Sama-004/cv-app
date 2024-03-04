import PropTypes from "prop-types";
import "../App.css";

export default function Resumepreview({
  name,
  email,
  contact,
  profession,
  country,
  city,
  work,
  education,
}) {
  return (
    <div className="resume-preview-container">
      <div className="resume-content">
        <div className="resume-section">
          <div className="name">
            <h2 id="resume-name">{name}</h2>
            <p className="info">
              {email} {contact}
              {city} {country}
            </p>
          </div>
          <p>Profession: {profession}</p>
        </div>
        <div className="resume-section">
          <h2>Work Experience</h2>
          <p>{work}</p>
        </div>
        <div className="resume-section">
          <h2>Education</h2>
          <p>{education}</p>
        </div>
      </div>
    </div>
  );
}

Resumepreview.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
};
