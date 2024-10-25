import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";

import salon from "../img/proyectos/salon.png";
import inmo from "../img/proyectos/inmo.png";
import tecno from "../img/proyectos/tecno4all.png";
import todo from "../img/proyectos/todo.png";
import "./proyectos.css";

function Proyectoss() {
  const [proyecto, setproyecto] = useState([
    { id: "1", imagen: salon, titulo: "Salon de fiestas" },
    { id: "2", imagen: inmo, titulo: "Inmobiliaria" },
    { id: "3", imagen: tecno, titulo: "Tienda de celulares" },
    { id: "4", imagen: todo, titulo: "TO-DO List" },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setproyecto((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={proyecto} strategy={rectSortingStrategy}>
        <div className="containerp">
          {proyecto.map((proyecto) => (
            <Proyect
              key={proyecto.id}
              id={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default Proyectoss;
