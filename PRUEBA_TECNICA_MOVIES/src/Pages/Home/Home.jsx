import "./Home.css";

import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main>
      <div className="headerMain">
        <h1>Popular Titles</h1>
      </div>
      <div className="container">
        <div className="containerDiv">
          <NavLink to={"/series"}>
            <img
              src="../../../public/images/series.png"
              className="series"
              alt="series"
            />
          </NavLink>
          <p>Popular Series</p>
        </div>
        <div className="containerDiv">
          <NavLink to={"/peliculas"}>
            <img
              src="../../../public/images/movies.png"
              className="series"
              alt="movies"
            />
          </NavLink>
          <p>Popular Movies</p>
        </div>
      </div>
    </main>
  );
}

export default Home;
