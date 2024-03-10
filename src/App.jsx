import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkandEducation from "./components/WorkandEducation";
import Resumepreview from "./components/ResumePreview";
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
  return (
    <div className="app-container">
      <div className="form-container">
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
