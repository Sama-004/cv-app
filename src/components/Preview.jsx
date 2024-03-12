import PropTypes from "prop-types";
import "../App.css";

export default function Resumepreview({
  name,
  email,
  contact,
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
              {email && (
                <>
                  <i className="fas fa-envelope"></i>&nbsp; {email} &nbsp;
                </>
              )}
              {contact && (
                <>
                  <i className="fas fa-phone"></i>&nbsp; {contact} &nbsp;
                </>
              )}
              {city && (
                <>
                  <i className="fas fa-map-marker-alt"></i>&nbsp; {city} &nbsp;
                </>
              )}
            </p>
          </div>
        </div>
        <div className="resume-section">
          {education.length > 0 && <h2 className="edu-prev">Education </h2>}
          {education.map((educationEntry, index) => (
            <div key={index}>
              <p>
                {educationEntry.institution} <br />
                {educationEntry.degree}
                <i className="date">
                  {educationEntry.startDate}{" "}
                  {educationEntry.endDate && ` - ${educationEntry.endDate}`}
                  <br />
                  {educationEntry.location}
                </i>
              </p>
              <br />
            </div>
          ))}
        </div>
        <div className="resume-section">
          {work.length > 0 && <h2 className="exp-prev">Work Experience</h2>}
          {work.map((workEntry, index) => (
            <div key={index}>
              <p>
                {workEntry.company} <br />
                {workEntry.position} <br />
                <i className="date">
                  {workEntry.startDate}{" "}
                  {workEntry.endDate && ` - ${workEntry.endDate}`}
                  <br />
                  {workEntry.location} <br />
                </i>
                {workEntry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Resumepreview.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  education: PropTypes.array.isRequired,
  work: PropTypes.array.isRequired,
};

/*
Button Styles
Resume Preview style
Fix heights
Align form
Rsponsiveness
*/
