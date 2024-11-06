import React from "react";
import perfil from "../img/perfil.jpg";

function Navbaar() {
  return (
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
          <a href="#formacion">Formacion</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbaar;
