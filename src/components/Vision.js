import React from "react";

const Vision = () => {
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
        <img
          src="./images/about.jpg"
          alt="Nuestra visión"
          className="rounded-lg shadow-md slide-in-left"
        />
      </div>
    </section>
  );
};

export default Vision;
