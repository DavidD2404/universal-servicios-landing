'use client';

import Image from 'next/image';
import { useState } from 'react';

const GALLERY_IMAGES = [
  { id: 1, src: '/images/gallery/trabajo-1.jpg', alt: 'Instalación de red de seguridad en balcón', category: 'Redes de Seguridad' },
  { id: 2, src: '/images/gallery/trabajo-2.jpg', alt: 'Red de protección instalada', category: 'Redes de Seguridad' },
  { id: 3, src: '/images/gallery/trabajo-3.jpg', alt: 'Estructura de aluminio', category: 'Estructuras' },
  { id: 4, src: '/images/gallery/trabajo-4.jpg', alt: 'Instalación de aire acondicionado', category: 'Aires Acondicionados' },
  { id: 5, src: '/images/gallery/trabajo-5.jpg', alt: 'Cerramiento de balcón', category: 'Estructuras' },
  { id: 6, src: '/images/gallery/trabajo-6.jpg', alt: 'Red de seguridad terminada', category: 'Redes de Seguridad' },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Nuestros Trabajos
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Más de 500 instalaciones exitosas en Buenos Aires
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative h-64 md:h-80 bg-neutral-200">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="font-medium text-sm mb-1">{image.category}</p>
                    <p className="text-xs opacity-90">{image.alt}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-neutral-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={GALLERY_IMAGES.find(img => img.id === selectedImage)?.src || ''}
                alt={GALLERY_IMAGES.find(img => img.id === selectedImage)?.alt || ''}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}