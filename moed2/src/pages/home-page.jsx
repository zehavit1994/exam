import { useNavigate } from "react-router-dom";
import "../styles/home-page.css"

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homeContainer">
      <span>Willing</span>
      <div className="bT">
        <span
          onClick={() => {
            navigate("/find");
          }}
        >
          Find volunteering
        </span>
        <span onClick={()=>{
            navigate("/add")
        }}>Add volunteering</span>
      </div>
    </div>
  );
}

export default HomePage;
