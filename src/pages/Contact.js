// src/pages/Contact.js

import React, { useState } from "react";
import { motion } from "framer-motion";
import BoliviaMap from "../components/BoliviaMap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
      </section>

      {/* Mapa Interactivo */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-green-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Nuestras Ubicaciones
          </motion.h2>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <BoliviaMap />
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
