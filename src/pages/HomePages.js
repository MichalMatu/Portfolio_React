import headshot from "../img/headshot.jpg";
import Fade from "react-reveal/Fade";
import { Zoom } from "react-reveal";
import { useState, useEffect } from "react";
// function homepage that returns the homepage
function HomePages() {

// create variable that change value from headshot to headshot2 every 5 seconds
const [headshot_pulse, setHeadshot] = useState("headshot");
useEffect(() => {
  const interval = setInterval(() => {
    setHeadshot(state => state === "headshot" ? "headshot2" : "headshot");
  }, 5000);
  return () => clearInterval(interval);
}, []);



  return (
    <Fade>
    <div className="home_page">
      <h1>
        Hi, I'm <span className="name">Michal</span>.
      </h1>
      <img src={headshot} alt="Michal" className={headshot_pulse} />
      <p className="statement">
      <Zoom left cascade>
        " I build beautiful and user-friendly websites, leveraging the latest
        technologies to create memorable and engaging experiences that drive
        results."
        </Zoom>
      </p>
      <p>And this is my portfolio site.</p>
    </div>
    </Fade>
  );
}

export default HomePages;
