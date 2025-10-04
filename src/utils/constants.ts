import { ContactInfo, Service } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+54 9 11 XXXX-XXXX',
  whatsappNumber: '5491112345678',
  email: 'contacto@universalservicios.com.ar',
  location: 'Buenos Aires, Argentina',
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! Me interesa conocer más sobre los servicios de Universal Servicios.'
);

export const SERVICES: Service[] = [
  {
    id: 'redes-seguridad',
    title: 'Redes de Seguridad',
    description: 'Instalación profesional de redes de protección para balcones, ventanas y terrazas.',
    icon: '🛡️',
    features: [
      'Protección para niños y mascotas',
      'Materiales de alta resistencia',
      'Instalación sin perforaciones',
      'Garantía de calidad',
    ],
  },
  {
    id: 'estructuras-aluminio',
    title: 'Estructuras de Aluminio',
    description: 'Diseño e instalación de estructuras de aluminio personalizadas y duraderas.',
    icon: '🏗️',
    features: [
      'Cerramientos de balcones',
      'Techos y pérgolas',
      'Diseños a medida',
      'Acabados premium',
    ],
  },
  {
    id: 'estructuras-acero',
    title: 'Estructuras de Acero',
    description: 'Soluciones robustas en acero para proyectos residenciales y comerciales.',
    icon: '⚙️',
    features: [
      'Alta resistencia',
      'Protección anticorrosiva',
      'Instalación profesional',
      'Mantenimiento mínimo',
    ],
  },
  {
    id: 'aires-acondicionados',
    title: 'Aires Acondicionados',
    description: 'Instalación y mantenimiento de sistemas de climatización.',
    icon: '❄️',
    features: [
      'Instalación certificada',
      'Equipos de primeras marcas',
      'Mantenimiento preventivo',
      'Asesoramiento técnico',
    ],
  },
];