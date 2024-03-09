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
          <h2 className="exp-prev">Work Experience</h2>
          {work.map((workEntry, index) => (
            <div key={index}>
              <p>
                Company: {workEntry.company} <br />
                Position: {workEntry.position} <br />
                Start Date: {workEntry.startDate} <br />
                End Date: {workEntry.endDate} <br />
                Location: {workEntry.location} <br />
                {/* Company: {workEntry.company} <br />
                Company: {workEntry.company} <br /> */}
              </p>
            </div>
          ))}
        </div>
        <div className="resume-section">
          <h2 className="edu-prev">Education</h2>
          {education.map((educationEntry, index) => (
            <div key={index}>
              <p>
                Instituition: {educationEntry.institution} <br />
                Degree: {educationEntry.degree} <br />
                Start Date: {educationEntry.startDate} <br />
                End Date: {educationEntry.endDate} <br />
                Location: {educationEntry.location} <br />
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

make education and experience interactive 
add buttons for education and experience
style the input labels 
// add load example like the button given 
// education before experience
check for responsiveness in other projects if there then add else leave 

*/
