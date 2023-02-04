// Must be rendered across every page component of the site
// Must contain a Navbar
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="header">
      
      <Navbar />
    </div>
  );
}

export default Header;