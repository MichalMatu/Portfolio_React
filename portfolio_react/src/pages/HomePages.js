// This should be a welcome landing page that contains:
// Your Name
// A headshot of you (or an avatar)
// Your brand statement
// Some indication that this is your portfolio site



function HomePages() {
  return (
    <div className="home-page">
      <h1>Hi, I'm <span className="name">Dylan</span>.</h1>
      {/* <img src={headshot} alt="Dylan's headshot" className="headshot" /> */}
      <p className="brand-statement">I'm a full-stack software engineer with a passion for building beautiful, user-friendly web applications.</p>
      <p className="portfolio-notice">This is my portfolio site.</p>
    </div>
  );
}

export default HomePages;
