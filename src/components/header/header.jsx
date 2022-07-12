import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/imgH.png";
import HeaderSocial from "./headerSocials";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Bonjour ! Je suis</h5>
        <h1>Jay Rabago</h1>
        <h5 className="text-light">Developpeur Web Jr.</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="Jay" />
        </div>

        <a href="#contact" className="scroll_down">
          Découvrir
        </a>
      </div>
    </header>
  );
};

export default header;
