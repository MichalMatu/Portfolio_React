import headshot from "../img/headshot.jpg";
import Tada from "react-reveal/Tada";
// function homepage that returns the homepage
function HomePages() {
  return (
    <Tada>
    <div className="home_page">
      <h1>
        Hi, I'm <span className="name">Michal</span>.
      </h1>
      <img src={headshot} alt="Dylan's headshot" className="headshot" />
      <p className="statement">
        " I build beautiful and user-friendly websites, leveraging the latest
        technologies to create memorable and engaging experiences that drive
        results."
      </p>
      <p>And this is my portfolio site.</p>
    </div>
    </Tada>
  );
}

export default HomePages;
