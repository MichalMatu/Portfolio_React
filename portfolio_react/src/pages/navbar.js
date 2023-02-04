// create navbar component

function Navbar(props) {
    return (
        <div className="navbar">
        <nav>
            <button onClick={() => props.setPage('HomePages')}>Home</button>
            <button onClick={() => props.setPage('Projects')}>Projects</button>
            <button onClick={() => props.setPage('Contact')}>Contact</button>
        </nav>
        </div>
        
    );
    }

    export default Navbar;
    