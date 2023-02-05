import projects from './projects.json';

function ProjectPage() {
const projectNumber = window.location.href.split('/').pop();
console.log(projectNumber);
// save in object with key of projectNumber


const result = Object.values(projects).filter(item => item.count === parseInt(projectNumber));
console.log(result[0].title);





    
    return (
        <div className='projects big'>
            <h1>{result[0].title}</h1>
            <p>{result[0].website}</p>
            <p>{result[0].github}</p>
            <img src={result[0].image} alt={result[0].title} />
            <p>{result[0].description}</p>

        </div>
    );
}

export default ProjectPage;