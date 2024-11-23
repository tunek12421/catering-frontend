// src/components/SuccessStoriesCarousel.js

import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

const SuccessStoriesCarousel = ({ stories }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Slider {...settings}>
      {stories.map((story, index) => (
        <div key={index} className="px-4">
          <motion.img
            src={story.image}
            alt={story.title}
            className="w-full h-64 object-cover rounded"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <h3 className="text-xl font-bold mt-4">{story.title}</h3>
          <p className="text-gray-700">{story.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SuccessStoriesCarousel;
