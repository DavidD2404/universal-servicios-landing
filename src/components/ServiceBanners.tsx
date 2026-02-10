'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const handleDragEnd = (_: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;

    if (swipe < -3000) {
      // Swipe left - next slide
      setCurrentSlide((prev) => (prev + 1) % 3);
    } else if (swipe > 3000) {
      // Swipe right - previous slide
      setCurrentSlide((prev) => (prev - 1 + 3) % 3);
    }
  };

  return (
    <section className="w-full bg-neutral-50 pt-20">
      <div className="relative w-full overflow-hidden">
        {/* Spacer to maintain height */}
        <div className="h-[560px] md:h-[680px] lg:h-[600px]" />

        <AnimatePresence mode="wait">
          {currentSlide === 0 && (
            <motion.div
              key="slide-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="lg:cursor-grab lg:active:cursor-grabbing absolute top-0 left-0 right-0 h-[560px] md:h-[680px] lg:h-[600px]"
            >
              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="relative h-[600px] bg-primary-darker overflow-hidden">
                  <div className="absolute inset-0 flex">
                    {/* Left Side - Content (60%) */}
                    <div className="w-[60%] flex items-center pl-16 pr-8 py-12 text-white z-10">
                      <div className="pt-12">
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                          TU TRANQUILIDAD<br />COMIENZA AQUÍ
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-xl mb-8 text-neutral-200"
                        >
                          Instalación profesional de redes de protección para<br />balcones, ventanas y terrazas.
                        </motion.p>

                        {/* Features con iconos */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="mb-4 space-y-3"
                        >
                          {['Protección para niños y mascotas', 'Materiales de alta resistencia', 'Soluciones a medida', 'Garantía de calidad'].map((feature, i) => (
                            <motion.div
                              key={i}
                              custom={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-lg font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          onClick={() => handleWhatsApp('Redes de Seguridad')}
                          className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-all shadow-xl hover:shadow-2xl touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                          ¡Presupuesto sin Cargo por WhatsApp!
                        </motion.button>
                      </div>
                    </div>

                    {/* Right Side - Image with Yellow Diagonal (40%) */}
                    <div className="w-[50%] relative">
                      {/* Yellow diagonal background */}
                      <div
                        className="absolute inset-0 bg-accent"
                        style={{
                          clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)'
                        }}
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0">
                        <Image
                          src="/images/gallery/trabajo-2.jpg"
                          alt="Instalación profesional de redes de seguridad en balcones y ventanas para protección de niños y mascotas en edificios residenciales"
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
              <div className="lg:hidden relative bg-primary-darker overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/gallery/trabajo-2.jpg"
                    alt="Instalación profesional de redes de seguridad para balcones con materiales certificados de alta resistencia"
                    fill
                    className="object-cover opacity-20"
                    priority
                    loading="eager"
                    quality={60}
                    sizes="100vw"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-10 py-10 pb-12 text-white h-[560px] md:h-[680px] flex flex-col justify-between">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-heading text-4xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight"
                  >
                    TU TRANQUILIDAD<br />COMIENZA AQUÍ
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-2xl lg:text-xl mb-6 md:mb-10 leading-relaxed"
                  >
                    Instalación profesional de redes de protección para balcones, ventanas y terrazas.
                  </motion.p>

                  {/* Features con iconos mobile */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 space-y-2 md:space-y-4 flex-grow"
                  >
                    {['Protección para niños y mascotas', 'Materiales de alta resistencia', 'Soluciones a medida', 'Garantía de calidad'].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base md:text-xl lg:text-lg font-medium leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    onClick={() => handleWhatsApp('Redes de Seguridad')}
                    className="w-full bg-accent text-primary px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent-dark transition-colors shadow-lg touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    ¡Presupuesto sin Cargo por WhatsApp!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 1 && (
            <motion.div
              key="slide-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="lg:cursor-grab lg:active:cursor-grabbing absolute top-0 left-0 right-0 h-[560px] md:h-[680px] lg:h-[600px]"
            >
              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="relative h-[600px] bg-primary-slate overflow-hidden">
                  <div className="absolute inset-0">
                    {/* Background Image Full Width */}
                    <Image
                      src="/images/gallery/trabajo-1.jpg"
                      alt="Estructuras de acero y soportes metálicos para redes de protección instalados por profesionales certificados en CABA y Buenos Aires"
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
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                          EXPERTOS EN<br />SEGURIDAD,<br />DE PUNTA A PUNTA
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-xl mb-6 text-neutral-200"
                        >
                          Instalación Profesional con Materiales Certificados
                        </motion.p>
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          onClick={() => handleWhatsApp('Estructuras de Acero')}
                          className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-all shadow-xl touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                          ¡Consultar Cobertura Ahora!
                        </motion.button>
                      </div>
                    </div>

                    {/* Right Side - Features */}
                    <div className="w-[45%] flex items-end justify-end pr-16 pb-12">
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-4"
                      >
                        {[
                          { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', title: 'INSTALACIÓN EN', subtitle: 'TODO CABA Y BS AS' },
                          { icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', title: 'RED MULTIFILAMENTO', subtitle: 'RED MONOFILAMENTO' },
                          { icon: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', title: '*GARANTÍA', subtitle: 'DE CALIDAD' },
                        ].map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                            className="flex items-center gap-4 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-2xl"
                          >
                            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                                <path d={item.icon} />
                              </svg>
                            </div>
                            <div className="text-white">
                              <div className="font-bold text-sm uppercase">{item.title}</div>
                              <div className="font-bold text-base text-accent">{item.subtitle}</div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile + Tablet */}
              <div className="lg:hidden relative bg-primary-slate overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/gallery/trabajo-1.jpg"
                    alt="Instalación de estructuras de acero para redes de seguridad multifilamento y monofilamento con garantía de calidad"
                    fill
                    className="object-cover opacity-15"
                    quality={60}
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-10 py-10 pb-12 text-white h-[560px] md:h-[680px] flex flex-col justify-between">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-heading text-4xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight"
                  >
                    EXPERTOS EN<br />SEGURIDAD,<br />DE PUNTA A PUNTA
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-2xl lg:text-xl mb-6 md:mb-10 leading-relaxed"
                  >
                    Instalación Profesional con Materiales Certificados
                  </motion.p>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 space-y-2 md:space-y-4 flex-grow"
                  >
                    {['Instalación en CABA y Buenos Aires', 'Red multifilamento y monofilamento', 'Materiales certificados', 'Garantía de calidad'].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base md:text-xl lg:text-lg font-medium leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    onClick={() => handleWhatsApp('Estructuras de Acero')}
                    className="w-full bg-accent text-primary px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent-dark transition-colors shadow-lg touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    ¡Consultar Cobertura Ahora!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {currentSlide === 2 && (
            <motion.div
              key="slide-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={handleDragEnd}
              className="lg:cursor-grab lg:active:cursor-grabbing absolute top-0 left-0 right-0 h-[560px] md:h-[680px] lg:h-[600px]"
            >
              {/* Desktop */}
              <div className="hidden lg:block">
                <div className="relative h-[600px] bg-primary-darker overflow-hidden">
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
                          alt="Instalación y mantenimiento profesional de aires acondicionados con equipamiento certificado y asesoramiento técnico especializado"
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
                        <motion.h2
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                          className="font-heading text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                        >
                          CLIMA PERFECTO<br />TODO EL AÑO
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                          className="text-xl mb-8 text-blue-300"
                        >
                          Instalación profesional y mantenimiento preventivo de Aires acondicionados
                        </motion.p>

                        {/* Features con iconos */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="mb-6 space-y-3"
                        >
                          {['Instalación certificada', 'Equipamiento profesional', 'Mantenimiento preventivo', 'Asesoramiento técnico'].map((feature, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-4 h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-lg font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 }}
                          onClick={() => handleWhatsApp('Aires Acondicionados')}
                          className="bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-accent-dark transition-all shadow-xl hover:shadow-2xl touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                        >
                          ¡Solicitar Técnico Ahora!
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile + Tablet */}
              <div className="lg:hidden relative bg-primary-darker overflow-hidden">
                {/* Background image with overlay */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/gallery/trabajo-5.jpg"
                    alt="Servicio de instalación certificada de aires acondicionados con mantenimiento preventivo y equipamiento profesional"
                    fill
                    className="object-cover opacity-20"
                    quality={60}
                    sizes="100vw"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 md:p-10 py-10 pb-12 text-white h-[560px] md:h-[680px] flex flex-col justify-between">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="font-heading text-4xl md:text-6xl font-bold mb-4 md:mb-8 leading-tight"
                  >
                    CLIMA PERFECTO<br />TODO EL AÑO
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-lg md:text-2xl lg:text-xl mb-6 md:mb-10 text-blue-300 leading-relaxed"
                  >
                    Instalación profesional y mantenimiento preventivo de Aires acondicionados
                  </motion.p>

                  {/* Features con iconos mobile */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mb-8 space-y-2 md:space-y-4 flex-grow"
                  >
                    {['Instalación certificada', 'Equipamiento profesional', 'Mantenimiento preventivo', 'Asesoramiento técnico'].map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 md:w-7 md:h-7 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-base md:text-xl lg:text-lg font-medium leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    onClick={() => handleWhatsApp('Aires Acondicionados')}
                    className="w-full bg-accent text-primary px-6 py-4 rounded-full font-bold text-base md:text-lg hover:bg-accent-dark transition-colors shadow-lg touch-manipulation focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    ¡Solicitar Técnico Ahora!
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Dots y Control de Pausa */}
        <div className="relative z-10 flex justify-center items-center gap-4 mt-6 pb-4">
          {/* Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="p-2 touch-manipulation rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={`Ir a slide ${index + 1}`}
              >
                <div
                  className={`h-4 md:h-3 rounded-full transition-all ${
                    currentSlide === index ? 'w-10 bg-accent' : 'w-4 md:w-3 bg-neutral-400'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Botón Play/Pause */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 touch-manipulation rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            aria-label={isPaused ? 'Reanudar carrusel' : 'Pausar carrusel'}
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-200 hover:bg-neutral-300 transition-colors">
              {isPaused ? (
                <svg className="w-4 h-4 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-neutral-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
