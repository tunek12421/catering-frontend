import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useSearchParams } from "react-router-dom";
import ServicesTabs from "../components/ServicesTabs";
import { fetchServicesData } from "../services/dataService";

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

const defaultServicesData = {
  services: [
    {
      id: "corporate",
      title: "Eventos Corporativos",
      description:
        "Nuestros servicios de catering para empresas están diseñados para impresionar, desde reuniones ejecutivas hasta grandes conferencias. Ofrecemos opciones personalizadas para satisfacer las necesidades de tu evento.",
      images: ["/assets/images/corporate1.jpg", "/assets/images/corporate2.jpg"],
      features: [
        "Menús personalizados para eventos empresariales.",
        "Capacidad para grandes volúmenes.",
        "Opciones para dietas especiales.",
      ],
    },
    {
      id: "wedding",
      title: "Bodas y Celebraciones",
      description:
        "Hacemos que tu día especial sea aún más memorable con un catering que refleja tu estilo. Desde bodas elegantes hasta celebraciones íntimas, estamos contigo en cada detalle.",
      images: ["/assets/images/wedding1.jpg", "/assets/images/wedding2.jpg"],
      features: [
        "Diseño de menús temáticos.",
        "Decoraciones personalizadas para mesas.",
        "Bebidas exclusivas y opciones de barra libre.",
      ],
    },
    {
      id: "private",
      title: "Eventos Privados",
      description:
        "Ya sea una fiesta de cumpleaños, un aniversario o una reunión especial, ofrecemos un servicio exclusivo y discreto que hará que tus invitados se sientan únicos.",
      images: ["/assets/images/private1.jpg", "/assets/images/private2.jpg"],
      features: [
        "Servicio en casa o en locaciones privadas.",
        "Pequeños detalles que hacen la diferencia.",
        "Asistencia completa de planificación.",
      ],
    },
  ],
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
      {/* Introducción General */}
      <section
        className="relative py-16 px-6 md:px-16 text-center overflow-hidden bg-fixed bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/services-banner.jpg)' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            En Sabores de Altura, transformamos tus eventos en experiencias
            únicas y memorables.
          </motion.p>
        </div>
      </section>

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
          setCurrentImageIndex(
            (currentImageIndex + 1) % lightboxSlides.length
          )
        }
      />
    </motion.main>
  );
};

export default ServicesPage;
