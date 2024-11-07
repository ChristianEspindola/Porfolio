import React, { useState } from "react";
import perfil from "../img/perfil.webp";
import "./Navbaar.css";

function Navbaar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={perfil} alt="Profile" className="profile-img" />
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
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
          <a href="#formacion">Formación</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbaar;
