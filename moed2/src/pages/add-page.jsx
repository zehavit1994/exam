import { useContext, useState } from "react";
import { VolunteeringContext } from "../context/volunteering-context";
import { useNavigate } from "react-router-dom";
import "../styles/add-page.css"

function AddPage() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const { volunteering, setVolunteering } = useContext(VolunteeringContext);
  const navigate = useNavigate();
  return (
    <div className="add">
      <p>Add Willing</p>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Title"
      />
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Location"
      />
      <input
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Description"
      />
      <span
        onClick={() => {
          const letters = "abcdefghijklmnopqrstuvwxyz";

          if (title.length > 20 || title.length === 0) {
            return alert("invalid title");
          }
          if (location.split("").some((char) => !letters.includes(char))) {
            return alert("invalid location");
          }
          if (description.length > 200) {
            return alert("invalid description");
          }
          setVolunteering([...volunteering, {
            title,location,description
          }]);
          navigate("/")
        }}
      >
        Add
      </span>
    </div>
  );
}

export default AddPage;
