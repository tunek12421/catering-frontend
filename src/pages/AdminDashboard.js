import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import MenuManager from "./MenuManager";

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const AdminDashboard = () => {
  return (
    <motion.div
      className="flex min-h-screen bg-gray-100 pt-16" // Añadimos pt-16 para ajustar al header
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Sidebar fijo */}
      <Sidebar />

      {/* Contenido dinámico */}
      <div className="flex-1 p-6">
        <Routes>
          <Route
            path="/"
            element={<div className="text-2xl font-bold">Bienvenido al Panel de Gestión</div>}
          />
          <Route path="menu" element={<MenuManager />} />
        </Routes>
      </div>
    </motion.div>
  );
};

export default AdminDashboard;
