import React from "react";
import "./MainContent.css";
import ContactForm from "./ContactForm";
import Galeria from "./Galeria";
import Proyectoss from "./Proyectoss";
import Formacion from "./Formacion";
import Cursando from "./Cursando";
import Origen from "./Origen";
import SobreMi from "./SobreMi";

const MainContent = () => {
  return (
    <main>
      <div className="container">
        <section id="proyectos" className="Proyectos">
          <h3>Proyectos</h3>
          <Proyectoss />
        </section>
        <section id="formacion" className="Formacion">
          <h3>Formación Académica</h3>
          <Formacion />
        </section>
        <section
          id="skills"
          className="Skills"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <h3>Skills</h3>
          <Galeria />
        </section>
        <section id="sobre-mi" className="Sobremi" data-aos="fade-right">
          <h3>Sobre mí</h3>
          <SobreMi />
        </section>

        <section className="Origen" data-aos="flip-up">
          <h3>Origen: Buenos aires</h3>
          <Origen />
        </section>
        <section className="Cursando" data-aos="fade-left">
          <h3>cursando</h3>
          <Cursando />
        </section>
      </div>
      <ContactForm />
    </main>
  );
};

export default MainContent;
