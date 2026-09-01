import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Enes Teknoloji mağazası, hizmet anlayışı ve telefon teknik servis yaklaşımı hakkında bilgi alın.',
  alternates: { canonical: '/hakkimizda' },
  openGraph: {
    title: 'Hakkımızda | Enes Teknoloji',
    description: 'Enes Teknoloji’nin şeffaf iletişim, temiz işçilik ve satış sonrası desteğe dayanan hizmet anlayışını tanıyın.',
    url: '/hakkimizda',
    images: ['/brand/hero-about.webp'],
  },
};

export default function HakkimizdaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
