// Must render six instances of the Project component dynamically
// Be sure to store your project details data in a JSON file and import it into your project

import Project_sub from "./Project_sub";

function Projects() {
  return (
    <div className="projects">
      <p>Projects:</p>
      <Project_sub />
    </div>
  );
}

export default Projects;
