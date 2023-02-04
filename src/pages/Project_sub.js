// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// Must utilize Router props to properly render the right project based on user selection
// Must render the following info:
// Project title
// Link to the deployed version
// Link to the GitHub repository
// GIF or screenshot of the deployed application

import projects from "./projects.json";

const Project_sub = () => {
  return (
    <>
      {projects.map(item => {
        return (
          <div className="projects">
            <div className="cards">
            <h1>{item.title}</h1>
            <p><a href="{item.deployed}">Deployed</a></p>
            <p><a href="{item.github}">GitHub</a></p>
            <img src={item.image} alt={item.title} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Project_sub;