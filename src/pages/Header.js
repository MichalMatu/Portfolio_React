import { NavLink } from "react-router-dom";
// function to display the header and navigation links
function Header() {
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
