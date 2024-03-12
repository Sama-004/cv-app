import PropTypes from "prop-types";
import "../App.css";

export default function PersonalDetails({
  name,
  setName,
  email,
  setEmail,
  contact,
  setContact,
  city,
  setCity,
}) {
  return (
    <div className="input-container personal-details">
      <h2>
        {" "}
        <i className="fa-solid fa-person"></i> Personal Details
      </h2>
      <label htmlFor="name">Full Name</label>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="contact">Phone Number</label>
      <input
        type="text"
        placeholder="Contact"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
      />
      <br />
      <label htmlFor="City,Country">Location</label>
      <input
        type="text"
        placeholder="City, Country"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <br />
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
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
};
