import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İletişim',
  description: 'Enes Teknoloji teknik servis ve ürün desteği için 0531 289 99 69 numaralı telefondan arayın veya WhatsApp üzerinden ulaşın.',
  alternates: { canonical: '/iletisim' },
  openGraph: {
    title: 'İletişim | Enes Teknoloji',
    description: 'Teknik servis, cihaz ve aksesuar sorularınız için Enes Teknoloji’ye kolayca ulaşın.',
    url: '/iletisim',
    images: ['/brand/hero-contact.webp'],
  },
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
