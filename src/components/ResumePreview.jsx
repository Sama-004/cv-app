import PropTypes from "prop-types";
import "../App.css";
import "../Preview.css";

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
        <div className="personal-info">
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
          {education.length > 0 && <h3 className="header-text">Education </h3>}
          {education.map((educationEntry, index) => (
            <div key={index} className="education-entry">
              <div className="edu-info-group">
                <p className="date">
                  {educationEntry.startDate}{" "}
                  {educationEntry.endDate && ` - ${educationEntry.endDate}`}
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  <p className="location">{educationEntry.location}</p>
                </p>
              </div>
              <div className="edu-info-group">
                <p className="edu-info-schoolname">
                  {educationEntry.institution}
                </p>
                <p className="edu-info-degree">{educationEntry.degree}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="resume-section">
          {work.length > 0 && <h3 className="header-text">Work Experience</h3>}
          {/* {work.map((workEntry, index) => (
            <div key={index} className="experience-info">
              <div className="experience-info-group">
                <p className="date">
                  {workEntry.startDate}{" "}
                  {workEntry.endDate && ` - ${workEntry.endDate}`}
                  <p className="location">{workEntry.location}</p>
                </p>
              </div>
              <div className="experience-info-group">
                <p className="experience-info-companyname">
                  {workEntry.company}
                </p>
                <p className="experience-info-position">{workEntry.position}</p>
                <div className="desc">
                  <p className="experience-info-description">
                    {workEntry.description}
                  </p>
                </div>
              </div>
            </div> */}
          {work.map((workEntry, index) => (
            <div key={index} className="experience-info">
              <div className="date-location">
                <p className="date">
                  {workEntry.startDate}{" "}
                  {workEntry.endDate && ` - ${workEntry.endDate}`}
                </p>
                <p className="location">{workEntry.location}</p>
              </div>
              <div className="company-description">
                <p className="experience-info-companyname">
                  {workEntry.company}
                </p>
                <p className="experience-info-position">{workEntry.position}</p>
                <div className="desc">
                  <p className="experience-info-description">
                    {workEntry.description}
                  </p>
                </div>
              </div>
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
Resume Preview style
Fix heights
Align form
Rsponsiveness
*/
