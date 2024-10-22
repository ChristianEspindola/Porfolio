import React from "react";
import "./MainContent.css";
import ContactForm from "./ContactForm";
import Galeria from "./Galeria";
import Proyectos from "./Proyectos";

const MainContent = () => {
  return (
    <main>
      <div className="container">
        <section className="Sobremi">
          <h3>Sobre mí</h3>
          <h4>
            Soy Christian Espindola, Analista en sistemas y Desarrollador Web
            con experiencia en HTML, CSS, JavaScript, React, entre otras
            tecnologías.
          </h4>
          <h4>
            Tengo conocimientos en Game Maker Studio 2 y me apasiona crear
            interfaces web intuitivas y funcionales.
          </h4>
          <h4>
            Me enfoco en el desarrollo Frontend, con ganas de seguir aprendiendo
            tecnologías modernas y trabajar en proyectos colaborativos.
          </h4>
          <h4>
            Disfruto enfrentar desafíos y adaptarme a nuevas herramientas,
            siempre buscando mejorar mis habilidades técnicas.
          </h4>
        </section>

        <section className="Proyectos">
          <h3>Proyectos</h3>
          <Proyectos />
        </section>
        <section className="Skills">
          <h3>Skills</h3>
          <Galeria />
        </section>
        <section className="Cursos">
          <h3>Cursos y Certificaciones</h3>
          <div>.....</div>
        </section>
      </div>
      <ContactForm />
    </main>
  );
};

export default MainContent;
