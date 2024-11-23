import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-dark text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Información básica */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Sabores de Altura</h3>
            <p className="text-gray-400">
              Elevando la gastronomía en eventos exclusivos en Bolivia.
            </p>
          </div>
          {/* Enlaces rápidos */}
          <div className="flex space-x-6 text-gray-400">
            <a href="/privacy-policy" className="hover:text-gold transition">Política de Privacidad</a>
            <a href="/terms-of-service" className="hover:text-gold transition">Términos de Servicio</a>
            <a href="/faq" className="hover:text-gold transition">Preguntas Frecuentes</a>
          </div>
          {/* Redes sociales */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              <i className="fab fa-facebook-f text-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              <i className="fab fa-instagram text-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold">
              <i className="fab fa-twitter text-lg"></i>
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-gray-400">
          <p>&copy; 2024 Sabores de Altura. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
