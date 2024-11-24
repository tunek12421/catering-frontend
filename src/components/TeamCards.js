import React, { useState } from "react";
import { motion } from "framer-motion";

// Componente de TeamCards con información directa
const TeamCards = () => {
  const team = [
    {
      name: "Coral Ayoroa",
      position: "Chef Ejecutivo",
      photo: "../assets/images/mision/chef1.jpg",
      bio: "Profesional en Administración y Gestión Educativa Gastronómica con experiencia en consultoría para restaurantes y chef ejecutivo. Con una sólida formación en la industria gastronómica y un enfoque estratégico en la gestión operativa, he liderado equipos y optimizado procesos para mejorar la calidad y rentabilidad de restaurantes.",
      education: [
        "Administración y Gestión Educativa Gastronómica - Consultaría para Restaurantes - Chef Ejecutivo",
        
      ],
    },

    {
      name: "Marco Gonzales",
      position: "Chef Ejecutivo",
      photo: "../assets/images/mision/chef2.jpg",
      bio: "Profesional en Administración y Gestión Educativa Gastronómica con experiencia en consultoría para restaurantes y chef ejecutivo. Con una sólida formación en la industria gastronómica y un enfoque estratégico en la gestión operativa, he liderado equipos y optimizado procesos para mejorar la calidad y rentabilidad de restaurantes.",
      education: [
        "Administración y Gestión Educativa Gastronómica - Consultaría para Restaurantes - Chef Ejecutivo"
      ],
    },
    
    {
      name: "María Taha",
      position: "Chef Ejecutiva",
      photo: "../assets/images/mision/chef3.jpg",
      bio: "María es una chef ejecutiva boliviana con amplia experiencia en la gastronomía internacional y una pasión por crear platos innovadores que fusionan lo tradicional con lo moderno.",
      education: [
        "Licenciatura en Gastronomía, Universidad de La Paz",
        "Diplomado en Cocina Internacional, Le Cordon Bleu"
      ]
    }
    
  ];

  // Estado para controlar el miembro seleccionado
  const [selectedMember, setSelectedMember] = useState(null);

  // Función para manejar el clic en la imagen y mostrar la biografía
  const handleImageClick = (member) => {
    setSelectedMember(member); // Establece el miembro seleccionado
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="flex flex-wrap justify-center mt-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          className="w-64 m-4 p-4 bg-white rounded shadow"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className="relative">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto cursor-pointer"
              onClick={() => handleImageClick(member)} // Añadir evento de clic
            />
          </div>
          <h4 className="text-xl font-bold text-center mt-4">{member.name}</h4>
          <p className="text-gray-700 text-center">{member.position}</p>
        </motion.div>
      ))}

      {/* Modal para mostrar la biografía y la información bibliográfica */}
      {selectedMember && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-96 relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold text-gray-500"
            >
              &times;
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedMember.photo}
                alt={selectedMember.name}
                className="w-32 h-32 object-cover rounded-full mx-auto"
              />
              <h3 className="text-2xl font-semibold mt-4">{selectedMember.name}</h3>
              <p className="text-lg text-gray-700 mt-2">{selectedMember.position}</p>
              <p className="text-gray-600 mt-4">{selectedMember.bio}</p> {/* Mostrar la biografía */}

              {/* Información bibliográfica */}
              <div className="mt-4">
                <h4 className="text-xl font-semibold">Formación Académica</h4>
                <ul className="list-disc pl-5 text-gray-700 mt-2">
                  {selectedMember.education.map((edu, index) => (
                    <li key={index}>{edu}</li> // Muestra la formación académica
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamCards;
