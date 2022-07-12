import React from "react";
import CV from "../../assets/CV_JAY.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Télécharger le CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contactez moi
      </a>
    </div>
  );
};

export default CTA;
