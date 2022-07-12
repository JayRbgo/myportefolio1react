import React from "react";
import "./footer.css";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <h3 href="#" className="footer__logo">
        Portefolio rélisé avec REACT
      </h3>
      <ul className="permalinks">
        <li>
          <a href="#">Accueil</a>
        </li>
        <li>
          <a href="#about">À Propos</a>
        </li>
        <li>
          <a href="#experience">Mes Compétences</a>
        </li>
        <li>
          <a href="#portfolio">Mes Projets</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.snapchat.com/add/godwin_jay?share_id=OTgyMDk0&locale=en_FR"
          target="blank"
        >
          <FaSnapchatGhost />
        </a>
        <a href="https://www.instagram.com/godwin_jay/" target="blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/the_basketteur3" target="blank">
          <FaTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Jay Rabago. Tout droit réservé.</small>
      </div>
    </footer>
  );
};

export default footer;
