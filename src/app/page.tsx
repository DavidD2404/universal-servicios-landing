import Header from '@/components/Header';
import ServiceBanners from '@/components/ServiceBanners';
import Services from '@/components/Services';
import InstagramFeed from '@/components/InstagramFeed';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

// Configuración para Static Generation con revalidación
// La página se regenerará cada 1 hora (sincronizado con el cache de Instagram)
export const revalidate = 3600;

// Forzar generación estática
export const dynamic = 'force-static';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceBanners />
      <Services />
      <InstagramFeed />
      <About />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}