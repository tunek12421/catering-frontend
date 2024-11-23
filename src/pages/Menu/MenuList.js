import React from "react";
import { motion } from "framer-motion";

const MenuList = ({ dishes, onSelectDish }) => {
    if (!Array.isArray(dishes) || dishes.length === 0) {
      return <div className="text-center py-10">No hay platillos disponibles.</div>;
    }
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {dishes.map((dish, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg"
            onClick={() => onSelectDish(dish)}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{dish.name}</h3>
              <p className="text-sm text-gray-500">{dish.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };
  

export default MenuList;
