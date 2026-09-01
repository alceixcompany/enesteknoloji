import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Galeri',
  description: 'Enes Teknoloji mağazası, telefon aksesuarları ve teknik servis çalışma alanından kareler.',
  alternates: { canonical: '/galeri' },
  openGraph: {
    title: 'Galeri | Enes Teknoloji',
    description: 'Enes Teknoloji mağazası ve teknik servis çalışma alanından kareler.',
    url: '/galeri',
    type: 'website',
  },
  robots: { index: false, follow: false },
};

export default function GaleriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
