import { NavLink } from "react-router-dom";
import Slide from "react-reveal/Slide";
// function to display the header and navigation links
function Header() {
  return (
    <Slide top>
    <header>
      <h1>Hi.</h1>
      <div className="navbar">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
    </Slide>
  );
}

export default Header;
