import projects from "./projects.json";


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
            <p><a href="{item.website}">Visit Project</a></p>
            <p><a href="{item.github}">GitHub</a></p>
            <img src={item.image} alt={item.title} /><br></br>
            {showDescription[item.title] ? <p>{item.description}</p> : null}
            <button onClick={() => handleClick(item.title)}>
              {showDescription[item.title] ? 'Hide Description' : 'Show Description'}
            </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project_sub;