import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function Proyect({ id, imagen, titulo, clase, accion }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "grab",
  };
  return (
    <div
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className={clase}
      data-aos={accion} // `data-aos` debe ir separado como atributo
    >
      <img className="imagenp" src={imagen} alt={titulo} loading="lazy" />
      <h5>{titulo}</h5>
    </div>
  );
}

export default Proyect;
