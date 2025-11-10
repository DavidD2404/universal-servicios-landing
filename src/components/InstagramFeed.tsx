'use client';

import { useEffect } from 'react';

export default function InstagramFeed() {
  const INSTAGRAM_USERNAME = 'redprouniversal';
  const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}`;

  useEffect(() => {
    // Load Juicer embed script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.juicer.io/embed/redprouniversal/embed-code.js?per=6';
    script.async = true;
    script.defer = true;

    const feedContainer = document.getElementById('juicer-feed-container');
    if (feedContainer && !feedContainer.querySelector('script')) {
      feedContainer.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (feedContainer && feedContainer.contains(script)) {
        feedContainer.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 mb-4">
            <svg
              className="w-12 h-12 md:w-10 md:h-10 text-primary"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Síguenos en Instagram
            </h2>
          </div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-6">
            Mira nuestros proyectos más recientes y mantente al día con nuestros trabajos
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @{INSTAGRAM_USERNAME}
          </a>
        </div>

        {/* Juicer Instagram Feed */}
        <div id="juicer-feed-container" className="max-w-6xl mx-auto"></div>
      </div>

      <style jsx global>{`
        /* Ocultar elementos de Juicer que no queremos */
        .juicer-feed .j-meta,
        .juicer-feed .j-text,
        .juicer-feed .feed-item .j-poster,
        .juicer-feed .feed-item .j-date,
        .juicer-feed .feed-item h3,
        .juicer-feed .j-paginate,
        .referral {
          display: none !important;
        }

        /* Asegurar que todas las imágenes tengan el mismo tamaño */
        .juicer-feed li.feed-item {
          aspect-ratio: 1 / 1;
          overflow: hidden;
        }

        .juicer-feed li.feed-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Espaciado entre posts */
        .juicer-feed {
          gap: 1rem;
        }

        /* Hover effect */
        .juicer-feed li.feed-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 0.5rem;
          overflow: hidden;
        }

        .juicer-feed li.feed-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        /* Responsive: 1 columna en mobile */
        @media (max-width: 768px) {
          .juicer-feed {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }

        /* Desktop: 3 columnas */
        @media (min-width: 769px) {
          .juicer-feed {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
