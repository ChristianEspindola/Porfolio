import salon from "../img/proyectos/salon.png";
import inmo from "../img/proyectos/inmo.png";
import tecno from "../img/proyectos/tecno4all.png";
import todo from "../img/proyectos/todo.png";
import "./proyectos.css";

function Proyectos() {
  return (
    <section>
      <div className="containerp">
        <div className="proyect1">
          <img className="imagenp" src={salon} alt="" />
          <h5></h5>
        </div>
        <div className="proyect2">
          <img className="imagenp" src={inmo} alt="" />
          <h5></h5>
        </div>
        <div className="proyect3">
          <img className="imagenp" src={tecno} alt="" />
          <h5></h5>
        </div>
        <div className="proyect4">
          <img className="imagenp" src={todo} alt="" />
          <h5></h5>
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
