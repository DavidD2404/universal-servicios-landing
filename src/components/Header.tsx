'use client';

import { useState } from 'react';
import { CONTACT_INFO, WHATSAPP_MESSAGE } from '@/utils/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${WHATSAPP_MESSAGE}`;
    window.open(url, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-40">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center leading-none">
            <span className="font-heading font-extrabold text-primary text-xl md:text-2xl tracking-tight">
              UNIVERSAL
            </span>
            <span className="font-heading font-medium text-secondary text-base md:text-lg tracking-widest">
              SERVICIOS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('servicios')}
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="text-neutral-700 hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-2 rounded-lg transition-colors font-medium"
            >
              Contactar
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('servicios')}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className="block w-full text-left px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={handleWhatsAppClick}
              className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white px-4 py-2 rounded-lg transition-colors font-medium"
            >
              Contactar
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}