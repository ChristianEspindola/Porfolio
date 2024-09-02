import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import "./components/Header.css";
import Footer from "./components/Footer";
import "./components/Footer.css";
import MainContent from "./components/MainContent";
import "./components/MainContent.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>
);
