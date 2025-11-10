import Header from '@/components/Header';
import ServiceBanners from '@/components/ServiceBanners';
import Services from '@/components/Services';
import InstagramFeed from '@/components/InstagramFeed';
import About from '@/components/About';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

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