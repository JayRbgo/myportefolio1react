import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Projets Scolaire</h5>
      <h2>Frontend</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="EL_PORTEFOLIO" />
          </div>
          <h3>
            Évaluation sur la création d'un site Web (HTML / CSS / Sans
            Maquette)
          </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://jayrabago.go.yo.fr/el_portefolio"
              target="_blank"
              className="btn btn-primary"
            >
              Visitez
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="EL_PORTEFOLIO" />
          </div>
          <h3>
            Évaluation sur la création d'un site Web (HTML / CSS/ JS / Avec
            maquette)
          </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://jayrabago.go.yo.fr/RentalCar/code/"
              target="_blank"
              className="btn btn-primary"
            >
              Visitez
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="EL_PORTEFOLIO" />
          </div>
          <h3>Création du site Web NaturEmoi From Scratch</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://jayrabago.go.yo.fr/natureEmoi/code/"
              target="_blank"
              className="btn btn-primary"
            >
              Visitez
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="EL_PORTEFOLIO" />
          </div>
          <h3>Création d'un site Vitrine</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn">
              Github
            </a>
            <a
              href="https://jayrabago.go.yo.fr/BAR_COCKTAIL/code/"
              target="_blank"
              className="btn btn-primary"
            >
              Visitez
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default portfolio;
