import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { path: "/admin", label: "Inicio" },
  //  { path: "/admin/home", label: "Home" },
  //  { path: "/admin/services", label: "Servicios" },
    { path: "/admin/menu", label: "Menú" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-4">
      <h2 className="text-lg font-bold mb-6">Gestión de cocina</h2>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block py-2 px-4 rounded-lg font-medium ${
                isActive
                  ? "bg-green-100 text-green-600"
                  : "text-gray-700 hover:bg-gray-200"
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
