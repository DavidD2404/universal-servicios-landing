"use client";
import { useEffect, useState } from "react";
export default function Loading() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center">
      <div className="mb-8 text-center animate-pulse">
        <span className="block font-heading font-extrabold text-white text-4xl md:text-5xl tracking-tight">
          UNIVERSAL
        </span>
        <span className="block font-heading font-medium text-yellow-400 text-2xl md:text-3xl tracking-widest mt-2">
          SERVICIOS
        </span>
      </div>
      <div className="w-64 md:w-80 h-2 bg-white/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-yellow-400 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-6 text-white/80 text-sm md:text-base">
        Cargando {progress}%
      </p>
    </div>
  );
}
