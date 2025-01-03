import React, { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "@sweetalert2/theme-borderless/borderless.css";

import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación  con SweetAlert
    if (formData.name.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "Nombre demasiado corto",
        text: "Por favor, ingresa al menos 3 caracteres en el nombre.",
      });
      return;
    }

    // Confirmación de Envío
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas enviar el formulario?",
      icon: "question",
      confirmButtonColor: "#00053c",
      cancelButtonColor: "#0a0b12",

      showCancelButton: true,
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
      backdrop: `rgba(54, 70, 93, 0.9) `,
    }).then((result) => {
      if (result.isConfirmed) {
        // Enviar datos a Netlify mediante fetch
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            "form-name": "contact",
            ...formData,
          }).toString(),
        })
          .then(() => {
            Swal.fire({
              icon: "success",
              confirmButtonColor: "#00053c",
              title: "Formulario enviado",
              text: "Gracias por contactarme. En breve te estare",
              backdrop: `rgba(54, 70, 93, 0.85) url("https://media.tenor.com/rI_0O_9AJ5sAAAAj/nyan-cat-poptart-cat.gif")
    left top
    no-repeat`,
            });
            // Reiniciar los campos del formulario
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Hubo un problema al enviar el formulario. Inténtalo de nuevo.",
              backdrop: `rgba(54, 70, 93, 0.85)`,
            });
            console.error("Error al enviar el formulario:", error);
          });
      }
    });
  };

  return (
    <div
      id="contacto"
      className="contact-form"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    >
      <h3>Contáctame</h3>

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Campo oculto para Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        {/* Campo honeypot para evitar spam */}
        <input type="hidden" name="bot-field" />

        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="containerbutton">
          <button className="button" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text">Enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
