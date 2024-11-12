import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";
import useIsScreenWide from "../Hooks/useIsScreenWide"; // Importa el hook personalizado

import terciario from "../img/formacion/terciario.webp";
import react from "../img/formacion/react.webp";
import js from "../img/formacion/js.webp";
import web from "../img/formacion/web.webp";
import "./proyectos.css";

function Formacion() {
  const [formacion, setFormacion] = useState([
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

  const isScreenWide = useIsScreenWide();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setFormacion((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <div className="containerp">
      {isScreenWide ? (
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={formacion} strategy={rectSortingStrategy}>
            {formacion.map((formacionItem) => (
              <Proyect
                key={formacionItem.id}
                id={formacionItem.id}
                imagen={formacionItem.imagen}
                titulo={formacionItem.titulo}
                clase={formacionItem.clase}
                accion={formacionItem.accion}
              />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        formacion.map((formacionItem) => (
          <Proyect
            key={formacionItem.id}
            id={formacionItem.id}
            imagen={formacionItem.imagen}
            titulo={formacionItem.titulo}
            clase={formacionItem.clase}
            accion={formacionItem.accion}
          />
        ))
      )}
    </div>
  );
}

export default Formacion;
