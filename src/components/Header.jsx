import React from "react";

import CV from "../cv/ChristianEspindolaCV.pdf";
import "./Header.css";
import Navbaar from "./Navbaar";

const Header = () => {
  return (
    <header className="header">
      <Navbaar />

      <div className="header-content">
        <h1> Christian Espindola</h1>
        <h2>Frontend Developer</h2>

        <div className="header-buttons">
          <a
            href="https://www.linkedin.com/in/christian-espindola-analista/"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={CV}
            className="download-cv"
            download="ChristianEspindolaCV.pdf"
          >
            {" "}
            Descargar CV
          </a>

          <a
            href="https://github.com/ChristianEspindola"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <div className="skills-icons"></div>
      </div>
    </header>
  );
};

export default Header;
