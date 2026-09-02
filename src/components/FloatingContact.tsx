'use client';

import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingContact() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <a
      href="https://wa.me/905312899969"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp üzerinden iletişime geç"
      title="WhatsApp üzerinden iletişime geç"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_36px_rgba(37,211,102,.38)] transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <FaWhatsapp className="h-8 w-8 sm:h-9 sm:w-9" aria-hidden="true" />
    </a>
  );
}
