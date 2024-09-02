import React from "react";
import ReactDOM from "react-dom/client";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main>
      <section className="section one">
        <h2>Sobre mí</h2>
        <div>
          Este es el contenido principal de la página, donde puedes poner
          información sobre ti, tus proyectos, etc.
        </div>
      </section>
      <section className="section two">
        <h2>Proyectos</h2>
        <div>Aquí puedes listar tus proyectos o trabajos anteriores.</div>
      </section>
    </main>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
export default MainContent;
