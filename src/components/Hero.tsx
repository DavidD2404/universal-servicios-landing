'use client';

import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/utils/constants';

export default function Hero() {
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${WHATSAPP_MESSAGE}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Protegé lo que más te importa con{' '}
            <span className="text-accent-light">soluciones de seguridad</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-100 mb-8 max-w-2xl mx-auto">
            Especialistas en redes de seguridad, estructuras de aluminio y acero, 
            e instalación de aires acondicionados en Buenos Aires.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-3"
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Solicitar cotización
            </button>
            
            <button
              onClick={() => {
                const element = document.getElementById('servicios');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 border border-white/30"
            >
              Ver servicios
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-1">+500</div>
              <div className="text-sm md:text-base text-neutral-200">Clientes satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-1">+10</div>
              <div className="text-sm md:text-base text-neutral-200">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent-light mb-1">100%</div>
              <div className="text-sm md:text-base text-neutral-200">Garantía de calidad</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}