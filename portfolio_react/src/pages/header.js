// Must be rendered across every page component of the site
// Must contain a Navbar

function Header(props) {
  return (
    <header>
      <h1>Welcome you:</h1>
      <div className="navbar">
        <nav>
            <button onClick={() => props.setPage('HomePages')}>Home</button>
            <button onClick={() => props.setPage('Projects')}>Projects</button>
            <button onClick={() => props.setPage('Contact')}>Contact</button>
        </nav>
        </div>
    </header>
  );
}

export default Header;