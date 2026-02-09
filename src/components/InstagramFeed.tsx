'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  permalink: string;
  mediaUrl: string;
  thumbnailUrl?: string;
  mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  caption?: string;
  sizes?: {
    medium?: {
      mediaUrl: string;
    };
  };
}

export default function InstagramFeed() {
  const INSTAGRAM_USERNAME = 'redprouniversal';
  const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}`;

  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        // Usar nuestra API route con cache (1 hora) en lugar de llamar directamente a Behold
        const response = await fetch('/api/instagram');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching Instagram posts:', err);
        setError(true);
        setLoading(false);
      }
    };

    fetchInstagramPosts();
  }, []);

  // Cerrar modal con ESC y navegar con flechas
  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if (selectedPost === null) {
        if (e.key === 'Escape') return;
      } else {
        if (e.key === 'Escape') {
          setSelectedPost(null);
        } else if (e.key === 'ArrowRight') {
          if (selectedPost < posts.length - 1) {
            setSelectedPost(selectedPost + 1);
          }
        } else if (e.key === 'ArrowLeft') {
          if (selectedPost > 0) {
            setSelectedPost(selectedPost - 1);
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [selectedPost, posts.length]);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    if (selectedPost !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  const handleNext = () => {
    if (selectedPost !== null && selectedPost < posts.length - 1) {
      setSelectedPost(selectedPost + 1);
    }
  };

  const handlePrev = () => {
    if (selectedPost !== null && selectedPost > 0) {
      setSelectedPost(selectedPost - 1);
    }
  };

  // Swipe para mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

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
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
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
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
            </svg>
            @{INSTAGRAM_USERNAME}
          </a>
        </div>
      </div>

      {/* Instagram Feed Grid */}
      <div className="w-full px-4 md:px-6 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="aspect-[9/16] md:aspect-[4/5] bg-neutral-200 animate-pulse rounded-xl"
              />
            ))}
          </div>
        )}

        {error && (
          <div className="text-center text-neutral-600 py-12">
            <p>No se pudieron cargar las publicaciones de Instagram.</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-2 inline-block"
            >
              Ver en Instagram
            </a>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-8">
            {posts.map((post, index) => {
              const imageUrl = post.sizes?.medium?.mediaUrl || post.thumbnailUrl || post.mediaUrl;

              return (
                <button
                  key={post.id}
                  onClick={() => setSelectedPost(index)}
                  className="group relative aspect-[9/16] md:aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                >
                  <Image
                    src={imageUrl}
                    alt={post.caption?.slice(0, 100) || 'Instagram post'}
                    fill
                    loading="lazy"
                    className="object-contain transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Badge para videos/carruseles */}
                  {post.mediaType === 'VIDEO' && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                  {post.mediaType === 'CAROUSEL_ALBUM' && (
                    <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full p-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Eye/Play icon overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      {post.mediaType === 'VIDEO' ? (
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Modal Lightbox */}
      {selectedPost !== null && posts[selectedPost] && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPost(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Botón cerrar - optimizado para mobile */}
          <button
            onClick={() => setSelectedPost(null)}
            className="absolute top-3 right-3 md:top-4 md:right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 backdrop-blur-sm rounded-full p-2 md:p-2.5 touch-manipulation"
            aria-label="Cerrar"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Flechas de navegación - más grandes y táctiles para mobile */}
          {selectedPost > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-2 md:left-4 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 backdrop-blur-sm rounded-full p-2 md:p-2.5 touch-manipulation"
              aria-label="Anterior"
            >
              <svg className="w-7 h-7 md:w-9 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {selectedPost < posts.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-2 md:right-4 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 backdrop-blur-sm rounded-full p-2 md:p-2.5 touch-manipulation"
              aria-label="Siguiente"
            >
              <svg className="w-7 h-7 md:w-9 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Contenido del modal */}
          <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Imagen/Video fullscreen */}
            <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center gap-3 md:gap-4 px-2 md:px-0">
              {/* Indicador de posición */}
              <div className="text-white text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
                {selectedPost + 1} / {posts.length}
              </div>

              <div className="flex-1 w-full relative bg-black rounded-lg overflow-hidden flex items-center justify-center">
                {posts[selectedPost].mediaType === 'VIDEO' ? (
                  <video
                    src={posts[selectedPost].mediaUrl}
                    controls
                    className="max-w-full max-h-full object-contain"
                    autoPlay
                  />
                ) : (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={posts[selectedPost].sizes?.medium?.mediaUrl || posts[selectedPost].thumbnailUrl || posts[selectedPost].mediaUrl}
                      alt={posts[selectedPost].caption?.slice(0, 100) || 'Instagram post'}
                      fill
                      className="object-contain"
                      sizes="100vw"
                      priority
                    />
                  </div>
                )}
              </div>

              {/* Botón Ver en Instagram */}
              <a
                href={posts[selectedPost].permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full text-sm md:text-base font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 touch-manipulation"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                </svg>
                Ver en Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
