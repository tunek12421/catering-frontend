import React, { useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { generateMenuPDF } from "../../services/pdfGenerator"; // Importar la función

const MenuHero = ({ scrollToMenu, menuData }) => {
  const imageRef = useRef(null);

  const { scrollY } = useViewportScroll();
  const backgroundPositionY = useTransform(scrollY, [0, 500], [0, 100]);

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (clientX - centerX) / 15;
      targetY = (clientY - centerY) / 15;
    };

    const updateTransform = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;

      const image = imageRef.current;
      if (image) {
        const rotateX = currentY / 10;
        const rotateY = -currentX / 10;
        const brightness = 100 + Math.abs(currentX) / 5;

        image.style.transform = `
          perspective(1000px)
          translate(${currentX}px, ${currentY}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
        image.style.filter = `brightness(${brightness}%)`;
      }

      animationFrameId = requestAnimationFrame(updateTransform);
    };

    window.addEventListener("mousemove", handleMouseMove);
    updateTransform();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const downloadMenuPDF = async () => {
    if (!menuData || menuData.length === 0) {
      alert("El menú no está disponible para descargar.");
      return;
    }

    try {
      await generateMenuPDF(menuData); // Llama a la función para generar el PDF
    } catch (error) {
      console.error("[ERROR] Error generando el PDF:", error);
      alert("No se pudo generar el PDF. Revisa los datos del menú.");
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-green-light to-gold text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center min-h-[90vh] gap-8 overflow-hidden">
      <motion.div
        className="flex-1 max-w-lg space-y-6 text-center md:text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Nuestro Menú
        </h1>
        <p className="text-lg sm:text-xl">
          Explora sabores diseñados para cautivar tus sentidos. Cada platillo es
          una obra de arte culinaria.
        </p>
        <div className="space-x-4 mt-6">
          <button
            className="bg-white text-green-light py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition"
            onClick={scrollToMenu}
          >
            Explorar Menú
          </button>
          <button
            className="bg-gray-dark text-white py-3 px-6 rounded-full shadow-md hover:bg-gray-700 transition"
            onClick={downloadMenuPDF}
          >
            Descargar Menú
          </button>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 w-full overflow-hidden rounded-xl shadow-2xl relative"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div
          ref={imageRef}
          className="w-full h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/images/menu-hero.jpg')`,
            willChange: "transform, filter",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-green-light opacity-30 pointer-events-none"
        style={{ backgroundPositionY: backgroundPositionY }}
      />
    </section>
  );
};

export default MenuHero;
