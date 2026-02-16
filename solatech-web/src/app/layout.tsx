import type { Metadata } from "next";
import { Tajawal, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  weight: ["400", "500", "700"],
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Solatech Group | Soluciones Tecnológicas Integrales en República Dominicana",
  description: "Empresa líder en soluciones tecnológicas: soporte técnico, seguridad informática, desarrollo de software, infraestructura de redes y asesoría de TI para empresas en Santo Domingo.",
  keywords: "soporte técnico, seguridad informática, desarrollo de software, redes, TI, tecnología, Santo Domingo, República Dominicana",
  authors: [{ name: "Solatech Group" }],
  openGraph: {
    title: "Solatech Group | Soluciones Tecnológicas Integrales",
    description: "Servicios especializados en soporte técnico, seguridad, desarrollo de software e infraestructura tecnológica para empresas.",
    type: "website",
    locale: "es_DO",
    siteName: "Solatech Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solatech Group | Soluciones Tecnológicas",
    description: "Transforma tu empresa con tecnología de vanguardia en Santo Domingo, RD.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href="https://solatechgp.com" />
      </head>
      <body className={`${tajawal.variable} ${poppins.variable} ${montserrat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
