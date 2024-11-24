import React from "react";
import { Carousel } from "antd";
import { motion } from "framer-motion";

const carouselStyle = {
  width: "100%",
  height: "calc(100vh - 80px)",
  position: "relative",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
};

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const fadeOverlay = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 0.7,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const imageAnimation = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

const captionAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: "easeOut", delay: 0.5 },
  },
};

const images = [
  {
    src: "https://cateringchinchon.com/wp-content/uploads/2022/09/El-servicio-de-Catering-con-chef-se-enfoca-principalmente-en-suministras-alimentos-y-bebidas.jpg",
    caption: "Sabores Únicos para Cada Evento",
  },
  {
    src: "https://sukalde.net/wp-content/uploads/2023/11/sukalde-catering-lunch.jpg",
    caption: "La Comida que Transforma Momentos",
  },
  {
    src: "https://cateringchinchon.com/wp-content/uploads/2022/09/contratando-un-servicio-de-Catering-con-chef-no-se-realiza-el-servicio-a-gran-escala.jpg",
    caption: "Catering de Alta Calidad",
  },
  {
    src: "https://cdcgourmet.com/storage/2023/01/encontrar-catering-gourmet-madrid.jpeg",
    caption: "Un Banquete para los Sentidos",
  },
];

const CarouselBanner = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div style={carouselStyle}>
        <Carousel autoplay effect="fade" dotPosition="bottom">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full"
              initial="hidden"
              animate="visible"
              variants={imageAnimation}
            >
              {/* Imagen animada */}
              <motion.img
                src={image.src}
                alt={`Slide ${index + 1}`}
                style={imageStyle}
                initial="hidden"
                animate="visible"
                variants={imageAnimation}
              />

              {/* Texto animado */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 text-white px-6"
                initial="hidden"
                animate="visible"
                variants={captionAnimation}
              >
                <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {image.caption}
                </h1>
                <p className="mt-4 text-lg md:text-xl font-light max-w-3xl">
                  Experiencias culinarias que dejan una huella inolvidable.
                </p>
              </motion.div>

              {/* Degradado dinámico */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-5"
                initial="hidden"
                animate="visible"
                variants={fadeOverlay}
              />
            </motion.div>
          ))}
        </Carousel>
      </div>

      {/* Texto general del banner */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white"
        initial="hidden"
        animate="visible"
        variants={textAnimation}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
          Nuestros Servicios
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
          En Sabores de Altura, transformamos tus eventos en experiencias únicas
          y memorables.
        </p>
      </motion.div>
    </section>
  );
};

export default CarouselBanner;
