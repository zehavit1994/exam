import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { VolunteeringContext } from "../context/volunteering-context";
import "../styles/root.css"

const Root = () => {
  const [volunteering, setVolunteering] = useState([]);
  const [city, setCity] = useState("");

  return (
    <VolunteeringContext.Provider value={{ volunteering, setVolunteering, city, setCity }}>
      <div className="main-layout">
        <div className="header-container">
          <span className="logo">Willing upp</span>
        </div>
        <div className="outlet">
          <Outlet />
        </div>
        <div className="footer-container">
          <span className="stamp">Zehavit Halachi</span>
        </div>
      </div>
    </VolunteeringContext.Provider>
  );
};

export default Root;
