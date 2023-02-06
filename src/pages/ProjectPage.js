import projects from "./projects.json";

function ProjectPage() {
  const projectNumber = window.location.href.split("/").pop();
  // This code is using the Object.values() method to find all the values of the
  // "projects" object and filter them by the value of the "count" key.
  // It then compares the value of "count" with the value of the
  // "projectNumber" variable, after it has been parsed into an integer, and returns the result.
  const result = Object.values(projects).filter(
    (item) => item.count === parseInt(projectNumber)
  );

  return (
    <div className="projects big">
      <h1>{result[0].title}</h1>
      <a href={result[0].website} target="_blank" rel="noreferrer">
        {result[0].website}
      </a>
      <a href={result[0].github} target="_blank" rel="noreferrer">
        {result[0].github}
      </a>
      <img src={result[0].image} alt={result[0].title} />
      <p>{result[0].long}</p>
      <a href="/projects#/projects">Back to Projects</a>
    </div>
  );
}

export default ProjectPage;
