import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";

import terciario from "../img/formacion/terciario.webp";
import react from "../img/formacion/react.webp";
import js from "../img/formacion/js.webp";
import web from "../img/formacion/web.webp";
import "./proyectos.css";

function Formacion() {
  const [formacion, seformacion] = useState([
    {
      id: "1",
      imagen: terciario,
      titulo: "IFTS21 - Analista en sistemas",
      clase: "analista",
      accion: "fade-up-left",
    },
    {
      id: "2",
      imagen: react,
      titulo: "CODERHOUSE - React JS",
      clase: "react",
      accion: "fade-up-right",
    },
    {
      id: "3",
      imagen: js,
      titulo: "CODERHOUSE - javascript",
      clase: "js",
      accion: "fade-down-left",
    },
    {
      id: "4",
      imagen: web,
      titulo: "CODERHOUSE - Desarrollo web",
      clase: "web",
      accion: "fade-down-right",
    },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      seformacion((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={formacion} strategy={rectSortingStrategy}>
        <div className="containerp">
          {formacion.map((formacion) => (
            <Proyect
              key={formacion.id}
              id={formacion.id}
              imagen={formacion.imagen}
              titulo={formacion.titulo}
              clase={formacion.clase}
              accion={formacion.accion}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Formacion;
