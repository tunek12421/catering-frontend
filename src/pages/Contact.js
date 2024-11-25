import React, { useState } from "react";
import { motion } from "framer-motion";
import BoliviaMap from "../components/BoliviaMap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaGlobe, FaInfoCircle, FaPhoneAlt, FaMailBulk, FaCommentDots } from "react-icons/fa";

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
  const [contactType, setContactType] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tipo de contacto: ", contactType);
    if (contactType === "email") {
      console.log("Correo: ", email);
    } else {
      console.log("Número de Celular: ", phone);
    }
    console.log("Mensaje: ", message);

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <main className="bg-beige-light min-h-screen pt-16 overflow-hidden">
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
          <a href="https://www.facebook.com/people/Catering-Sabores-De-Altura/61569563033066/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="Facebook">
            <FaFacebookF size={20} />
          </a>
          <a href="https://www.instagram.com/sabores_altura?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform" aria-label="Instagram">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform" aria-label="TikTok">
            <FaTiktok size={20} />
          </a>
          <a href="https://wa.me/59160766241"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform"
            aria-label="WhatsApp">
            <FaWhatsapp size={20} />
          </a>
          <a href="mailto:example@example.com" className="bg-white p-4 rounded-full shadow-md text-green-light hover:scale-110 transition-transform" aria-label="Correo">
            <FaEnvelope size={20} />
          </a>
        </div>
      </section>

      {/* Mapa Interactivo con Información */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-10">
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


      
      {/* Formulario de Contacto */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto max-w-xl">
          <motion.h2
            className="text-3xl font-bold text-center text-green-light"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Enviar un mensaje
          </motion.h2>
          {messageSent && (
            <motion.div
              className="mt-4 bg-green-100 text-green-700 p-4 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              ¡Tu mensaje ha sido enviado con éxito!
            </motion.div>
          )}
          <form className="mt-8" onSubmit={handleSubmit}>
          <div className="flex items-center space-x-4">
  <label className="text-lg text-gray-700 font-semibold">
    ¿Cómo prefieres contactarnos?
  </label>
  <div className="flex items-center space-x-4">
    <button
      type="button"
      onClick={() => setContactType("email")}
      className={`py-2 px-4 rounded-full ${contactType === "email" ? "bg-green-light text-white" : "bg-white text-gray-700"}`}
    >
      <FaEnvelope className="mr-2" size={20} /> Email
    </button>
    <button
      type="button"
      onClick={() => setContactType("phone")}
      className={`py-2 px-4 rounded-full ${contactType === "phone" ? "bg-green-light text-white" : "bg-white text-gray-700"}`}
    >
      <FaPhoneAlt className="mr-2" size={20} /> Teléfono
    </button>
  </div>
</div>

<div className="mt-6">
  {contactType === "email" ? (
    <div>
      <label className="block text-gray-700 text-lg flex items-center" htmlFor="email">
        <FaEnvelope className="text-green-light mr-2" /> Tu Email
      </label>
      <input
        id="email"
        type="email"
        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  ) : (
    <div>
      <label className="block text-gray-700 text-lg flex items-center" htmlFor="phone">
        <FaPhoneAlt className="text-green-light mr-2" /> Tu Teléfono
      </label>
      <input
        id="phone"
        type="tel"
        className="mt-2 p-3 w-full border border-gray-300 rounded-md"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
    </div>
  )}
</div>
<div className="mt-6">
  <label className="block text-gray-700 text-lg flex items-center" htmlFor="message">
    <FaCommentDots className="text-green-light mr-2" /> Tu Mensaje
  </label>
  <textarea
    id="message"
    className="mt-2 p-3 w-full border border-gray-300 rounded-md"
    rows="4"
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
  ></textarea>
</div>

            <button
              type="submit"
              className="mt-8 py-3 px-6 bg-green-light text-white font-semibold rounded-full w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
        
      </section>
    </main>
  );
};

export default Contact;
