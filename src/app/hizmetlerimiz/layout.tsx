import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hizmetlerimiz',
  description: 'Enes Teknoloji telefon teknik servis, ekran ve batarya değişimi, yazılım desteği ve aksesuar hizmetleri.',
  alternates: { canonical: '/hizmetlerimiz' },
  openGraph: {
    title: 'Hizmetlerimiz | Enes Teknoloji',
    description: 'Telefon teknik servis, onarım ve aksesuar çözümleri.',
    url: '/hizmetlerimiz',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

export default function HizmetlerimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
