import React, { useState } from "react";
import "./ContactForm.css"; // Asegúrate de crear este archivo CSS para los estilos

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
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a una API
    console.log("Formulario enviado:", formData);
    // Limpia el formulario después de enviar
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-form">
      <h3>Contáctame</h3>
      <form onSubmit={handleSubmit}>
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
          <button className="button" role="button">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="text">enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
