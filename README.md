# Universal Servicios Landing Page

Landing page profesional para Universal Servicios, especializada en servicios de seguridad y climatización.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utilitario
- **React** - Biblioteca de interfaz de usuario

## 📋 Características

- ✅ Diseño responsivo y moderno
- ✅ Componentes reutilizables
- ✅ Optimización SEO
- ✅ Galería de trabajos realizados
- ✅ Botón de contacto WhatsApp
- ✅ Secciones: Hero, Servicios, Acerca de, Galería, Footer

## 🛠️ Instalación y Desarrollo

### Prerrequisitos
- Node.js 18+ instalado
- npm o yarn como gestor de paquetes

### Clonar el repositorio
```bash
git clone https://github.com/DavidD2404/universal-servicios-landing.git
cd universal-servicios-landing
```

### Instalar dependencias
```bash
npm install
# o
yarn install
```

### Ejecutar en desarrollo
```bash
npm run dev
# o
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

## 📁 Estructura del Proyecto

```
universal-servicios-landing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── WhatsAppButton.tsx
│   ├── types/
│   │   └── index.ts
│   └── utils/
│       └── constants.ts
├── public/
│   ├── images/
│   └── favicon files
└── config files
```

## 🎨 Componentes

- **Header**: Navegación principal
- **Hero**: Sección de bienvenida con llamada a la acción
- **Services**: Listado de servicios ofrecidos
- **About**: Información sobre la empresa
- **Gallery**: Galería de trabajos realizados
- **Footer**: Información de contacto y enlaces
- **WhatsAppButton**: Botón flotante de contacto

## 📱 Contacto

Para modificar la información de contacto, edita el archivo `src/utils/constants.ts`.

## 🚀 Despliegue

### Build para producción
```bash
npm run build
# o
yarn build
```

### Iniciar servidor de producción
```bash
npm start
# o
yarn start
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Desarrollado por

David da Silva - [@DavidD2404](https://github.com/DavidD2404)