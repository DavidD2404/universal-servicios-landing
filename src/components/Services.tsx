'use client';

import { SERVICES, FEATURED_SERVICE } from '@/utils/constants';
import { CONTACT_INFO } from '@/utils/constants';

export default function Services() {
  const handleWhatsAppClick = (serviceName: string) => {
    const customMessage = encodeURIComponent(
      `¡Hola! Me interesa el servicio de ${serviceName}. ¿Podrían brindarme más información?`
    );
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${customMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-primary mb-4 leading-tight">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Soluciones profesionales de seguridad y climatización con más de 10 años de experiencia
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-accent mb-2">+500</div>
              <div className="text-neutral-700 font-medium">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-accent mb-2">+10</div>
              <div className="text-neutral-700 font-medium">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl font-extrabold text-accent mb-2">100%</div>
              <div className="text-neutral-700 font-medium">Garantía de calidad</div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="max-w-7xl mx-auto">
          {/* Featured Service - Redes de Seguridad (Full Width) */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 md:p-10 shadow-lg border-2 border-accent/30">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-5xl md:text-6xl">{FEATURED_SERVICE.icon}</span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-primary">
                  {FEATURED_SERVICE.title}
                </h3>
              </div>

              {/* Subcategories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FEATURED_SERVICE.subcategories.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    className="bg-white rounded-2xl p-6 md:p-8 text-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-neutral-200"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-4xl">{subcategory.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-heading text-2xl font-bold text-primary mb-1">
                          {subcategory.title}
                        </h4>
                        <p className="text-sm text-neutral-600">
                          {subcategory.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="space-y-3 mb-8">
                      {subcategory.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 h-3 text-accent"
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
                          <span className="text-neutral-700 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleWhatsAppClick(`${FEATURED_SERVICE.title} - ${subcategory.title}`)}
                      className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Solicitar Presupuesto
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Other Services - Same Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-100 hover:border-accent/20 group hover:-translate-y-1"
              >
                <div className="p-8">
                  {/* Icon and Title */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <span className="text-4xl">{service.icon}</span>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-accent"
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
                        <span className="text-neutral-700 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(service.title)}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Solicitar Presupuesto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
