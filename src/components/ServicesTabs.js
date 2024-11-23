import React, { useState } from "react";

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
        <p className="mt-4 text-gray-700">
          {currentService.description}
        </p>
        <button
          className="mt-4 bg-green-light text-white py-2 px-4 rounded"
          onClick={() =>
            openLightbox(currentService.images, 0)
          }
        >
          Ver Galería
        </button>
      </div>
    </div>
  );
};

export default ServicesTabs;
