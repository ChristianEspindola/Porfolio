import React, { useEffect } from "react";

import "./App.css";

import StarsBackground from "./components/StartBackground";
import "aos/dist/aos.css";
import AOS from "aos";

import "./components/Header.css";
import "./components/Footer.css";
AOS.init();
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
    });
  }, []);
  return (
    <div className="App">
      <StarsBackground />
    </div>
  );
}

export default App;
