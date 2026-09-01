'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiInstagram, FiMessageCircle, FiPhone } from 'react-icons/fi';
import BrandMark from './BrandMark';

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="bg-[var(--ink)] px-5 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-9 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.75fr_.9fr] lg:gap-10 lg:py-12">
          <div>
            <div className="text-white"><BrandMark /></div>
            <p className="mt-4 max-w-xs text-xs leading-5 text-white/45">Türkiye&apos;nin 81 ilinde telefon, aksesuar ve teknik servis ihtiyaçlarınız için hızlı, dürüst ve güvenilir çözüm noktası.</p>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--taxi-yellow)]">Menü</h3>
            <div className="mt-4 grid gap-2 text-xs text-white/55"><Link className="transition hover:text-white" href="/">Ana Sayfa</Link><Link className="transition hover:text-white" href="/teknik-servis">Teknik Servis</Link><Link className="transition hover:text-white" href="/hakkimizda">Hakkımızda</Link><Link className="transition hover:text-white" href="/blog">Blog</Link><Link className="transition hover:text-white" href="/iletisim">İletişim</Link></div>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--taxi-yellow)]">Hizmetler</h3>
            <div className="mt-4 grid gap-2 text-xs text-white/55"><span>30 Dakikada Ekran Değişimi</span><span>30 Dakikada Batarya Değişimi</span><span>81 İle Hizmet</span></div>
          </div>
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--taxi-yellow)]">İletişim</h3>
            <a href="tel:+905312899969" className="mt-4 block text-base font-black transition hover:text-[var(--taxi-yellow)]">0531 289 99 69</a>
            <div className="mt-4 flex gap-2">
              <a href="tel:+905312899969" aria-label="Telefon" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-[var(--taxi-yellow)] hover:text-black"><FiPhone /></a>
              <a href="https://wa.me/905312899969" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-[var(--taxi-yellow)] hover:text-black"><FiMessageCircle /></a>
              <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sm transition hover:bg-[var(--taxi-yellow)] hover:text-black"><FiInstagram /></a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-4 text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Enes Teknoloji. Tüm hakları saklıdır.</p>
          <p>Create by Alceix Yazsin</p>
        </div>
      </div>
    </footer>
  );
}
