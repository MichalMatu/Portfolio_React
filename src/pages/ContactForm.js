import React, { useState } from "react";
import Fade from "react-reveal/Fade";
// variable to store the endpoint URL
const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/db582bb0-a4e8-11ed-a31e-753411848f80";
// contact form component definition and display return statement when sent to the browser
const ContactForm = () => {
  // state variables to store the form data
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };
  // if the form has been submitted, display a thank you message
  if (submitted) {
    return (
      <>
        <div>Thank you!</div>
        <div>I will be in touch soon.</div>
      </>
    );
  }
  // second return statement to display the rest of the contact information
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <Fade right>
        <div>
          <input type="text" placeholder="Your name" name="name" required />
        </div>
      </Fade>
      <Fade left>
      <div>
        <input type="email" placeholder="Email" name="email" required />
      </div>
      </Fade>
      <Fade right>
      <div>
        <textarea placeholder="Your message" name="message" required />
      </div>
      </Fade>
      <Fade left>
      <div>
        <button type="submit">Send a message</button>
      </div>
      </Fade>
    </form>
  );
};

export default ContactForm;
