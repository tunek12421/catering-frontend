import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
  return (
    <header className="bg-beige-light text-gray-900 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="../../assets/images/vision/logo1.png" // Reemplaza con la ruta de tu logo
            alt="Sabores de Altura Logo"
            className="h-10" // Ajusta el tamaño del logo según lo necesites
          />
          <div className="text-2xl font-bold text-green-light">
            <Link to="/">Sabores de Altura</Link>
          </div>
        </div>
        
        {/* Navegación */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-gold transition">Inicio</Link>
          <Link to="/about" className="hover:text-gold transition">Nosotros</Link>
          <Link to="/menu" className="hover:text-gold transition">Menú</Link>
          <Link to="/services" className="hover:text-gold transition">Servicios</Link>
          <Link to="/contact" className="hover:text-gold transition">Contacto</Link>
        </nav>
        
        {/* Botón */}
        <button className="hidden md:block bg-green-light text-white py-2 px-4 rounded-full hover:bg-gold">
          Reserva Ahora
        </button>
        
        {/* Menú móvil */}
        <div className="md:hidden">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
