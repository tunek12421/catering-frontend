import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ServicesTabs from "../components/ServicesTabs";
import { fetchServicesData } from "../services/dataService";
import defaultServicesData from "../data/defaultDataServiceServices";
import CarouselBanner from "../components/CarouselBanner";

const pageTransition = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get("id");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const [servicesData, setServicesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    const loadServicesData = async () => {
      try {
        const data = await fetchServicesData();
        setServicesData(data);
      } catch (err) {
        console.error("No se pudieron cargar los datos de servicios.");
        setServicesData(defaultServicesData);
      } finally {
        setLoading(false);
      }
    };

    loadServicesData();
  }, []);

  useEffect(() => {
    if (servicesData && serviceId) {
      const foundService = servicesData.services.find(
        (service) => service.id === serviceId
      );
      setActiveService(foundService || null);
    }
  }, [servicesData, serviceId]);

  const openLightbox = (images, index) => {
    if (images && images.length > 0) {
      const slides = images.map((src) => ({
        src: src,
        alt: "Imagen del servicio",
      }));
      setLightboxSlides(slides);
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    } else {
      console.error("No hay imágenes disponibles para mostrar en el Lightbox.");
    }
  };

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
      <CarouselBanner />

      {/* Detalle de Servicios */}
      <section className="py-16 px-6 md:px-16">
        <div className="container mx-auto">
          {activeService ? (
            <motion.div
              className="text-center"
              variants={staggerContainer}
              initial="hidden"
              animate="show"
            >
              <motion.h2
                className="text-3xl font-bold text-green-light mb-4"
                variants={item}
              >
                {activeService.title}
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 mb-6"
                variants={item}
              >
                {activeService.description}
              </motion.p>
              <motion.ul
                className="text-left text-gray-600 list-disc list-inside mb-6"
                variants={staggerContainer}
              >
                {activeService.features.map((feature, index) => (
                  <motion.li key={index} variants={item}>
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-4"
                variants={staggerContainer}
              >
                {activeService.images.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Imagen ${index + 1}`}
                    className="w-full h-48 object-cover rounded-md cursor-pointer shadow-lg hover:scale-105 transition-transform"
                    variants={item}
                    onClick={() => openLightbox(activeService.images, index)}
                  />
                ))}
              </motion.div>
              <motion.div className="flex justify-center gap-4" variants={item}>
                <motion.button
                  className="bg-green-light text-white py-2 px-6 rounded-full shadow-md hover:bg-green-dark transition"
                  onClick={() => setActiveService(null)}
                  variants={item}
                >
                  Ver Todos los Servicios
                </motion.button>
                <motion.button
                  className="bg-gray-light text-gray-800 py-2 px-6 rounded-full shadow-md hover:bg-gray-dark transition"
                  onClick={() => alert("Reserva este servicio ahora!")}
                  variants={item}
                >
                  Reservar Servicio
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <ServicesTabs
              services={servicesData.services}
              openLightbox={openLightbox}
            />
          )}
        </div>
      </section>

      {/* Lightbox para imágenes */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={currentImageIndex}
        onPrev={() =>
          setCurrentImageIndex(
            (currentImageIndex + lightboxSlides.length - 1) %
              lightboxSlides.length
          )
        }
        onNext={() =>
          setCurrentImageIndex((currentImageIndex + 1) % lightboxSlides.length)
        }
      />
    </motion.main>
  );
};

export default ServicesPage;
