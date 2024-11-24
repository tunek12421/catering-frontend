import React, { useState, useEffect } from 'react';
import { useTransition, animated } from '@react-spring/web';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Animaciones con React Spring
  const transitions = useTransition(currentIndex, {
    key: currentIndex,
    from: {
      opacity: 0,
      transform: 'translate3d(0,100%,0) scale(0.8) rotateX(90deg)',
    },
    enter: {
      opacity: 1,
      transform: 'translate3d(0%,0%,0) scale(1) rotateX(0deg)',
    },
    leave: {
      opacity: 0,
      transform: 'translate3d(0%,-50%,0) scale(0.8) rotateX(-90deg)',
    },
    config: {
      mass: 5,      // Aumentamos la masa aún más
      tension: 80,  // Disminuimos la tensión
      friction: 60, // Aumentamos la fricción
    },
  });

  return (
    <div className="relative w-full">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Lo Que Dicen Nuestros Clientes
      </h2>
      <div className="flex justify-center items-center relative">
        <button
          onClick={prevSlide}
          aria-label="Anterior"
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-green-light text-white p-3 rounded-full shadow-lg hover:bg-gold transition z-10"
        >
          ❮
        </button>

        <div className="w-full max-w-md h-64 relative overflow-hidden">
          {transitions((style, i) => (
            <animated.div
              key={i}
              style={style}
              className="absolute w-full h-full"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full flex flex-col justify-center">
                <p className="text-base text-gray-700 italic text-center">
                  "{testimonials[i].text}"
                </p>
                <p className="mt-4 text-green-light font-bold text-center">
                  - {testimonials[i].author}
                </p>
              </div>
            </animated.div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Siguiente"
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-green-light text-white p-3 rounded-full shadow-lg hover:bg-gold transition z-10"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
