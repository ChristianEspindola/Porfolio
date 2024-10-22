import React, { useState, useEffect } from "react";
import htmlImage from "../img/skills/html.png";
import cssImage from "../img/skills/css.png";
import jsImage from "../img/skills/js.png";
import reactImage from "../img/skills/react.png";
import boostrapImage from "../img/skills/boostrap.png";
import sassImage from "../img/skills/sass.png";
import sqlImage from "../img/skills/sql.png";
import gitImage from "../img/skills/git.png";
import githubImage from "../img/skills/github.png";
import figmaImage from "../img/skills/figma.png";
import firebaseImage from "../img/skills/firebase.png";

const imagenes = [
  { src: htmlImage, alt: "HTML" },
  { src: cssImage, alt: "CSS" },
  { src: jsImage, alt: "JavaScript" },
  { src: reactImage, alt: "React" },
  { src: boostrapImage, alt: "Boostrap" },
  { src: sassImage, alt: "sass" },
  { src: sqlImage, alt: "sql" },
  { src: gitImage, alt: "git" },
  { src: githubImage, alt: "github" },
  { src: figmaImage, alt: "figma" },
  { src: firebaseImage, alt: "firebase" },
];

const Galeria = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleImagesCount = 5;
  const totalImages = imagenes.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % totalImages); // Incrementa el índice y reinicia en el final
    }, 3000); // Cambia las imágenes cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, []);

  // Crear un array que incluye las imágenes duplicadas al final para un bucle suave
  const visibleImages = [
    ...imagenes,
    ...imagenes.slice(0, visibleImagesCount), // Duplicamos las primeras imágenes al final
  ];

  return (
    <div className="galeria-wrapper">
      <div
        className="galeria"
        style={{
          transform: `translateX(-${(startIndex % totalImages) * 110}px)`, // Ajusta el desplazamiento
        }}
      >
        {visibleImages.map((imagen, index) => (
          <img
            key={index}
            src={imagen.src}
            alt={imagen.alt}
            className="imagen"
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
