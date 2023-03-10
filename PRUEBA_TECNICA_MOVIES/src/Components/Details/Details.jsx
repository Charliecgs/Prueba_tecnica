import "./Details.css";

import React from "react";

const Details = ({ param }) => {
  return (
    <dialog>
      <div className="divDialog">
        <h2>{param.title}</h2>
        <p>{param.description}</p>
        <p>{param.releaseYear}</p>
        <img src={param.images["Poster Art"].url} alt={param.title} />
        <button onClick={(ev) => (ev.target.offsetParent.open = false)}>
          Cerrar
        </button>
      </div>
    </dialog>
  );
};

export default Details;
