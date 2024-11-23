import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import { Link } from "react-router-dom";

const ServiceCarousel = ({ services }) => {
  // Manejo de estado
  const [currentIndex, setCurrentIndex] = useState(0);

  // Siempre inicializa una lista vacía si `services` no está definido.
  const validServices = services || [];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % validServices.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + validServices.length) % validServices.length);
  };

  useEffect(() => {
    if (validServices.length > 0) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, validServices.length]);

  const transitions = useTransition(currentIndex, {
    key: currentIndex,
    from: {
      opacity: 0,
      transform: "translate3d(100%,0,0) scale(0.8) rotateY(90deg)",
    },
    enter: {
      opacity: 1,
      transform: "translate3d(0%,0,0) scale(1) rotateY(0deg)",
    },
    leave: {
      opacity: 0,
      transform: "translate3d(-50%,0,0) scale(0.8) rotateY(-90deg)",
    },
    config: {
      mass: 5,
      tension: 80,
      friction: 60,
    },
  });

  // Return temprano: después de que los hooks se han llamado
  if (validServices.length === 0) {
    return <div>No hay servicios disponibles en este momento.</div>;
  }

  return (
    <div className="relative w-full">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Nuestros Servicios
      </h2>
      <div className="flex justify-center items-center relative">
        {/* Botón Anterior */}
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-green-light text-white p-3 rounded-full shadow-lg hover:bg-gold transition z-10"
        >
          ❮
        </button>

        {/* Transiciones y contenido */}
        <div className="w-full max-w-md h-96 relative overflow-hidden">
          {transitions((style, i) => (
            <animated.div
              key={i}
              style={style}
              className="absolute w-full h-full"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full flex flex-col items-center">
                <img
                  src={validServices[i].image}
                  alt={validServices[i].title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-green-light text-center mb-2">
                  {validServices[i].title}
                </h3>
                <p className="text-gray-700 text-base text-center mb-4">
                  {validServices[i].description}
                </p>
                {/* Link a la página de Services con el ID real del servicio */}
                <Link
                  to={`/services?id=${validServices[i].id}`}
                  className="bg-green-light text-white py-2 px-4 rounded-full shadow-md hover:bg-gold transition"
                >
                  Ver Más
                </Link>
              </div>
            </animated.div>
          ))}
        </div>

        {/* Botón Siguiente */}
        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-green-light text-white p-3 rounded-full shadow-lg hover:bg-gold transition z-10"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default ServiceCarousel;
