import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <section id="experience">
      <h5>Mes</h5>
      <h2>Compétences</h2>

      <div className="container exp__container">
        <div className="exp__frontend">
          <h3>Développement Frontend</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>jQuery</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>

        <div className="exp__backend">
          <h3>Développement Backend</h3>
          <div className="exp__content">
            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Node Js</h4>
                <small className="text-light">Débutant</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>

            <article className="exp__details">
              <BsPatchCheckFill className="exp__details-icon" />
              <div>
                <h4>PhpMyAdmin</h4>
                <small className="text-light">Expérimenté</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
