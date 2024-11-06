import React, { useEffect } from "react";

import "./App.css";

import StarsBackground from "./components/StartBackground";
import "aos/dist/aos.css"; // Importa el CSS de AOS
import AOS from "aos";

import "./components/Header.css";
import "./components/Footer.css";
AOS.init();
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500, // Duración de las animaciones en milisegundos
      once: false, // Si es true, la animación solo se ejecutará una vez
    });
  }, []);
  return (
    <div className="App">
      <StarsBackground />
    </div>
  );
}

export default App;
