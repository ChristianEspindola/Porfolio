import React from "react";
import perfil from "../img/perfil.jpg";
import CV from "../cv/ChristianEspindolaCV.pdf";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={perfil} alt="Profile" className="profile-img" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#proyectos">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#cyc">Formacion</a>
          </li>
          <li>
            <a href="Contactme">Contacto</a>
          </li>
        </ul>
      </nav>

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
