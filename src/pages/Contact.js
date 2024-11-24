import React, { useState } from "react";
import { motion } from "framer-motion";
import BoliviaMap from "../components/BoliviaMap";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";

// Datos de ejemplo
const FAQData = [
  {
    question: "¿Qué tipos de eventos cubren?",
    answer: "Cubrimos todo tipo de eventos, desde bodas hasta eventos corporativos.",
  },
  {
    question: "¿Dónde están ubicados?",
    answer: "Operamos en los principales departamentos de Bolivia. Consulta el mapa para más detalles.",
  },
  {
    question: "¿Ofrecen menús personalizados?",
    answer: "Sí, trabajamos con nuestros clientes para diseñar menús adaptados a sus necesidades.",
  },
];

// Información de sucursales
const BranchData = [
  {
    name: "Sucursal La Paz",
    services: "Eventos corporativos, bodas, catering personalizado.",
    contact: "+591 789 456 123",
  },
  {
    name: "Sucursal Cochabamba",
    services: "Eventos al aire libre, catering para empresas.",
    contact: "+591 654 321 987",
  },
  {
    name: "Sucursal Santa Cruz",
    services: "Fiestas temáticas, aniversarios, catering exclusivo.",
    contact: "+591 456 789 012",
  },
];

const Contact = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <main className="bg-beige-light min-h-screen pt-16 overflow-hidden">
      {/* Título de la Página */}
      <section className="py-16 px-6 md:px-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-light"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contáctanos
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Estamos aquí para ayudarte a planificar el evento perfecto. Consulta nuestras ubicaciones y preguntas frecuentes.
        </motion.p>

        {/* Redes sociales */}
        <div className="mt-6 flex justify-center space-x-4">
          <a
            href="#"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="#"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={20} />
          </a>
          <a
            href="mailto:example@example.com"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="Correo"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </section>

      {/* Mapa Interactivo con Información */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
          {/* Información de las sucursales */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.h2
              className="text-3xl font-bold text-green-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              Nuestras Sucursales
            </motion.h2>
            {BranchData.map((branch, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white rounded-lg shadow-md space-y-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-gray-800 flex items-center">
                  <FaGlobe className="text-green-light mr-2" />
                  {branch.name}
                </h3>
                <p className="text-gray-600 flex items-center">
                  <FaInfoCircle className="text-green-light mr-2" />
                  {branch.services}
                </p>
                <p className="mt-2 text-gray-800 font-semibold flex items-center">
                  <FaPhoneAlt className="text-green-light mr-2" />
                  Contacto: <span className="ml-2 text-green-light">{branch.contact}</span>
                </p>
              </motion.div>
            ))}
          </div>

          {/* Mapa interactivo */}
          <motion.div
            className="w-full md:w-1/2 px-4 md:px-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <BoliviaMap className="w-full h-auto md:h-80 rounded-lg shadow-md" />
          </motion.div>
        </div>
      </section>

      {/* Preguntas Frecuentes */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-green-light"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Preguntas Frecuentes
          </motion.h2>
          <div className="mt-8 max-w-2xl mx-auto">
            {FAQData.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200 py-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-700">
                    {item.question}
                  </h3>
                  {activeFAQ === index ? (
                    <FiChevronUp className="text-green-light" />
                  ) : (
                    <FiChevronDown className="text-green-light" />
                  )}
                </div>
                {activeFAQ === index && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
