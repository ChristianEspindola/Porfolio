import React, { useEffect, useState } from "react";
import sol from "../img/clima/sol.png";
import nocheDespejada from "../img/clima/noche-despejada.png";
import parcialmenteNublado from "../img/clima/parcialmente-nublado.png";
import nubes from "../img/clima/nubes.png";
import lluvia from "../img/clima/lluvia.png";
import tormenta from "../img/clima/tormenta.png";
import deefault from "../img/clima/default.png";
import humedad from "../img/clima/humedad.png";
import viento from "../img/clima/viento.png";
import temperatura from "../img/clima/temperatura.png";
import nieve from "../img/clima/nieve.png";
import niebla from "../img/clima/niebla.png";

import axios from "axios";

const Origen = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API Key
  const API_KEY = "0b5874510cd0074bb24e947058352530";

  // URL de la API para Buenos Aires
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=${API_KEY}&units=metric&lang=es`;

  const weatherImages = {
    "cielo claro": sol,
    despejado: sol,
    "noche despejada": nocheDespejada,
    "algo de nubes": parcialmenteNublado,
    "nubes dispersas": parcialmenteNublado,
    "noche con algunas nubes": parcialmenteNublado,
    nubes: nubes,
    "muy nuboso": nubes,
    cubierto: nubes,
    "noche nublada": nubes,
    "lluvia ligera": lluvia,
    "lluvia moderada": lluvia,
    "lluvias intensas": lluvia,
    aguacero: lluvia,
    "noche con lluvias ligeras": lluvia,
    tormenta: tormenta,
    "tormenta eléctrica": tormenta,
    "noche con tormenta": tormenta,
    "nieve ligera": nieve,
    nieve: nieve,
    niebla: niebla,
    neblina: niebla,
    "noche con niebla": niebla,
  };

  useEffect(() => {
    // Función para obtener los datos de clima
    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await axios.get(API_URL);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error al cargar los datos del clima");
        setLoading(false);
      }
    };

    // Llamada a la función al cargar el componente
    fetchWeather();
  }, []);

  // Renderizado condicional según el estado de carga y error
  if (loading)
    return (
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6v-3" />
          <path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12h3" />
          <path d="M16.25 16.25l2.15 2.15" />
          <path d="M12 18v3" />
          <path d="M7.75 16.25l-2.15 2.15" />
          <path d="M6 12h-3" />
          <path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
        Loading{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 6v-3" />
          <path d="M16.25 7.75l2.15 -2.15" />
          <path d="M18 12h3" />
          <path d="M16.25 16.25l2.15 2.15" />
          <path d="M12 18v3" />
          <path d="M7.75 16.25l-2.15 2.15" />
          <path d="M6 12h-3" />
          <path d="M7.75 7.75l-2.15 -2.15" />
        </svg>
      </p>
    );
  if (error) return <p>{error}</p>;

  const description = weatherData.weather[0].description;
  const weatherImage = weatherImages[description] || { deefault };

  return (
    <div className="cardOrigen">
      {weatherData && (
        <div>
          <img src={weatherImage} alt={description} className="clima" />
          <div className="icono">
            <img src={temperatura} alt="Temperatura" />
            <p>Temperatura: {weatherData.main.temp}°C</p>
          </div>
          <div className="icono">
            <img src={humedad} alt="Humedad" />
            <p>{weatherData.main.humidity}%</p>
          </div>

          <div className="icono">
            <img src={viento} alt="Viento" />
            <p>{weatherData.wind.speed} m/s</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Origen;
