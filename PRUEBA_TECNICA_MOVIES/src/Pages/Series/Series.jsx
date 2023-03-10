import "./Series.css";

import React from "react";
import { useEffect, useState } from "react";

import Details from "../../Components/Details/Details";

const Series = () => {
  const [serie1, setSerie1] = useState([]);

  const getSeries = async () => {
    const series = await fetch(
      "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json"
    );

    const serie = await series.json();
    const datos = serie.entries;

    const filteredDatos = datos.filter(
      (dato) => dato.programType === "series" && dato.releaseYear >= 2010
    );
    setSerie1(filteredDatos);
  };

  useEffect(() => {
    getSeries();
  }, []);

  const primeros20 = serie1.slice(0, 20);
  console.log(primeros20);

  const ordenados = primeros20.sort((a, b) => {
    if (a.title < b.title) {
      return -1;
    } else {
      return 1;
    }
  });

  console.log(ordenados);

  return (
    <main>
      <div className="containerSeries">
        <div className="headerMain">
          <h1>Popular Series</h1>
        </div>
        <div className="figureDiv">
          {ordenados.map((serie) => (
            <figure key={serie.title}>
              <img src={serie.images["Poster Art"].url} alt={serie.title} />
              <button onClick={(ev) => (ev.target.nextSibling.open = true)}>
                {serie.title}
              </button>
              <Details param={serie} />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Series;
