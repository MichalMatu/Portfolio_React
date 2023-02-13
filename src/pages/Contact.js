import ContactForm from "./ContactForm";
import Fade from "react-reveal/Fade";

function Contact() {
  return (
    <div className="contact">
      <Fade left>
      <h1>Contact</h1>
      </Fade>
      <Fade right>
      <p>
        <a href="mailto:michmatu@protonmail.com">e@mail</a>
      </p>
      </Fade>
      <Fade left>
      <p>
        <a
          href="https://michalmatuszewski.com/cv.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          CV
        </a>
      </p>
      </Fade>
      <Fade right>
      <p>
        <a
          href="https://github.com/MichalMatu"
          target="_blank"
          rel="noreferrer noopener"
        >
          GitHub
        </a>
      </p>
      </Fade>
      <Fade left>
      <p>
        <a
          href="https://www.linkedin.com/in/michal-frontend/"
          target="_blank"
          rel="noreferrer noopener"
        >
          LinkedIn
        </a>
      </p>
      </Fade>
    
      <ContactForm />
    
    </div>
  );
}

export default Contact;
