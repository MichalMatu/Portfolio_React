import projects from './projects.json';

function ProjectPage() {
const projectNumber = window.location.href.split('/').pop();
console.log(projectNumber);



const result = Object.values(projects).filter(item => item.count === parseInt(projectNumber));
console.log(result[0].title);





    
    return (
        <div className='projects big'>
            <h1>{result[0].title}</h1>
            <a href={result[0].website} target="_blank">{result[0].website}</a>
            <a href={result[0].github} target="_blank">{result[0].github}</a>
            <img src={result[0].image} alt={result[0].title} />
            <p>{result[0].long}</p>
            <a href ="/projects">Back to Projects</a>

        </div>
    );
}

export default ProjectPage;