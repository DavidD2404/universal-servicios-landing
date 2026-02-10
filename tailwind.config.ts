import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
      colors: {
        primary: {
          DEFAULT: '#09407D', // Azul oscuro oficial
          light: '#3B82F6',
          dark: '#072D5A',
          darker: '#0A2647', // Azul oscuro para fondos de banners/carrusel
          medium: '#0A2F5F', // Azul medio para gradientes
          slate: '#1e3a5f', // Azul slate para fondos de slide 2
        },
        secondary: {
          DEFAULT: '#28ADE1', // Azul claro oficial
          light: '#5BC0E8',
          dark: '#1A8DB8',
        },
        accent: {
          DEFAULT: '#FEEA18', // Amarillo oficial
          light: '#FFF176',
          dark: '#F9DC00',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;