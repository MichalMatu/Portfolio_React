import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <h1>Welcome</h1>
      <div className="navbar">
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
        </div>
    </header>
  );
}

export default Header;