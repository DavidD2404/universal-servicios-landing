'use client';

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '@/utils/constants';

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  ctaText: string;
  bgColor: string;
  accentColor: string;
  imageUrl: string;
}

const SLIDES: BannerSlide[] = [
  {
    id: 1,
    title: 'TU TRANQUILIDAD COMIENZA AQUÍ',
    subtitle: 'Redes de Seguridad y Estructuras de Instalación Profesional en todo CABA',
    ctaText: '¡Presupuesto sin Cargo por WhatsApp!',
    bgColor: '#0A2647',
    accentColor: '#F9A826',
    imageUrl: '/images/gallery/trabajo-2.jpg',
  },
  {
    id: 2,
    title: 'EXPERTOS EN SEGURIDAD, DE PUNTA A PUNTA',
    subtitle: 'Instalación Profesional con Materiales Certificados',
    ctaText: 'CONSULTAR COBERTURA',
    bgColor: '#1e3a5f',
    accentColor: '#F9A826',
    imageUrl: '/images/gallery/trabajo-1.jpg',
  },
  {
    id: 3,
    title: 'CONFORT Y AIRE PURO PARA TU HOGAR',
    subtitle: 'Instalación, Mantenimiento y Reparación de Aires Acondicionados',
    ctaText: '¡SOLICITAR TÉCNICO AHORA!',
    bgColor: '#0A2647',
    accentColor: '#F9A826',
    imageUrl: '/images/gallery/trabajo-4.jpg',
  },
];

export default function HeroBannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = SLIDES[currentSlide];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`¡Hola! Me interesa ${slide.title}`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div
          className="relative h-[600px] transition-colors duration-700"
          style={{ backgroundColor: slide.bgColor }}
        >
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-2 h-full">
              {/* Left Side - Content */}
              <div className="flex flex-col justify-center p-12 lg:p-16 text-white">
                {/* Logo */}
                <div className="mb-8">
                  <span className="block font-heading font-extrabold text-3xl tracking-tight">
                    UNIVERSAL
                  </span>
                  <span className="block font-heading font-medium text-yellow-400 text-xl tracking-widest">
                    SERVICIOS
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h2>

                {/* Subtitle */}
                <p className="text-lg lg:text-xl mb-8 text-neutral-200 leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Features */}
                <div className="mb-8 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">INSTALACIÓN EN TODO CABA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                      <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="font-medium">GARANTÍA DE CALIDAD</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="bg-yellow-400 hover:bg-yellow-500 text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    {slide.ctaText}
                  </button>
                  <button
                    onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-medium text-lg transition-all duration-300 border border-white/30"
                  >
                    Ver Servicios
                  </button>
                </div>
              </div>

              {/* Right Side - Image with Diagonal Overlay */}
              <div className="relative overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                />

                {/* Yellow Diagonal Overlay */}
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    backgroundColor: slide.accentColor,
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                />

                {/* Image on top with blend mode */}
                <div
                  className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-60"
                  style={{
                    backgroundImage: `url(${slide.imageUrl})`,
                    clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-10 bg-yellow-400' : 'w-3 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div
          className="relative min-h-[600px] transition-colors duration-700"
          style={{ backgroundColor: slide.bgColor }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 pt-8 pb-16 text-white">
            {/* Logo */}
            <div className="mb-8">
              <span className="block font-heading font-extrabold text-2xl tracking-tight">
                UNIVERSAL
              </span>
              <span className="block font-heading font-medium text-yellow-400 text-lg tracking-widest">
                SERVICIOS
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading text-3xl font-bold mb-4 leading-tight">
              {slide.title}
            </h2>

            {/* Subtitle */}
            <p className="text-base mb-6 text-neutral-100 leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Features */}
            <div className="mb-6 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">INSTALACIÓN EN TODO CABA</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">GARANTÍA DE CALIDAD</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-primary px-6 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg mb-3"
            >
              {slide.ctaText}
            </button>

            <button
              onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium text-base transition-all duration-300 border border-white/30"
            >
              Ver Servicios
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-10 bg-yellow-400' : 'w-3 bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
