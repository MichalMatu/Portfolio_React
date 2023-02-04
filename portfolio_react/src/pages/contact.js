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
      <a href="{cv}" target="_blank">CV</a>
      </p>
      <p>
        <a href="https://github.com/MichalMatu">GitHub</a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/michal-frontend/">LinkedIn</a>
      </p>
    </div>
  );
}

export default Contact;
