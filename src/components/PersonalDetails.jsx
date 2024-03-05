import PropTypes from "prop-types";
import "../App.css";

export default function PersonalDetails({
  name,
  setName,
  email,
  setEmail,
  contact,
  setContact,
  profession,
  setProfession,
  city,
  setCity,
}) {
  return (
    <div className="input-cointainer">
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="City, Country"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
      />
    </div>
  );
}

PersonalDetails.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  contact: PropTypes.string.isRequired,
  setContact: PropTypes.func.isRequired,
  profession: PropTypes.string.isRequired,
  setProfession: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};
