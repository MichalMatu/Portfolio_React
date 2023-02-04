// Must be rendered across every page component of the site
// Must contain a Navbar
import Navbar from "./Navbar";

function Header() {
  return (
    <header>
      <h1>Welcome you:</h1>
      <Navbar />
    </header>
  );
}

export default Header;