// Must be a reusable component that ingests JSON data as props and renders a single instance for each project
// Must utilize Router props to properly render the right project based on user selection
// Must render the following info:
// Project title
// Link to the deployed version
// Link to the GitHub repository
// GIF or screenshot of the deployed application

function ProjectSub(props) {
  return (
    <div className="project-sub">
      <h1>{props.title}</h1>
      <p><a href={props.deployed}>Deployed Version</a></p>
      <p><a href={props.github}>GitHub Repository</a></p>
      <img src={props.image} alt={props.title} />
    </div>
  );
}

export default ProjectSub;
