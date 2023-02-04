// This should be a welcome landing page that contains:
// Your Name
// A headshot of you (or an avatar)
// Your brand statement
// Some indication that this is your portfolio site

import headshot from '../img/headshot.jpg';



function HomePages() {
  return (
    <div className="home_page">
      <h1>Hi, I'm <span className="name">Michal</span>.</h1>
      <img src={headshot} alt="Dylan's headshot" className="headshot" />
      <p>I will be front end  software engineer with a passion for building beautiful, user-friendly web applications.</p>
      <p>And this is my portfolio site.</p>
    </div>
  );
}

export default HomePages;
