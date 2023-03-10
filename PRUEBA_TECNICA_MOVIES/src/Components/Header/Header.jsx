import "./Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="colors">
        <div className="blue">
          <div className="title">
            <h1 className="demo">DEMO Streaming</h1>
          </div>
          <div className="links">
            <NavLink to={"/login"}>Login</NavLink>
            <NavLink to={"/"} className="freeTrial">
              Start your free trial
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
