"use client";

import { motion } from "framer-motion";

export default function About() {
  const features = [
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Seguridad Garantizada",
      description:
        "Instalaciones certificadas con materiales de primera calidad y garantía en todos nuestros trabajos.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Atención Inmediata",
      description:
        "Respuesta rápida a consultas y presupuestos sin cargo. Trabajamos con tu agenda.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Equipo Profesional",
      description:
        "Personal capacitado y con años de experiencia en el rubro de seguridad y climatización.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: "Mejor Relación Precio-Calidad",
      description:
        "Precios competitivos sin comprometer la calidad de materiales e instalación.",
    },
  ];

  return (
    <section
      id="nosotros"
      className="relative py-14 md:py-16 lg:py-20 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary font-heading font-bold text-sm rounded-full mb-4">
              NUESTRAS VENTAJAS
            </span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 leading-tight">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Compromiso, experiencia y calidad en cada proyecto
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 md:mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white p-8 lg:p-10 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-secondary/30 border-t-4 border-t-secondary group overflow-hidden"
              >
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className="flex items-center mb-6">
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-secondary/10 rounded-xl blur-md" />
                      <div className="relative w-16 h-16 md:w-18 md:h-18 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-primary mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-gradient-to-br from-primary to-[#0A2647] text-white p-10 lg:p-14 rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />

            <div className="relative">
              <div className="text-center mb-6">
                <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-accent font-heading font-bold text-sm rounded-full mb-4">
                  QUIÉNES SOMOS
                </span>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center max-w-4xl mx-auto">
                En{" "}
                <span className="font-bold text-accent">
                  Universal Servicios
                </span>
                , nos especializamos en brindar tranquilidad y bienestar a
                nuestros clientes a través de soluciones de seguridad de alta
                calidad. Nuestro compromiso es proteger lo que más te importa:
                tu familia, mascotas y espacios, ofreciendo instalaciones
                profesionales respaldadas por años de experiencia en Buenos
                Aires.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
