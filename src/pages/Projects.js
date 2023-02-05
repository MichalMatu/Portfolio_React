// Project:
// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// Must utilize Router props to properly render the right project based on user selection
// Must render the following info:
// Project title
// Link to the deployed version
// Link to the GitHub repository
// GIF or screenshot of the deployed application


import Project_sub from "./Project_sub";

function Projects() {
  return (
    <div className="projects">
      <Project_sub />
    </div>
  );
}

export default Projects;
