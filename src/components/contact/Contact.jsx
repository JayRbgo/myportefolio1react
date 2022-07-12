import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_312c87l",
      "template_g8v1y5g",
      form.current,
      "_euC8EYznhyTHwBv-"
    );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h2>Contactez-moi</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>jay.rbgo@gmail.com</h5>
            <a href="mailto:jay.rbgo@gmail.com" target="_blank">
              Envoyez moi un mail
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Jay Rbgo</h5>
            <a href="https://m.me/godwin.rabago" target="_blank">
              Envoyez moi un DM
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>Cliquez ci-dessous pour</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+33659919333"
              target="_blank"
            >
              Envoyer un message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Votre Nom" required />
          <input type="email" name="email" placeholder="Votre Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Votre Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
