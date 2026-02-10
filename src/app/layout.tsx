import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LoadingProvider from "@/components/LoadingProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.universalservicios.com.ar"),
  title: "Universal Servicios",
  description:
    "Especialistas en instalación de redes de seguridad, estructuras de aluminio y acero, e instalación de aires acondicionados en Buenos Aires, Argentina.",
  keywords:
    "redes de seguridad, estructuras aluminio, estructuras acero, aires acondicionados, Buenos Aires, instalación",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.universalservicios.com.ar",
    siteName: "Universal Servicios",
    title: "Universal Servicios - Redes de Seguridad y Aires Acondicionados",
    description:
      "Especialistas en instalación de redes de seguridad, estructuras de aluminio y acero, e instalación de aires acondicionados en Buenos Aires, Argentina.",
    images: [
      {
        url: "/images/gallery/trabajo-2.jpg",
        width: 1200,
        height: 630,
        alt: "Universal Servicios - Redes de Seguridad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Universal Servicios - Redes de Seguridad y Aires Acondicionados",
    description:
      "Especialistas en instalación de redes de seguridad, estructuras de aluminio y acero, e instalación de aires acondicionados en Buenos Aires.",
    images: ["/images/gallery/trabajo-2.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        <LoadingProvider>{children}</LoadingProvider>
      </body>
    </html>
  );
}
