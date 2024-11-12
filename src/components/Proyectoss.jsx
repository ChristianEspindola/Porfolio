import { useState } from "react";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import Proyect from "./Proyect";
import useIsScreenWide from "../Hooks/useIsScreenWide";
import salon from "../img/proyectos/salon.webp";
import inmo from "../img/proyectos/inmo.webp";
import tecno from "../img/proyectos/tecno4all.webp";
import todo from "../img/proyectos/todo.webp";
import "./proyectos.css";

function Proyectoss() {
  const [proyecto, setproyecto] = useState([
    {
      id: "1",
      imagen: salon,
      titulo: "Salon de fiestas",
      clase: "salon ",
      accion: "fade-down-right",
    },
    {
      id: "2",
      imagen: inmo,
      titulo: "Inmobiliaria",
      clase: "Inmobiliaria",

      accion: "fade-down-left",
    },
    {
      id: "3",
      imagen: tecno,
      titulo: "Tienda de celulares",
      clase: "Tienda",

      accion: "fade-up-right",
    },
    {
      id: "4",
      imagen: todo,
      titulo: "TO-DO List",
      clase: "todo",
      accion: "fade-up-left",
    },
  ]);
  const isScreenWide = useIsScreenWide();

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

  return isScreenWide ? (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={proyecto} strategy={rectSortingStrategy}>
        <div className="containerp">
          {proyecto.map((proyecto) => (
            <Proyect
              key={proyecto.id}
              id={proyecto.id}
              imagen={proyecto.imagen}
              titulo={proyecto.titulo}
              clase={proyecto.clase}
              accion={proyecto.accion}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  ) : (
    <div className="containerp">
      {proyecto.map((proyecto) => (
        <Proyect
          key={proyecto.id}
          id={proyecto.id}
          imagen={proyecto.imagen}
          titulo={proyecto.titulo}
          clase={proyecto.clase}
          accion={proyecto.accion}
        />
      ))}
    </div>
  );
}

export default Proyectoss;
