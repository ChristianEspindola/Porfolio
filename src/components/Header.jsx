import React from "react";
import CV from "../cv/ChristianEspindolaCV.pdf";
import "./Header.css";
import Navbaar from "./Navbaar";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "@sweetalert2/theme-borderless/borderless.css";

const handleDownloadCV = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    customClass: {
      popup: "custom-toast",
    },
    background: `rgba(54, 70, 93, 0.8) `,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  // Mostrar el Toast
  Toast.fire({
    icon: "success",
    title: "Descarga iniciada",
  });

  // Crear y activar el enlace de descarga
  const link = document.createElement("a");
  link.href = CV; // Utiliza el archivo PDF importado
  link.download = "ChristianEspindolaCV.pdf";
  link.click();
};

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

          {/* Botón para mostrar Toast y descargar el CV */}
          <button className="download-cv" onClick={handleDownloadCV}>
            Descargar CV
          </button>

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
