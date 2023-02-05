import projects from "./projects.json";
import { NavLink } from "react-router-dom";

import { useState } from 'react';

const Project_sub = () => {
  const [showDescription, setShowDescription] = useState({});

  const handleClick = (title) => {
    const newShowDescription = {...showDescription};
    newShowDescription[title] = !newShowDescription[title];
    setShowDescription(newShowDescription);
  }

  return (
    <>
      {projects.map(item => {
        
        return (
          <div className="projects" key={item.title}>
            <div className="cards">
            <h1>{item.title}</h1>

           <NavLink to={`/projectpage/${item.count}`}>Clock for more info</NavLink>
            <p><a href={item.website} target="_blank">Visit Project</a></p>
            <p><a href={item.github} target="_blank">GitHub</a></p>
            <img src={item.image} alt={item.title} /><br></br>
            {showDescription[item.title] ? <p>{item.description}</p> : null}
            <button onClick={() => handleClick(item.title)}>
              {showDescription[item.title] ? 'Hide Short info' : 'Short info'}
            </button>
            
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project_sub;