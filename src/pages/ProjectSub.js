import projects from "./projects.json";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Zoom from 'react-reveal/Zoom';

const Project_sub = () => {
  const [showDescription, setShowDescription] = useState({});

  const handleClick = (title) => {
    const newShowDescription = { ...showDescription };
    newShowDescription[title] = !newShowDescription[title];
    setShowDescription(newShowDescription);
  };

  return (
    <>
      {projects.map((item) => {
        return (
          <Zoom>
          <div className="projects" key={item.title}>
            <div className="cards">
              <h1>{item.title}</h1>
              {/* navlinkt with count number from json */}
              <NavLink to={`/projectpage/${item.count}`}>
                Click for more info
              </NavLink>
              <p>
                <a href={item.website} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              </p>
              <p>
                <a href={item.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </p>
              <img src={item.image} alt={item.title} />
              <br></br>
              {showDescription[item.title] ? <p>{item.description}</p> : null}
              <button onClick={() => handleClick(item.title)}>
                {showDescription[item.title] ? "Hide Short info" : "Short info"}
              </button>
            </div>
          </div>
          </Zoom>
        );
      })}
    </>
  );
};

export default Project_sub;
