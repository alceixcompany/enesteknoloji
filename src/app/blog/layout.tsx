import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Teknoloji Blogu',
  description: 'Telefon bataryası, ekran sorunları, şarj aksesuarları ve cihaz bakımı hakkında Enes Teknoloji’den pratik rehberler.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Teknoloji Blogu | Enes Teknoloji',
    description: 'Telefonunuzu daha uzun ve güvenli kullanmanıza yardımcı olacak anlaşılır teknoloji rehberleri.',
    url: '/blog',
    images: ['/blog/batarya-degisimi-rehberi.webp'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
