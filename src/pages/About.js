import React, { useEffect } from "react";
import $ from "jquery";
import { motion } from "framer-motion";
import TeamCards from "../components/TeamCards";
import SuccessStoriesCarousel from "../components/SuccessStoriesCarousel";
import Mission from "../components/Mission";
import Vision from "../components/Vision";
import WhyChooseUs from "../components/WhyChooseUs";

const teamData = [
  {
    name: "Ana Pérez",
    role: "Chef Principal",
    image: "/assets/images/team1.jpg",
  },
  {
    name: "Carlos López",
    role: "Coordinador de Eventos",
    image: "/assets/images/team2.jpg",
  },
];

const successStoriesData = [
  {
    title: "Boda de Ensueño",
    description: "Hicimos que el día especial de Ana y Juan fuera inolvidable.",
    image: "/assets/images/success1.jpg",
  },
  {
    title: "Evento Corporativo",
    description:
      "Transformamos la reunión anual de Empresa X en una experiencia única.",
    image: "/assets/images/success2.jpg",
  },
];

const About = () => {
  useEffect(() => {
    // Inicializa animaciones de visibilidad con jQuery
    $(".fade-in").css({ opacity: 0 });
    $(".slide-in-left").css({ opacity: 0, transform: "translateX(-50px)" });
    $(".slide-in-right").css({ opacity: 0, transform: "translateX(50px)" });

    const isElementVisible = (element) => {
      const topOfElement = $(element).offset().top;
      const bottomOfWindow = $(window).scrollTop() + $(window).height();
      return bottomOfWindow > topOfElement;
    };

    const onScroll = () => {
      $(".fade-in").each(function () {
        if (isElementVisible(this)) {
          $(this).stop(true, true).animate({ opacity: 1 }, 300);
        }
      });

      $(".slide-in-left, .slide-in-right").each(function () {
        if (isElementVisible(this)) {
          $(this).css({
            transform: "translateX(0)",
            transition: "transform 1s ease, opacity 1s ease",
          });
          $(this).stop(true, true).animate({ opacity: 1 }, 300);
        }
      });
    };

    $(window).on("scroll", onScroll);
    $(window).trigger("scroll");

    return () => {
      $(window).off("scroll", onScroll);
    };
  }, []);

  return (
    <main className="bg-beige-light min-h-screen pt-16 overflow-hidden">
      {/* Introducción */}
      <section className="py-16 px-6 md:px-16 text-center fade-in">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-green-light"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Acerca de Nosotros
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Descubre la historia, misión y el equipo detrás de Sabores de Altura.
        </motion.p>
      </section>

      {/* Equipo */}
      <section className="py-16 px-6 md:px-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold text-green-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Nuestro Equipo
          </motion.h2>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <TeamCards team={teamData} />
          </motion.div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="py-16 px-6 md:px-16 bg-gray-100">
        <div className="container mx-auto text-center flex flex-col items-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-light"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            Casos de Éxito
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Mira cómo hemos transformado eventos especiales en recuerdos
            inolvidables.
          </motion.p>
          <motion.div
            className="mt-12 w-full max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <SuccessStoriesCarousel stories={successStoriesData} />
          </motion.div>
        </div>
      </section>

      {/* Misión, Visión y Por qué Elegirnos */}
      <Mission />
      <Vision />
      <WhyChooseUs />
    </main>
  );
};

export default About;
