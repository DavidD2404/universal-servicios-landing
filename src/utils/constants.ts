import { ContactInfo, Service } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  phone: '+54 9 11 2659-8074',
  whatsappNumber: '5491126598074',
  email: 'contacto@universalservicios.com.ar',
  location: 'Buenos Aires, Argentina',
};

export const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! Me interesa conocer más sobre los servicios de Universal Servicios.'
);

export const FEATURED_SERVICE = {
  id: 'redes-seguridad',
  title: 'Redes de Seguridad',
  subtitle: 'Nuestro servicio principal con más de 10 años de experiencia',
  description: 'Protección profesional adaptada a tus necesidades',
  icon: '🛡️',
  subcategories: [
    {
      id: 'domestico',
      title: 'Uso Doméstico',
      description: 'Protección para tu hogar y familia',
      icon: '🏠',
      features: [
        'Ventanas y balcones',
        'Terrazas y patios',
        'Protección para niños y mascotas',
        'Instalación invisible',
        'Materiales anti-UV',
        'Garantía extendida',
      ],
    },
    {
      id: 'comercial',
      title: 'Uso Comercial',
      description: 'Soluciones para proyectos de gran envergadura',
      icon: '🏢',
      features: [
        'Canchas de fútbol',
        'Pozos de aire y luz',
        'Edificios corporativos',
        'Instalaciones deportivas',
        'Proyectos industriales',
        'Certificación profesional',
      ],
    },
  ],
};

export const SERVICES: Service[] = [
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