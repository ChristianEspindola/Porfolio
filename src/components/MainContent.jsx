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
        <section className="Proyectos">
          <h3>Proyectos</h3>
          <Proyectoss />
        </section>
        <section className="Formacion">
          <h3>Formación Académica</h3>
          <Formacion />
        </section>
        <section className="Skills">
          <h3>Skills</h3>
          <Galeria />
        </section>
        <section className="Sobremi">
          <h3>Sobre mí</h3>
          <SobreMi />
        </section>

        <section className="Origen">
          <h3>Origen: Buenos aires</h3>
          <Origen />
        </section>
        <section className="Cursando">
          <h3>cursando</h3>
          <Cursando />
        </section>
      </div>
      <ContactForm />
    </main>
  );
};

export default MainContent;
