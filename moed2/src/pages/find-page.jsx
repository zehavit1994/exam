import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { VolunteeringContext } from "../context/volunteering-context";
import "../styles/find-page.css"

function FindPage() {
  const [volunteerName, setVolunteerName] = useState("");
  const { volunteering, setCity } = useContext(VolunteeringContext);
  const [selectedCity, setSelectedCity] = useState("");
  const navigate = useNavigate();

  return (
    <div className="find">
      <p>Find Willing</p>
      <input
        type="text"
        value={volunteerName}
        onChange={(event) => setVolunteerName(event.target.value)}
        placeholder="volunteer name"
      />
      <select
        value={selectedCity}
        onChange={(event) => setSelectedCity(event.target.value)}
      >
        <option value="">City</option>
        {[...new Set(volunteering.map((v) => v.location))].map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <span
        onClick={() => {
          if (volunteerName.length <= 2) {
            return alert("Invalid volunteer name");
          }
          if (selectedCity.length === 0) {
            return alert("invalid city");
          }
          setCity(selectedCity);
          navigate("/all");
        }}
      >
        Find
      </span>
    </div>
  );
}

export default FindPage;
