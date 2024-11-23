import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-beige-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Por qué Elegirnos</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="slide-in-left">
            <img
              src="/images/about2.jpg"
              alt="Calidad garantizada"
              className="rounded-full shadow-md mx-auto w-32 h-32 object-cover"
            />
            <p className="mt-4 text-lg text-gray-700">
              <strong>Sabor y calidad garantizados:</strong> Nuestros platillos son
              elaborados con dedicación y productos de primera calidad.
            </p>
          </div>
          <div className="slide-in-right">
            <img
              src="/images/about2.jpg"
              alt="Decoraciones únicas"
              className="rounded-full shadow-md mx-auto w-32 h-32 object-cover"
            />
            <p className="mt-4 text-lg text-gray-700">
              <strong>Decoraciones que inspiran:</strong> Creamos ambientes únicos
              que reflejan el estilo y personalidad de cada celebración.
            </p>
          </div>
          <div className="slide-in-left">
            <img
              src="/images/about2.jpg"
              alt="Servicio integral"
              className="rounded-full shadow-md mx-auto w-32 h-32 object-cover"
            />
            <p className="mt-4 text-lg text-gray-700">
              <strong>Servicio integral:</strong> Nos ocupamos de todos los detalles
              para que tú y tus invitados solo se enfoquen en disfrutar.
            </p>
          </div>
          <div className="slide-in-right">
            <img
              src="/images/about2.jpg"
              alt="Flexibilidad"
              className="rounded-full shadow-md mx-auto w-32 h-32 object-cover"
            />
            <p className="mt-4 text-lg text-gray-700">
              <strong>Flexibilidad:</strong> Diseñamos paquetes personalizados
              adaptados a tus necesidades y presupuesto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
