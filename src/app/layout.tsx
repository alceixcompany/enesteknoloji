import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import ReduxProvider from "@/components/ReduxProvider";

const dmSans = DM_Sans({ 
  subsets: ["latin", "latin-ext"],
  variable: '--font-dm-sans',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enesteknoloji.com';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ElectronicsStore',
  '@id': `${siteUrl}/#business`,
  name: 'Enes Teknoloji',
  url: siteUrl,
  logo: `${siteUrl}/blackstar-logo.svg`,
  image: `${siteUrl}/brand/enes-teknoloji-hero.webp`,
  telephone: '+90 531 289 99 69',
  description: 'Cep telefonu teknik servisi, ekran ve batarya değişimi, yazılım desteği ve telefon aksesuarları.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+90 531 289 99 69',
    contactType: 'customer service',
    availableLanguage: 'Turkish',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enes Teknoloji | Telefon Teknik Servis ve Aksesuar",
    template: "%s | Enes Teknoloji",
  },
  description: "Cep telefonu ekran ve batarya değişimi, şarj, yazılım desteği ve telefon aksesuarları için hızlı, şeffaf ve güvenilir hizmet.",
  keywords: ["Enes Teknoloji", "telefon teknik servis", "cep telefonu tamiri", "ekran değişimi", "batarya değişimi", "şarj soketi tamiri", "telefon aksesuarları", "yazılım desteği"],
  authors: [{ name: "Enes Teknoloji" }],
  creator: "Enes Teknoloji",
  publisher: "Enes Teknoloji",
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: '/',
    siteName: 'Enes Teknoloji',
    title: 'Enes Teknoloji | Telefon Teknik Servis ve Aksesuar',
    description: 'Telefon teknik servisi, ekran ve batarya değişimi, yazılım desteği ve aksesuar çözümleri.',
    images: [{ url: '/brand/enes-teknoloji-hero.webp', width: 1200, height: 630, alt: 'Enes Teknoloji telefon mağazası ve teknik servis' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enes Teknoloji | Telefon Teknik Servis ve Aksesuar',
    description: 'Telefon teknik servisi, ekran ve batarya değişimi, yazılım desteği ve aksesuar çözümleri.',
    images: ['/brand/enes-teknoloji-hero.webp'],
  },
  robots: { index: true, follow: true },
  category: "technology",
  classification: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} /></head>
      <body className={`${dmSans.variable} font-sans`}>
        <ReduxProvider>
          <RootLayoutContent>{children}</RootLayoutContent>
        </ReduxProvider>
      </body>
    </html>
  );
}

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  // Admin sayfalarında Header, Footer ve FloatingContact gösterme
  // Bu kontrol client-side'da yapılacak
  return (
    <>
      <Header />
      {children}
      <Footer />
      <FloatingContact />
    </>
  );
}
