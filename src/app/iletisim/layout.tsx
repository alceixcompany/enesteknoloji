import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Enes Teknoloji teknik servis ve ürün desteği için 0536 527 81 75 numaralı telefondan arayın veya Güngören mağazamızı ziyaret edin.',
  alternates: { canonical: '/iletisim' },
  openGraph: {
    title: 'İletişim | Enes Teknoloji',
    description: 'Teknik servis, cihaz ve aksesuar sorularınız için Enes Teknoloji’ye kolayca ulaşın.',
    url: '/iletisim',
    images: ['/images/edited/magaza-giris-02.webp'],
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
