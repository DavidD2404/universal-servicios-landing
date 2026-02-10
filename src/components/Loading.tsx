"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] bg-primary flex flex-col items-center justify-center">
      <div className="text-center">
        <div className="mb-6 animate-pulse">
          <span className="block font-heading font-extrabold text-white text-4xl md:text-5xl tracking-tight">
            UNIVERSAL
          </span>
          <span className="block font-heading font-medium text-yellow-400 text-2xl md:text-3xl tracking-widest mt-2">
            SERVICIOS
          </span>
        </div>
        <div className="flex justify-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-yellow-400 rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
}
