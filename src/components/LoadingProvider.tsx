'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Loading from './Loading';

interface LoadingContextType {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  setIsLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Esperar a que todo el contenido esté listo
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Pequeño delay para la transición suave
      setTimeout(() => setShowContent(true), 100);
    }, 2000); // 2 segundos mínimo de loading

    // También escuchar cuando la página esté completamente cargada
    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete') {
        setIsLoading(false);
        setTimeout(() => setShowContent(true), 100);
        clearTimeout(timer);
      } else {
        window.addEventListener('load', () => {
          setIsLoading(false);
          setTimeout(() => setShowContent(true), 100);
          clearTimeout(timer);
        });
      }
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <Loading />}
      <div
        className={`transition-opacity duration-500 ${
          showContent ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
