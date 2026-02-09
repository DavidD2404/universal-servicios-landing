'use client';

import { useState, useEffect } from 'react';
import { CONTACT_INFO } from '@/utils/constants';
import Image from 'next/image';

export default function ServiceBanners() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleWhatsApp = (service: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa el servicio de ${service}`);
    window.open(`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section className="w-full bg-neutral-50 pt-20">
      <div className="relative w-full overflow-hidden">
        {/* Slide 1 - Redes de Seguridad */}
        <div
          className={`transition-opacity duration-700 ${currentSlide === 0 ? 'block' : 'hidden'}`}
        >
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] bg-[#0A2647] overflow-hidden">
              {/* Logo - Fixed Position */}
              <div className="absolute top-12 left-16 z-20">
                <span className="block font-heading font-extrabold text-3xl text-white">UNIVERSAL</span>
                <span className="block font-heading font-medium text-yellow-400 text-xl">SERVICIOS</span>
              </div>

              <div className="absolute inset-0 flex">
                {/* Left Side - Content (60%) */}
<div className="w-[60%] flex items-center pl-16 pr-8 py-12 text-white z-10">
                  <div className="pt-24">
                    <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      TU TRANQUILIDAD<br />COMIENZA AQUÍ
                    </h2>
                    <p className="text-xl mb-8 text-neutral-200">
                      Instalación profesional de redes de protección para<br />balcones, ventanas y terrazas.
                    </p>

                    {/* Features con iconos */}
                    <div className="mb-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Protección para niños y mascotas</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Materiales de alta resistencia</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Soluciones a medida</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Garantía de calidad</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleWhatsApp('Redes de Seguridad')}
                      className="bg-yellow-400 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl touch-manipulation"
                    >
                      ¡Presupuesto sin Cargo por WhatsApp!
                    </button>
                  </div>
                </div>

                {/* Right Side - Image with Yellow Diagonal (40%) */}
                <div className="w-[50%] relative">
                  {/* Yellow diagonal background */}
                  <div
                    className="absolute inset-0 bg-yellow-400"
                    style={{
                      clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
                    }}
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/gallery/trabajo-2.jpg"
                      alt="Redes de seguridad"
                      fill
                      className="object-cover mix-blend-multiply opacity-85"
                      style={{
                        clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
                      }}
                      priority
                      loading="eager"
                      quality={75}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile + Tablet */}
          <div className="lg:hidden relative bg-[#0A2647] overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <Image
                src="/images/gallery/trabajo-2.jpg"
                alt="Redes de seguridad"
                fill
                className="object-cover opacity-20"
                priority
                loading="eager"
                quality={60}
                sizes="100vw"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 py-10 pb-12 text-white h-[620px] md:h-[680px] flex flex-col justify-between">
              <div className="mb-6">
                <span className="block font-heading font-extrabold text-2xl md:text-3xl">UNIVERSAL</span>
                <span className="block font-heading font-medium text-yellow-400 text-lg md:text-xl">SERVICIOS</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                TU TRANQUILIDAD<br />COMIENZA AQUÍ
              </h2>
              <p className="text-base md:text-xl mb-6">
                Instalación profesional de redes de protección para balcones, ventanas y terrazas.
              </p>

              {/* Features con iconos mobile */}
              <div className="mb-8 space-y-2 md:space-y-3 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Protección para niños y mascotas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Materiales de alta resistencia</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Soluciones a medida</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Garantía de calidad</span>
                </div>
              </div>

              <button
                onClick={() => handleWhatsApp('Redes de Seguridad')}
                className="w-full bg-yellow-400 text-primary px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-500 transition-colors shadow-lg touch-manipulation"
              >
                ¡Presupuesto sin Cargo por WhatsApp!
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 - Estructuras de Acero */}
        <div
          className={`transition-opacity duration-700 ${currentSlide === 1 ? 'block' : 'hidden'}`}
        >
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] bg-[#1e3a5f] overflow-hidden">
              {/* Logo - Fixed Position */}
              <div className="absolute top-12 left-16 z-20">
                <span className="block font-heading font-extrabold text-3xl text-white">UNIVERSAL</span>
                <span className="block font-heading font-medium text-yellow-400 text-xl">SERVICIOS</span>
              </div>

              <div className="absolute inset-0">
                {/* Background Image Full Width */}
                <Image
                  src="/images/gallery/trabajo-1.jpg"
                  alt="Estructuras de acero"
                  fill
                  className="object-cover opacity-20"
                  quality={60}
                  sizes="100vw"
                  loading="lazy"
                />
              </div>

              <div className="relative z-10 h-full flex">
                {/* Left Side - Content */}
                <div className="w-[55%] flex items-center pl-16 text-white">
                  <div className="pt-16">
                    <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      EXPERTOS EN<br />SEGURIDAD,<br />DE PUNTA A PUNTA
                    </h2>
                    <p className="text-xl mb-6 text-neutral-200">
                      Instalación Profesional con Materiales Certificados
                    </p>
                    <button
                      onClick={() => handleWhatsApp('Estructuras de Acero')}
                      className="bg-yellow-400 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl touch-manipulation"
                    >
                      CONSULTAR COBERTURA
                    </button>
                  </div>
                </div>

                {/* Right Side - Features */}
                <div className="w-[45%] flex items-end justify-end pr-16 pb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div className="text-white">
                        <div className="font-bold text-sm uppercase">INSTALACIÓN EN</div>
                        <div className="font-bold text-base text-yellow-400">TODO CABA Y BS AS</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                        </svg>
                      </div>
                      <div className="text-white">
                        <div className="font-bold text-sm uppercase">RED MULTIFILAMENTO</div>
                        <div className="font-bold text-sm uppercase">RED MONOFILAMENTO</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <div className="text-white">
                        <div className="font-bold text-sm uppercase">*GARANTÍA</div>
                        <div className="font-bold text-base text-yellow-400">DE CALIDAD</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile + Tablet */}
          <div className="lg:hidden relative bg-[#1e3a5f] overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <Image
                src="/images/gallery/trabajo-1.jpg"
                alt="Estructuras"
                fill
                className="object-cover opacity-15"
                quality={60}
                sizes="100vw"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 py-10 pb-12 text-white h-[620px] md:h-[680px] flex flex-col justify-between">
              <div className="mb-6">
                <span className="block font-heading font-extrabold text-2xl md:text-3xl">UNIVERSAL</span>
                <span className="block font-heading font-medium text-yellow-400 text-lg md:text-xl">SERVICIOS</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                EXPERTOS EN<br />SEGURIDAD,<br />DE PUNTA A PUNTA
              </h2>
              <p className="text-base md:text-xl mb-6">
                Instalación Profesional con Materiales Certificados
              </p>

              {/* Features */}
              <div className="mb-8 space-y-2 md:space-y-3 flex-grow">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium">Instalación en CABA y Buenos Aires</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium">Red multifilamento y monofilamento</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium">Materiales certificados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium">Garantía de calidad</span>
                  </div>
                </div>

              <button
                onClick={() => handleWhatsApp('Estructuras de Acero')}
                className="w-full bg-yellow-400 text-primary px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-500 transition-colors shadow-lg touch-manipulation"
              >
                CONSULTAR COBERTURA
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 - Aires Acondicionados */}
        <div
          className={`transition-opacity duration-700 ${currentSlide === 2 ? 'block' : 'hidden'}`}
        >
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="relative h-[600px] bg-[#0A2647] overflow-hidden">
              {/* Logo - Fixed Position */}
              <div className="absolute top-12 left-16 z-20">
                <span className="block font-heading font-extrabold text-3xl text-white">UNIVERSAL</span>
                <span className="block font-heading font-medium text-yellow-400 text-xl">SERVICIOS</span>
              </div>

              <div className="absolute inset-0 flex">
                {/* Left Side - Image with Blue Diagonal (45%) */}
                <div className="w-[45%] relative">
                  {/* Blue diagonal background - invertido */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500"
                    style={{
                      clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)'
                    }}
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src="/images/gallery/trabajo-5.jpg"
                      alt="Aires acondicionados"
                      fill
                      className="object-cover mix-blend-multiply opacity-80"
                      style={{
                        clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0 100%)'
                      }}
                      quality={60}
                      sizes="(max-width: 768px) 100vw, 45vw"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Right Side - Content (55%) */}
                <div className="w-[55%] flex items-center pl-12 pr-16 py-12 text-white z-10">
                  <div className="pt-16">
                    <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                      CLIMA PERFECTO<br />TODO EL AÑO
                    </h2>
                    <p className="text-xl mb-8 text-blue-300">
                      Instalación profesional y mantenimiento preventivo de Aires acondicionados
                    </p>

                    {/* Features con iconos */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Instalación certificada</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Equipamiento profesional</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Mantenimiento preventivo</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-lg font-medium">Asesoramiento técnico</span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleWhatsApp('Aires Acondicionados')}
                      className="bg-yellow-400 text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-all shadow-xl hover:shadow-2xl touch-manipulation"
                    >
                      ¡Solicitar Técnico Ahora!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile + Tablet */}
          <div className="lg:hidden relative bg-[#0A2647] overflow-hidden">
            {/* Background image with overlay */}
            <div className="absolute inset-0">
              <Image
                src="/images/gallery/trabajo-5.jpg"
                alt="Aires acondicionados"
                fill
                className="object-cover opacity-20"
                quality={60}
                sizes="100vw"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 py-10 pb-12 text-white h-[620px] md:h-[680px] flex flex-col justify-between">
              <div className="mb-6">
                <span className="block font-heading font-extrabold text-2xl md:text-3xl">UNIVERSAL</span>
                <span className="block font-heading font-medium text-yellow-400 text-lg md:text-xl">SERVICIOS</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
                CLIMA PERFECTO<br />TODO EL AÑO
              </h2>
              <p className="text-base md:text-xl mb-6 text-blue-300">
                Instalación profesional y mantenimiento preventivo de Aires acondicionados
              </p>

              {/* Features con iconos mobile */}
              <div className="mb-8 space-y-2 md:space-y-3 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Instalación certificada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Equipamiento profesional</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Mantenimiento preventivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium">Asesoramiento técnico</span>
                </div>
              </div>

              <button
                onClick={() => handleWhatsApp('Aires Acondicionados')}
                className="w-full bg-yellow-400 text-primary px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-500 transition-colors shadow-lg touch-manipulation"
              >
                ¡Solicitar Técnico Ahora!
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Dots y Control de Pausa */}
        <div className="flex justify-center items-center gap-4 mt-6 pb-4">
          {/* Dots */}
          <div className="flex gap-3">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-4 md:h-3 rounded-full transition-all touch-manipulation ${
                  currentSlide === index ? 'w-10 bg-yellow-400' : 'w-4 md:w-3 bg-neutral-400'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Botón Play/Pause */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors touch-manipulation"
            aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          >
            {isPaused ? (
              <svg className="w-4 h-4 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
