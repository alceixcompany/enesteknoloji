'use client';

import { usePathname } from 'next/navigation';
import { FiMessageCircle } from 'react-icons/fi';

export default function FloatingContact() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <a
      href="https://wa.me/905312899969"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden iletişime geç"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-2xl bg-[var(--taxi-yellow)] px-4 py-3 font-black text-[var(--ink)] shadow-[0_16px_45px_rgba(0,0,0,.22)] transition hover:-translate-y-1 hover:bg-white sm:bottom-7 sm:right-7"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--ink)] text-[var(--taxi-yellow)]"><FiMessageCircle className="h-5 w-5" /></span>
      <span className="hidden text-xs sm:block">WhatsApp</span>
    </a>
  );
}
