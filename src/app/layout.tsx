import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { es } from "@/lib/es";
import { BASE_PATH, SITE_URL } from "@/lib/seo";

const manrope = Manrope({ subsets: ["latin", "latin-ext"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: es.home.seoTitle, template: "%s | 1XSPORTS" },
  description: es.home.seoDescription,
  openGraph: { locale: "es_ES", type: "website", siteName: "1XSPORTS" },
  icons: { icon: `${BASE_PATH}/brand/mark.png` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={manrope.variable}>
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-card focus:bg-accent focus:px-4 focus:py-2 focus:text-bg">Saltar al contenido</a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
