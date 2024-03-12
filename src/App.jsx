import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkandEducation from "./components/WorkandEducation";
import Resumepreview from "./components/ResumePreview";
import ResumeControls from "./components/ResumeControl";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [work, setWork] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ]);
  const [education, setEducation] = useState([
    {
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);

  const clearResume = () => {
    // Implement logic to clear the resume data
    setName("");
    setEmail("");
    setContact("");
    setCity("");
    setWork([]);
    setEducation([]);
  };

  const loadExample = () => {
    setName("Samanyu Roy");
    setEmail("samanyu@example.com");
    setContact("123-456-7890");
    setCity("Example City, Example Country");

    setWork([
      {
        name: "Experience 1",
        company: "Example Company",
        position: "Example Position",
        startDate: "2010-01-01",
        endDate: "2015-12-31",
        location: "Example Location",
        description: "Example Description",
      },
    ]);

    setEducation([
      {
        name: "Education 1",
        institution: "Example University",
        degree: "Example Degree",
        startDate: "2005-01-01",
        endDate: "2009-12-31",
        location: "Example Location",
        description: "Example Description",
      },
    ]);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <ResumeControls clearResume={clearResume} loadExample={loadExample} />
        <PersonalDetails
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          contact={contact}
          setContact={setContact}
          city={city}
          setCity={setCity}
        />
        <WorkandEducation
          work={work}
          setWork={setWork}
          education={education}
          setEducation={setEducation}
        />
        <br />
        <br />
      </div>
      <div className="resume-preview">
        <Resumepreview
          name={name}
          email={email}
          contact={contact}
          city={city}
          work={work}
          education={education}
        />
      </div>
    </div>
  );
}
