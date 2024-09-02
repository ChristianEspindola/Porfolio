import React from "react";
import ReactDOM from "react-dom/client";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-brand">
          <img
            src="ruta_a_tu_foto_de_perfil"
            alt="Profile"
            className="profile-img"
          />
          <span className="brand-name">Christian espindola</span>
          <span className="role">Frontend Developer</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#experiencia">Experiencia</a>
          </li>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#certificaciones">Certificaciones</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </nav>
      <a href="ruta_a_tu_cv" className="download-cv">
        Descargar CV
      </a>
      <div className="header-content">
        <h1>Frontend Developer</h1>
        <h2>Christian espindola</h2>
        <p>Angular & Spring Boot</p>
        <div className="header-buttons">
          <a href="tu_linkedin" className="btn">
            LinkedIn
          </a>
          <a href="tu_github" className="btn">
            GitHub
          </a>
        </div>
        <div className="skills-icons">
          {/* Aquí van los iconos de tus habilidades */}
        </div>
      </div>
    </header>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
export default Header;
