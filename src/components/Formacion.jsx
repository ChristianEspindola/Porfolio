import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";

import terciario from "../img/formacion/terciario.png";
import react from "../img/formacion/react.png";
import js from "../img/formacion/js.png";
import web from "../img/formacion/web.png";
import "./proyectos.css";

function Formacion() {
  const [formacion, seformacion] = useState([
    {
      id: "1",
      imagen: terciario,
      titulo: "IFTS21 - Analista en sistemas",
      clase: "analista",
      loading: "lazy",
    },
    {
      id: "2",
      imagen: react,
      titulo: "CODERHOUSE - React JS",
      clase: "react",
      loading: "lazy",
    },
    {
      id: "3",
      imagen: js,
      titulo: "CODERHOUSE - javascript",
      clase: "js",
      loading: "lazy",
    },
    {
      id: "4",
      imagen: web,
      titulo: "CODERHOUSE - Desarrollo web",
      clase: "web",
      loading: "lazy",
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
              loading={formacion.loading}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Formacion;
