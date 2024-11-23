// src/components/TeamCards.js

import React from "react";
import { motion } from "framer-motion";

const TeamCards = ({ team }) => {
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
          <img
            src={member.photo}
            alt={member.name}
            className="w-32 h-32 object-cover rounded-full mx-auto"
          />
          <h4 className="text-xl font-bold text-center mt-4">
            {member.name}
          </h4>
          <p className="text-gray-700 text-center">{member.position}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamCards;
