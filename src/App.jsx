import { useState } from "react";
import PersonalDetails from "./components/PersonalDetails";
import WorkandEducation from "./components/WorkandEducation";
import Resumepreview from "./components/ResumePreview";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [work, setWork] = useState("");
  const [education, setEducation] = useState("");
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
          profession={profession}
          setProfession={setProfession}
          country={country}
          setCountry={setCountry}
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
          profession={profession}
          country={country}
          city={city}
          work={work}
          education={education}
        />
      </div>
    </div>
  );
}
