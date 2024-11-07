import React from "react";
import perfil from "../img/perfil.webp";
function SobreMi() {
  return (
    <div className="containersobremi">
      <div className="text">
        <h4>
          Soy Christian Espindola, Analista en sistemas y Desarrollador Web con
          experiencia en HTML, CSS, JavaScript, React, entre otras tecnologías.
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
          Disfruto enfrentar desafíos y adaptarme a nuevas herramientas, siempre
          buscando mejorar mis habilidades técnicas.
        </h4>
      </div>
      <div className="imgsobremi">
        <img src={perfil} alt="Profile" className="imgsobremi" />
      </div>
    </div>
  );
}

export default SobreMi;
