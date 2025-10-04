export default function About() {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-neutral-600">
              Compromiso, experiencia y calidad en cada proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Seguridad Garantizada
              </h3>
              <p className="text-neutral-600">
                Instalaciones certificadas con materiales de primera calidad y garantía en todos nuestros trabajos.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Atención Inmediata
              </h3>
              <p className="text-neutral-600">
                Respuesta rápida a consultas y presupuestos sin cargo. Trabajamos con tu agenda.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Equipo Profesional
              </h3>
              <p className="text-neutral-600">
                Personal capacitado y con años de experiencia en el rubro de seguridad y climatización.
              </p>
            </div>

            <div className="bg-neutral-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-secondary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-primary mb-2">
                Mejor Relación Precio-Calidad
              </h3>
              <p className="text-neutral-600">
                Precios competitivos sin comprometer la calidad de materiales e instalación.
              </p>
            </div>
          </div>

          <div className="bg-primary text-white p-8 rounded-xl">
            <h3 className="font-heading text-2xl font-bold mb-4 text-center">
              Nuestra Misión
            </h3>
            <p className="text-lg text-center leading-relaxed">
              En <span className="font-bold">Universal Servicios</span>, nos especializamos en brindar 
              tranquilidad y bienestar a nuestros clientes a través de soluciones de seguridad de alta 
              calidad. Nuestro compromiso es proteger lo que más te importa: tu familia, mascotas y 
              espacios, ofreciendo instalaciones profesionales respaldadas por años de experiencia 
              en Buenos Aires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}