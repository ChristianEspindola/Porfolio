import React, { useState, useEffect, useRef } from "react";
import htmlImage from "../img/skills/html.png";
import cssImage from "../img/skills/css.png";
import jsImage from "../img/skills/js.png";
import reactImage from "../img/skills/react.png";
import boostrapImage from "../img/skills/boostrap.png";
import tailwind from "../img/skills/tailwind.png";
import sassImage from "../img/skills/sass.png";
import sqlImage from "../img/skills/sql.png";
import gitImage from "../img/skills/git.png";
import githubImage from "../img/skills/github.png";
import figmaImage from "../img/skills/figma.png";
import photoshop from "../img/skills/photoshop.png";
import firebaseImage from "../img/skills/firebase.png";

const imagenes = [
  { src: htmlImage, alt: "HTML" },
  { src: cssImage, alt: "CSS" },
  { src: jsImage, alt: "JavaScript" },
  { src: reactImage, alt: "React" },
  { src: boostrapImage, alt: "Boostrap" },
  { src: tailwind, alt: "tailwind" },
  { src: sassImage, alt: "Sass" },
  { src: sqlImage, alt: "SQL" },
  { src: gitImage, alt: "Git" },
  { src: githubImage, alt: "GitHub" },
  { src: figmaImage, alt: "Figma" },
  { src: photoshop, alt: "photoshop" },
  { src: firebaseImage, alt: "Firebase" },
];

const Galeria = () => {
  const [visibleImagesCount, setVisibleImagesCount] = useState(5); // Número de imágenes visibles
  const [currentIndex, setCurrentIndex] = useState(0); // Índice actual para controlar el desplazamiento
  const galeriaRef = useRef(null);

  // Ajustar el número de imágenes visibles según el tamaño de la pantalla
  useEffect(() => {
    const updateVisibleImagesCount = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1300) {
        setVisibleImagesCount(5);
      } else if (screenWidth > 768) {
        setVisibleImagesCount(3);
      } else {
        setVisibleImagesCount(2);
      }
    };
    updateVisibleImagesCount();
    window.addEventListener("resize", updateVisibleImagesCount);
    return () => window.removeEventListener("resize", updateVisibleImagesCount);
  }, []);

  // Auto desplazamiento suave cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === imagenes.length - visibleImagesCount
          ? 0 // Si llega al final, vuelve al inicio
          : prevIndex + 1
      );
    }, 3000); // Ajusta la velocidad aquí (3000 ms = 3 segundos)

    return () => clearInterval(interval);
  }, [visibleImagesCount]);

  return (
    <div
      className="galeria-wrapper"
      style={{ overflow: "hidden", width: "100%" }}
    >
      <div
        className="galeria"
        ref={galeriaRef}
        style={{
          display: "flex",
          transition: "transform 1s ease-in-out", // Transición suave
          transform: `translateX(-${(currentIndex * 100) / visibleImagesCount}%)`,
        }}
      >
        {/* Duplicamos imágenes para garantizar bucle continuo */}
        {imagenes.concat(imagenes).map((imagen, index) => (
          <img
            key={index}
            src={imagen.src}
            alt={imagen.alt}
            loading="lazy"
            className="imagen"
            style={{ width: `${100 / visibleImagesCount}%` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
