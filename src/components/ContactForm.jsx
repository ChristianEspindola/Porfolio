import React, { useState } from "react";
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

  return (
    <div
      id="contacto"
      className="contact-form"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
    >
      <h3>Contáctame</h3>
      <form
        name="contact-form" // Nombre único del formulario
        method="POST"
        data-netlify="true" // Habilita el manejo del formulario por Netlify
      >
        <input type="hidden" name="form-name" value="contact-form" />

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
            <span className="text">enviar</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
