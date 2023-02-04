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