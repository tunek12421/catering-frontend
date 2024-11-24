import React, { useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStoriesCarousel = ({ stories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-green-light rounded-full mx-1 cursor-pointer transition-all duration-300 transform hover:scale-125"></div>
    ),
    appendDots: (dots) => <ul className="flex justify-center mt-6">{dots}</ul>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16">
      <Slider {...settings}>
        {stories.map((story, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center px-4 lg:px-8"
          >
            <motion.div
              className="relative w-full max-w-4xl h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-lg group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{story.title}</p>
              </div>
            </motion.div>
            <motion.h3
              className="text-xl sm:text-2xl font-bold text-gray-800 mt-6"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {story.title}
            </motion.h3>
            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-600 mt-2 max-w-3xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              {story.description}
            </motion.p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SuccessStoriesCarousel;
