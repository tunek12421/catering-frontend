import React, { useState, useEffect } from "react";

const Mission = () => {
  // Lista de imágenes para el carrusel
  const images = [
    "../assets/images/mision/dec1.jpg",
    "../assets/images/mision/dec2.jpg",
    "../assets/images/mision/dec3.jpg",
    "../assets/images/mision/dec4.jpg",
    "../assets/images/mision/dec5.jpg",
  ];

  // Estado para la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para cambiar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para cambiar a la imagen seleccionada desde los botones
  const changeImage = (index) => {
    setCurrentImageIndex(index);
  };

  // Efecto para hacer el cambio automático de imagen
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage(); // Cambiar a la siguiente imagen cada 7 segundos (más lento)
    }, 7000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          {/* Imagen actual */}
          <img
            src={images[currentImageIndex]}
            alt={`Misión ${currentImageIndex + 1}`}
            className="rounded-lg shadow-md w-full h-64 object-cover transition-opacity duration-1000 ease-in-out opacity-0 fade-in"
          />
          
          {/* Botones encima de la imagen */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => changeImage(index)}
                className={`w-4 h-4 rounded-full border-2 transition duration-300 ease-in-out ${
                  index === currentImageIndex
                    ? "border-gray-600 bg-transparent"
                    : "border-gray-300 bg-transparent hover:border-gray-500"
                }`}
                style={{
                  borderColor: index === currentImageIndex ? "#4B5563" : "#D1D5DB",
                }}
              />
            ))}
          </div>
        </div>
        <div className="slide-in-right">
          <h2 className="text-3xl font-bold text-gray-900">Nuestra Misión</h2>
          <p className="mt-4 text-lg text-gray-700">
            Convertir tus momentos especiales en recuerdos inolvidables a través
            de sabores excepcionales, atención al detalle y una experiencia de
            servicio impecable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
