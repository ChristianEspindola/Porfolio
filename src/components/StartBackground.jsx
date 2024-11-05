import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

const StarsBackground = () => {
  useEffect(() => {
    const createStars = (numStars) => {
      const bodyHeight = document.body.scrollHeight; // Altura total del documento
      const rootElement = document.getElementById("root");

      for (let i = 0; i < numStars; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Posición aleatoria en toda la página, no solo en el viewport
        star.style.top = Math.random() * bodyHeight + "px"; // Posición en función de toda la altura del contenido
        star.style.left = Math.random() * 100 + "vw";

        // Tamaño y duración aleatoria del parpadeo
        const size = Math.random() * 3 + 1 + "px";
        star.style.width = size;
        star.style.height = size;
        star.style.animationDuration = Math.random() * 3 + 1 + "s";

        rootElement.appendChild(star);
      }
    };

    const handleResize = () => {
      const currentStars = document.querySelectorAll(".star").length;
      const totalStarsNeeded = 300; // Ajusta si quieres más estrellas
      if (currentStars < totalStarsNeeded) {
        createStars(totalStarsNeeded - currentStars); // Crea solo las estrellas que faltan
      }
    };

    createStars(200); // Crear las estrellas iniciales

    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener("scroll", handleResize); // Asegura que haya estrellas mientras haces scroll

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <div id="root">
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
};

export default StarsBackground;
