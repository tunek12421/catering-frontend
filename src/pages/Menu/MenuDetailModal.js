import React from "react";
import { motion } from "framer-motion";

const MenuDetailModal = ({ dish, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <motion.div
        className="bg-white rounded-lg shadow-xl max-w-3xl w-full p-6"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="absolute top-4 right-4 text-gray-700" onClick={onClose}>
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{dish.name}</h2>
        <p className="mb-4">{dish.description}</p>
        <img src={dish.image} alt={dish.name} className="w-full h-64 object-cover rounded-md" />
        <div className="mt-4 text-right">
          <button
            className="bg-green-light text-white py-2 px-4 rounded-lg"
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default MenuDetailModal;
