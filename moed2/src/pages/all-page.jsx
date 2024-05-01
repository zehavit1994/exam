import { useContext, useState } from "react";
import { VolunteeringContext } from "../context/volunteering-context";
import { useNavigate } from "react-router-dom";
import "../styles/all-page.css";

function AllPage() {
  const { volunteering, city, setVolunteering } =
    useContext(VolunteeringContext);
  const navigate = useNavigate();
  const [selectedByIndex, setSelectedByIndex] = useState({});

  return (
    <div className="all">
      {volunteering.map((element, i) =>
        element.location === city ? (
          <Volunteering
            onClick={() =>
              setSelectedByIndex({
                ...selectedByIndex,
                [i]: !selectedByIndex[i],
              })
            }
            key={i}
            {...element}
            selected={selectedByIndex[i] === true}
          />
        ) : null
      )}
      <span
        onClick={() => {
          setVolunteering(
            volunteering.filter((element, i) => !(selectedByIndex[i] === true)),
            navigate("/")
          );
        }}
      >
        Ok
      </span>
    </div>
  );
}

function Volunteering(params) {
  return (
    <div
      onClick={params.onClick}
      style={{ backgroundColor: params.selected ? "#00ff00" : "transparent" }}
    >
      <span>{params.title}</span>
      {params.selected ? <span>{params.description}</span> : null}
    </div>
  );
}

export default AllPage;
