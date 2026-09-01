'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiMenu, FiPhone, FiX } from 'react-icons/fi';
import BrandMark from './BrandMark';

const links = [
  { href: '/', label: 'Ana Sayfa' },
  { href: '/teknik-servis', label: 'Teknik Servis' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/blog', label: 'Blog' },
  { href: '/iletisim', label: 'İletişim' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAdmin = pathname?.startsWith('/admin');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  if (isAdmin) return null;

  const isActive = (href: string) => href === '/' ? pathname === href : pathname?.startsWith(href);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-[#f7f2e8]/95 backdrop-blur-xl transition-all ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="text-[var(--ink)]"><BrandMark dark /></Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active = isActive(link.href);
            return <Link key={link.label} href={link.href} aria-current={active ? 'page' : undefined} className={`relative py-2 text-[13px] font-bold transition after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:rounded-full after:bg-[var(--taxi-yellow)] after:transition-all ${active ? 'text-[var(--ink)] after:w-6' : 'text-[var(--ink)]/60 after:w-0 hover:text-black hover:after:w-3'}`}>{link.label}</Link>;
          })}
        </nav>
        <a href="tel:+905312899969" className="hidden items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-black sm:flex"><FiPhone /> Bizi Ara</a>
        <button onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--ink)] text-white lg:hidden" aria-label="Menüyü aç">
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/10 bg-[#f7f2e8] px-5 py-5 shadow-xl lg:hidden">
          {links.map((link) => {
            const active = isActive(link.href);
            return <Link key={link.label} href={link.href} aria-current={active ? 'page' : undefined} onClick={() => setOpen(false)} className={`flex items-center justify-between border-b border-black/10 py-4 text-base font-bold text-[var(--ink)] ${active ? 'before:mr-3 before:h-1 before:w-5 before:rounded-full before:bg-[var(--taxi-yellow)]' : ''}`}>{link.label}</Link>;
          })}
          <a href="tel:+905312899969" className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[var(--taxi-yellow)] px-5 py-4 font-bold text-[var(--ink)]"><FiPhone /> Bizi Ara</a>
        </nav>
      )}
    </header>
  );
}
