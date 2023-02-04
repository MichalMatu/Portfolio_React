// Must include contact information:
// Email address
// Link to a PDF version of your CV
// Link to your GitHub profile
// Link to your LinkedIn page
// Must have a contact form for handling events

function Contact() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p><a href="mailto:michmatu@protonmail.com">e@mail</a>
      </p>
      <p>
      <a href="../../cv.pdf" target="_blank" rel="noreferrer noopener">CV</a>
      </p>
      <p>
        <a href="https://github.com/MichalMatu" target="_blank" rel="noreferrer noopener">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/michal-frontend/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
      </p>
    </div>
  );
}

export default Contact;
