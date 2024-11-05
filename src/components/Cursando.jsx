import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";

import fullstack from "../img/cursando/fullstack.png";
import ingles from "../img/cursando/ingles.png";

import "./proyectos.css";

function Cursando() {
  const [cursando, setcursando] = useState([
    {
      id: "1",
      imagen: fullstack,
      titulo: "Full Stack Open",
      clase: "fullstack",
    },
    {
      id: "2",
      imagen: ingles,
      titulo: "CIBA - Ingles",
      clase: "ingles",
    },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setcursando((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={cursando} strategy={rectSortingStrategy}>
        <div className="containerp cursando">
          {cursando.map((cursando) => (
            <Proyect
              key={cursando.id}
              id={cursando.id}
              imagen={cursando.imagen}
              titulo={cursando.titulo}
              clase={cursando.clase}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Cursando;
