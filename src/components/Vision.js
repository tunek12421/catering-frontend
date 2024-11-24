import React, { useState, useEffect } from "react";

const Vision = () => {
  // Lista de imágenes para el carrusel
  const images = [
    "../assets/images/vision/ser1.jpg",
    "../assets/images/vision/ser2.jpg",
    "../assets/images/vision/ser3.jpg",
    "../assets/images/vision/ser4.jpg",
    "../assets/images/vision/ser5.jpg",
  ];

  // Estado para la imagen actual, para controlar el fade, y para controlar si la imagen está visible o no
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);  // Inicialmente falso para que la imagen no sea visible
  const [isVisible, setIsVisible] = useState(false);  // Para controlar la visibilidad inicial
  const [buttonsVisible, setButtonsVisible] = useState(false);  // Controla la visibilidad de los botones

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    setFade(false); // Iniciar el fade-out antes de cambiar la imagen
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(true); // Activar el fade-in después de cambiar la imagen
    }, 300); // Tiempo de espera antes de cambiar la imagen (300ms de fade-out)
  };

  // Función para cambiar a la imagen anterior
  const prevImage = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 300);
  };

  // Función para cambiar a la imagen seleccionada desde los botones
  const changeImage = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentImageIndex(index);
      setFade(true);
    }, 300);
  };

  // Efecto para hacer el cambio automático de imagen
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Cambiar a la siguiente imagen cada 5 segundos
    }, 5000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  // Efecto para iniciar el desvanecimiento al cargar la página
  useEffect(() => {
    setIsVisible(true); // Cambiar el estado de visibilidad a true después de que el componente se cargue
    setButtonsVisible(true); // Mostrar los botones con fade-in
    setTimeout(() => {
      setFade(true); // Iniciar el fade-in después de la carga
    }, 500); // Retraso para que se vea el fade después de que la imagen se vuelva visible
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="slide-in-right">
          <h2 className="text-3xl font-bold text-gray-900">Nuestra Visión</h2>
          <p className="mt-4 text-lg text-gray-700">
            Ser el referente en servicios de catering y eventos en Cochabamba,
            reconocido por nuestra pasión, innovación y compromiso con cada cliente.
          </p>
        </div>
        <div className="relative">
          {/* Imagen actual con fade */}
          <img
            src={images[currentImageIndex]}
            alt={`Visión ${currentImageIndex + 1}`}
            className={`rounded-lg shadow-md w-full h-64 object-cover transition-opacity duration-1000 ${isVisible ? (fade ? "opacity-100" : "opacity-0") : "opacity-0"}`}
          />

          {/* Botones para seleccionar imágenes (con fade) */}
          <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4 transition-opacity duration-1000 ${buttonsVisible ? "opacity-100" : "opacity-0"}`}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`w-4 h-4 rounded-full border-2 transition duration-300 ease-in-out ${
                  index === currentImageIndex
                    ? "border-gray-600 bg-transparent"  // Borde gris para el botón activo
                    : "border-gray-300 bg-transparent hover:border-gray-500"
                }`}
                style={{
                  borderColor: index === currentImageIndex
                    ? "#4B5563"  // Gris oscuro para el borde del botón activo
                    : "#D1D5DB"  // Gris claro para los botones inactivos
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
