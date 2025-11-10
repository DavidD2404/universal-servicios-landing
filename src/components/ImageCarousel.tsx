'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const CAROUSEL_IMAGES: CarouselImage[] = [
  { id: 1, src: '/images/gallery/trabajo-1.jpg', alt: 'Instalación de red de seguridad en balcón', category: 'Redes de Seguridad' },
  { id: 2, src: '/images/gallery/trabajo-2.jpg', alt: 'Red de protección instalada', category: 'Redes de Seguridad' },
  { id: 3, src: '/images/gallery/trabajo-3.jpg', alt: 'Estructura metálica', category: 'Estructuras' },
  { id: 4, src: '/images/gallery/trabajo-4.jpg', alt: 'Instalación de aire acondicionado', category: 'Aires Acondicionados' },
  { id: 5, src: '/images/gallery/trabajo-5.jpg', alt: 'Cerramiento de balcón', category: 'Estructuras' },
  { id: 6, src: '/images/gallery/trabajo-6.jpg', alt: 'Red de seguridad terminada', category: 'Redes de Seguridad' },
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === CAROUSEL_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === CAROUSEL_IMAGES.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? CAROUSEL_IMAGES.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const visibleImages = isMobile ? 1 : 3;
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < visibleImages; i++) {
      const index = (currentIndex + i) % CAROUSEL_IMAGES.length;
      slides.push(CAROUSEL_IMAGES[index]);
    }
    return slides;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Más de 500 instalaciones exitosas en Buenos Aires
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Carrusel principal */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="flex gap-4 transition-transform duration-500 ease-in-out">
              {getVisibleSlides().map((image, index) => (
                <div
                  key={`${image.id}-${index}`}
                  className={`relative flex-shrink-0 ${
                    isMobile ? 'w-full' : 'w-1/3'
                  } group`}
                  style={{ minWidth: isMobile ? '100%' : 'calc(33.333% - 0.667rem)' }}
                >
                  <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={index === 0}
                    />
                    {/* Overlay con información */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-secondary px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {image.category}
                        </span>
                        <p className="text-base font-medium">{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Anterior"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label="Siguiente"
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Indicadores de diapositiva */}
          <div className="flex justify-center gap-2 mt-8">
            {CAROUSEL_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-secondary'
                    : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>

          {/* Control de autoplay */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-sm text-neutral-600 hover:text-primary transition-colors duration-300 flex items-center gap-2"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                  Pausar
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Reproducir
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
