import React, { useEffect, useState, useRef } from "react";
import { fetchHomeData } from "../services/dataService";
import ServiceCarousel from "../integrations/ServiceCarousel";
import TestimonialCarousel from "../integrations/TestimonialCarousel";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import defaultData from "../data/defaultDataServiceHome";

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const imageRef = useRef(null);
  const navigate = useNavigate();

  const { scrollY } = useViewportScroll();
  const backgroundPositionY = useTransform(scrollY, [0, 500], [0, 100]);



  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const data = await fetchHomeData();
        setHomeData(data);
      } catch (err) {
        console.error("No se pudieron cargar los datos.");
        setHomeData(defaultData);
      } finally {
        setLoading(false);
      }
    };

    loadHomeData();

    // Efecto de movimiento del Hero Image
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = (clientX - centerX) / 10;
      targetY = (clientY - centerY) / 10;
    };

    const updateTransform = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      const image = imageRef.current;
      if (image) {
        const rotateX = currentY / 5;
        const rotateY = -currentX / 5;
        image.style.transform = `
          perspective(1000px)
          translate(${currentX}px, ${currentY}px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
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

  if (loading) {
    return <div className="text-center py-20">Cargando...</div>;
  }

  return (
    <motion.main
      className="bg-beige-light min-h-screen pt-16 overflow-hidden"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Sección Hero */}
      <section className="relative bg-gradient-to-r from-green-light to-gold text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center min-h-[80vh] gap-8 overflow-hidden">
        <div className="flex-1 max-w-lg space-y-6 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {homeData.heroTitle}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {homeData.heroDescription}
          </motion.p>
          <motion.div
            className="space-x-2 md:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <button
              className="bg-white text-green-light py-3 px-4 md:px-6 rounded-full shadow-md hover:bg-gray-200 transition"
              onClick={() => navigate("/services?id=corporate")}
            >
              {homeData.heroButton1}
            </button>
            <button
              className="bg-gray-dark text-white py-3 px-4 md:px-6 rounded-full shadow-md hover:bg-gray-700 transition"
              onClick={() => navigate("/services")}
            >
              {homeData.heroButton2}
            </button>
          </motion.div>
        </div>
        <motion.div
          className="flex-1 w-full overflow-hidden rounded-xl shadow-2xl"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            ref={imageRef}
            src={homeData.heroImage}
            alt="Montaje de catering elegante"
            className="w-full h-[400px] max-h-[500px] object-cover transition-transform duration-500"
            style={{ willChange: "transform" }}
          />
        </motion.div>
      </section>

      {/* Sección Urgencia */}
      <section className="relative bg-gradient-to-r from-gold to-green-light text-white py-10 px-4 text-center overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.h2
            className="text-3xl font-bold"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {homeData.urgencyTitle}
          </motion.h2>
          <motion.p
            className="mt-4 text-base sm:text-lg"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            {homeData.urgencyDescription}
          </motion.p>
          <motion.button
            className="bg-white text-green-light py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition mt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {homeData.urgencyButton}
          </motion.button>
        </div>
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-urgency-pattern opacity-20 pointer-events-none"
          style={{ backgroundPositionY: backgroundPositionY }}
        />
      </section>

      {/* Sección Servicios */}
      <section className="py-16 text-center bg-beige-light px-4 overflow-hidden">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <ServiceCarousel services={homeData.services} />
        </motion.div>
        <div className="text-center mt-8">
          <button
            className="bg-green-light text-white py-2 px-6 rounded-full shadow-md hover:bg-green-dark transition"
            onClick={() => navigate("/services")}
          >
            Ver Todos los Servicios
          </button>
        </div>
      </section>

      {/* Sección Testimonios */}
      <section className="bg-gray-100 py-16 px-4 overflow-hidden">
        <motion.div
          className="container mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <TestimonialCarousel testimonials={homeData.testimonials} />
        </motion.div>
      </section>
    </motion.main>
  );
};

export default Home;
