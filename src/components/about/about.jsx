import React from "react";
import "./about.css";
import ME from "../../assets/about.png";
import { FaAward } from "react-icons/fa";
import { MdOutlineAutoStories } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>À Propos</h5>
      <h2>De Moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Photo de moi jouant au basket-ball" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Formation WebForce3</small>
            </article>

            <article className="about__card">
              <MdOutlineAutoStories className="about__icon" />
              <h5>Connaissances</h5>
              <small>UX UI Design/POO/BDD</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Excellente Maitrise</h5>
              <small>HTML/CSS/JS/PHP/SQL</small>
            </article>
          </div>

          <p>
            Ayant commencé le code en autodidacte avec le langage Python, j'ai
            pu découvrir chez moi une passion inexploitée pour le code.
            <br /> Motivé, j'ai donc décidé de faire une reconversion
            professionnelle pour devenir Développeur Web. Actuellement étudiant
            chez Web Force3, je suis à la recherche d'une alternance dans le but
            de valider mon titre professionnel (RNCP) BAC+2 de niveau V
          </p>

          <a href="#contact" className="btn btn-primary">
            Discutons
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
