"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <footer className="relative bg-gradient-to-br from-primary via-[#0A2647] to-primary-dark text-white py-14 md:py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      {/* Wave decoration */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16 mb-10 md:mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex flex-col leading-none mb-6 items-center md:items-start">
              <span className="font-heading font-extrabold text-white text-2xl md:text-3xl tracking-tight">
                UNIVERSAL
              </span>
              <span className="font-heading font-medium text-accent text-base md:text-lg tracking-widest">
                SERVICIOS
              </span>
            </div>
            <p className="text-white/80 mb-8 text-base md:text-lg leading-relaxed">
              Protegiendo lo que más te importa desde hace más de 7 años.
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/redprouniversal/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Síguenos en Instagram"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-accent transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group hover:scale-110 border border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                aria-label="Contáctanos por WhatsApp"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-accent transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="font-heading font-bold text-xl md:text-2xl mb-6 text-accent">
              Contacto
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-3 justify-center md:justify-start group hover:text-white transition-colors">
                <div className="w-10 h-10 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-all">
                  <svg
                    className="w-5 h-5 text-secondary flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-medium">
                  {CONTACT_INFO.phone}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group hover:text-white transition-colors">
                <div className="w-10 h-10 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-all flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-secondary flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg break-words font-medium">
                  {CONTACT_INFO.email}
                </span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start group hover:text-white transition-colors">
                <div className="w-10 h-10 bg-secondary/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-secondary/30 transition-all flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-secondary flex-shrink-0"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-medium">
                  {CONTACT_INFO.location}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h3 className="font-heading font-bold text-xl md:text-2xl mb-6 text-accent">
              Servicios
            </h3>
            <ul className="space-y-3 text-white/80 text-base md:text-lg">
              <li className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors group">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:scale-150 transition-transform" />
                <span className="font-medium">Redes de Seguridad</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors group">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:scale-150 transition-transform" />
                <span className="font-medium">Estructuras de Acero</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start hover:text-white transition-colors group">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full group-hover:scale-150 transition-transform" />
                <span className="font-medium">Aires Acondicionados</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8" />
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <p className="text-white/60 text-sm md:text-base">
              © {currentYear} Universal Servicios. Todos los derechos
              reservados.
            </p>
            <span className="hidden sm:inline text-white/30">|</span>
            <button
              onClick={() => setShowPrivacy(true)}
              className="text-white/60 hover:text-white text-sm md:text-base transition-colors underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary rounded"
            >
              Política de Privacidad
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showPrivacy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowPrivacy(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl max-w-lg w-full p-6 md:p-8 shadow-2xl max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-primary">
                  Política de Privacidad
                </h2>
                <button
                  onClick={() => setShowPrivacy(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Cerrar"
                >
                  <svg className="w-5 h-5 text-neutral-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed">
                <p>
                  <strong>Universal Servicios</strong> no recopila, almacena ni procesa datos personales a través de este sitio web.
                </p>
                <p>
                  Este sitio no utiliza cookies de seguimiento, formularios de registro ni bases de datos de usuarios.
                </p>
                <p>
                  Los botones de contacto por WhatsApp redirigen directamente a la aplicación WhatsApp, donde la comunicación se rige por las políticas de privacidad de Meta/WhatsApp.
                </p>
                <p>
                  El feed de Instagram mostrado en este sitio se obtiene a través de la API pública de Instagram y no implica recopilación de datos de los visitantes.
                </p>
                <p>
                  Para consultas sobre privacidad, podés contactarnos a <a href={`mailto:${CONTACT_INFO.email}`} className="text-primary hover:underline font-medium">{CONTACT_INFO.email}</a>.
                </p>
                <p className="text-neutral-400 text-xs mt-6">
                  Última actualización: {new Date().toLocaleDateString("es-AR", { month: "long", year: "numeric" })}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
