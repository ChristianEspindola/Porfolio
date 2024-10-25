import React from "react";
import perfil from "../img/perfil.jpg";
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
          <a href="tu_linkedin" className="btn">
            LinkedIn
          </a>
          <a href="ruta_a_tu_cv" className="download-cv">
            Descargar CV
          </a>
          <a href="tu_github" className="btn">
            GitHub
          </a>
        </div>
        <div className="skills-icons"></div>
      </div>
    </header>
  );
};

export default Header;
