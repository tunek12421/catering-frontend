import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesTabs = ({ services, openLightbox }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Validación: asegurarse de que 'services' no esté vacío
  if (!services || services.length === 0) {
    return <div>No hay servicios disponibles en este momento.</div>;
  }

  // Validación: asegurarse de que 'activeTab' esté dentro de los límites
  const currentService = services[activeTab];
  if (!currentService) {
    return <div>Servicio no encontrado.</div>;
  }

  return (
    <div>
      {/* Tabs de Servicios */}
      <div className="flex space-x-4 mb-8">
        {services.map((service, index) => (
          <button
            key={index}
            className={`py-2 px-4 rounded ${
              activeTab === index
                ? "bg-green-light text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Contenido del Servicio Activo */}
      <div>
        <h3 className="text-2xl font-bold text-green-light">
          {currentService.title}
        </h3>
        <p className="mt-4 text-gray-700">{currentService.description}</p>
        <div className="flex space-x-4 mt-4">
          <button
            className="bg-green-light text-white py-2 px-4 rounded shadow-md hover:bg-green-dark transition"
            onClick={() => openLightbox(currentService.images, 0)}
          >
            Ver Galería
          </button>
          <Link
            to={`/services?id=${currentService.id}`}
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded shadow-md hover:bg-gray-300 transition"
          >
            Ver Detalles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesTabs;
