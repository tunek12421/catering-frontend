import React from "react";

const Mission = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img
          src="./images/about.jpg"
          alt="Nuestra misión"
          className="rounded-lg shadow-md slide-in-left"
        />
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
