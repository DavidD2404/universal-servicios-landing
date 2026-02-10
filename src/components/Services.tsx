"use client";
import { SERVICES, FEATURED_SERVICE } from "@/utils/constants";
import { CONTACT_INFO } from "@/utils/constants";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix]);
  return (
    <div ref={ref} className="inline-block">
      0{suffix}
    </div>
  );
}
function ServiceIcon({
  icon,
  className = "w-8 h-8",
}: {
  icon: string;
  className?: string;
}) {
  const icons: Record<string, JSX.Element> = {
    "🛡️": (
      <svg
        className={className}
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
    "🏠": (
      <svg
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    "🏢": (
      <svg
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    "⚙️": (
      <svg
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    "❄️": (
      <svg
        className={className}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M12 2v20M2 12h20M6.34 6.34l11.32 11.32M17.66 6.34L6.34 17.66M8 12l-4 4M8 12l-4-4M16 12l4 4M16 12l4-4M12 8l-4-4M12 8l4-4M12 16l-4 4M12 16l4 4" />
      </svg>
    ),
  };
  return icons[icon] || null;
}
export default function Services() {
  const handleWhatsAppClick = (serviceName: string) => {
    const customMessage = encodeURIComponent(
      `¡Hola! Me interesa el servicio de ${serviceName}. ¿Podrían brindarme más información?`,
    );
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${customMessage}`;
    window.open(url, "_blank");
  };
  return (
    <section
      id="servicios"
      className="relative py-14 md:py-16 lg:py-20 bg-gradient-to-b from-white via-neutral-50 to-white overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/10 text-primary font-heading font-bold text-sm rounded-full mb-4">
              SOLUCIONES PROFESIONALES
            </span>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight">
              Nuestros
              <br />
              Servicios
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Más de 7 años protegiendo hogares y espacios comerciales en Buenos
              Aires
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 md:mt-16"
          >
            <div className="bg-gradient-to-br from-primary via-primary-medium to-primary rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 lg:p-16 max-w-6xl mx-auto shadow-2xl border border-white/10 backdrop-blur-sm">
              <div className="absolute top-6 right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute bottom-6 left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <div className="text-center group">
                  <div className="inline-flex items-baseline justify-center mb-3">
                    <span className="font-heading text-5xl md:text-6xl lg:text-8xl font-extrabold text-accent mr-2 group-hover:scale-110 transition-transform duration-300">
                      +<AnimatedCounter value={500} />
                    </span>
                  </div>
                  <div className="text-white text-lg md:text-xl font-medium opacity-90">
                    Clientes satisfechos
                  </div>
                  <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-baseline justify-center mb-3">
                    <span className="font-heading text-5xl md:text-6xl lg:text-8xl font-extrabold text-accent mr-2 group-hover:scale-110 transition-transform duration-300">
                      +<AnimatedCounter value={7} />
                    </span>
                  </div>
                  <div className="text-white text-lg md:text-xl font-medium opacity-90">
                    Años de experiencia
                  </div>
                  <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
                </div>
                <div className="text-center group">
                  <div className="inline-flex items-baseline justify-center mb-3">
                    <span className="font-heading text-5xl md:text-6xl lg:text-8xl font-extrabold text-accent mr-2 group-hover:scale-110 transition-transform duration-300">
                      <AnimatedCounter value={100} suffix="%" />
                    </span>
                  </div>
                  <div className="text-white text-lg md:text-xl font-medium opacity-90">
                    Garantía de calidad
                  </div>
                  <div className="w-16 h-1 bg-accent rounded-full mx-auto mt-3" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 lg:mb-12"
          >
            <div className="relative bg-gradient-to-br from-white via-white to-neutral-50 rounded-3xl lg:rounded-[2.5rem] p-8 md:p-10 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-neutral-100 hover:border-secondary/30 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl group-hover:bg-secondary/10 transition-colors duration-500" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className="absolute inset-0 bg-secondary/20 rounded-2xl blur-xl" />
                      <div className="relative w-20 h-20 lg:w-24 lg:h-24 bg-secondary/10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <ServiceIcon
                          icon={FEATURED_SERVICE.icon}
                          className="w-12 h-12 lg:w-14 lg:h-14 text-secondary"
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary leading-tight">
                        {FEATURED_SERVICE.title}
                      </h3>
                      <p className="text-secondary font-medium text-sm md:text-base mt-1">
                        Servicio destacado
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  {FEATURED_SERVICE.subcategories.map((subcategory, index) => (
                    <motion.div
                      key={subcategory.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative bg-white rounded-2xl lg:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-secondary/30 border-t-4 border-t-secondary group/card overflow-hidden flex flex-col"
                    >
                      <div className="relative flex-1 flex flex-col">
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-6">
                            <div className="relative flex-shrink-0">
                              <div className="absolute inset-0 bg-secondary/10 rounded-xl blur-md" />
                              <div className="relative w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300">
                                <ServiceIcon
                                  icon={subcategory.icon}
                                  className="w-8 h-8 text-secondary"
                                />
                              </div>
                            </div>
                            <div className="flex-1">
                              <h4 className="font-heading text-xl md:text-2xl font-bold text-primary mb-2 leading-tight">
                                {subcategory.title}
                              </h4>
                              <p className="text-sm text-neutral-600 leading-relaxed">
                                {subcategory.description}
                              </p>
                            </div>
                          </div>
                          <ul className="space-y-3 mb-6">
                            {subcategory.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="relative flex-shrink-0 mt-1">
                                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-sm" />
                                  <div className="relative w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                                    <svg
                                      className="w-3 h-3 text-white"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="3"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path d="M5 13l4 4L19 7" />
                                    </svg>
                                  </div>
                                </div>
                                <span className="text-neutral-700 text-sm md:text-base leading-relaxed">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          onClick={() =>
                            handleWhatsAppClick(
                              `${FEATURED_SERVICE.title} - ${subcategory.title}`,
                            )
                          }
                          className="relative w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn"
                        >
                          <svg
                            className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                          </svg>
                          <span>Solicitar Presupuesto</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-gradient-to-br from-white to-neutral-50 rounded-2xl lg:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-100 hover:border-primary/30 border-t-4 border-t-primary group/service"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover/service:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 lg:p-10 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="relative w-20 h-20 lg:w-24 lg:h-24 mb-6">
                      <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl" />
                      <div className="relative w-full h-full bg-primary/10 rounded-2xl flex items-center justify-center shadow-lg group-hover/service:scale-110 transition-transform duration-500">
                        <ServiceIcon
                          icon={service.icon}
                          className="w-10 h-10 lg:w-12 lg:h-12 text-primary"
                        />
                      </div>
                    </div>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-primary mb-3 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6 text-base">
                      {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="relative flex-shrink-0 mt-1">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm" />
                            <div className="relative w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <svg
                                className="w-3 h-3 text-white"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                          </div>
                          <span className="text-neutral-700 text-sm md:text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(service.title)}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl group/btn"
                  >
                    <svg
                      className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>Solicitar Presupuesto</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
