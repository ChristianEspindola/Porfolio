import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";
import useIsScreenWide from "../Hooks/useIsScreenWide";
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
  const isScreenWide = useIsScreenWide();

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

  return isScreenWide ? (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={cursando} strategy={rectSortingStrategy}>
        <div className="containerp cursando">
          {cursando.map((item) => (
            <Proyect
              key={item.id}
              id={item.id}
              imagen={item.imagen}
              titulo={item.titulo}
              clase={item.clase}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  ) : (
    <div className="containerp cursando">
      {cursando.map((item) => (
        <Proyect
          key={item.id}
          id={item.id}
          imagen={item.imagen}
          titulo={item.titulo}
          clase={item.clase}
        />
      ))}
    </div>
  );
}

export default Cursando;
