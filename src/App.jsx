import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";
import "./components/Header.css";
import "./components/Footer.css";
function App() {
  return (
    <div className="App">
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

export default App;
