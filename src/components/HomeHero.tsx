'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiCheck, FiClock, FiMessageCircle, FiShield } from 'react-icons/fi';

const slides = [
  {
    src: '/brand/enes-teknoloji-hero.webp',
    alt: 'Enes Teknoloji telefon ve aksesuar mağazası',
    position: 'object-[62%_center]',
  },
  {
    src: '/brand/hero-about.webp',
    alt: 'Enes Teknoloji mağazası ve profesyonel hizmet alanı',
    position: 'object-center',
  },
  {
    src: '/brand/gallery-repair.webp',
    alt: 'Enes Teknoloji telefon onarım çalışma alanı',
    position: 'object-center',
  },
  {
    src: '/brand/gallery-accessories.webp',
    alt: 'Enes Teknoloji telefon aksesuarları',
    position: 'object-center',
  },
] as const;

const SLIDE_DURATION = 4000;
const SWIPE_THRESHOLD = 45;

export default function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const showSlide = useCallback((index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => window.clearTimeout(timeout);
  }, [activeSlide]);

  const handleTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    showSlide(activeSlide + (distance < 0 ? 1 : -1));
  };

  return (
    <section
      className="relative min-h-[700px] overflow-hidden bg-[var(--ink)] pt-[76px] text-white sm:min-h-[760px] lg:min-h-[820px]"
      aria-roledescription="carousel"
      aria-label="Enes Teknoloji tanıtım görselleri"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
    >
      <div key={slides[activeSlide].src} className="hero-slide-enter absolute inset-x-0 bottom-0 top-[76px]">
        <Image
          src={slides[activeSlide].src}
          alt={slides[activeSlide].alt}
          fill
          priority={activeSlide === 0}
          className={`object-cover ${slides[activeSlide].position}`}
          sizes="100vw"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] bg-[linear-gradient(90deg,rgba(13,14,15,.96)_0%,rgba(13,14,15,.82)_40%,rgba(13,14,15,.16)_72%,rgba(13,14,15,.06)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[76px] bg-[linear-gradient(180deg,transparent_55%,rgba(13,14,15,.72)_100%)]" />

      <div className="relative mx-auto flex min-h-[624px] max-w-[1440px] items-center px-5 pb-32 sm:min-h-[684px] sm:px-8 sm:pb-32 lg:min-h-[744px] lg:px-12 lg:pb-36">
        <div className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[.2em] backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--taxi-yellow)]" /> Türkiye&apos;nin 81 iline hizmet
          </div>
          <h1 className="max-w-3xl text-[48px] font-black leading-[.91] tracking-[-.065em] sm:text-[72px] lg:text-[92px]">
            Teknoloji<br />bizim <span className="outline-word-light">işimiz.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base font-medium leading-7 text-white/65 sm:mt-8 sm:text-lg">
            Telefonunuz için güvenilir teknik servis, doğru yönlendirme ve hızlı çözüm tek adreste.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Link href="/teknik-servis" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--taxi-yellow)] px-7 py-4 text-sm font-black text-[var(--ink)] shadow-[0_14px_0_rgba(0,0,0,.2)] transition hover:-translate-y-1">
              Teknik servisi incele <FiArrowRight className="transition group-hover:translate-x-1" />
            </Link>
            <a href="https://wa.me/905312899969" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20">
              <FiMessageCircle /> WhatsApp&apos;tan yaz
            </a>
          </div>
          <div className="mt-9 hidden flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-white/60 sm:flex lg:mt-12">
            <span className="flex items-center gap-2"><FiShield className="h-4 w-4" /> Garantili işlem</span>
            <span className="flex items-center gap-2"><FiClock className="h-4 w-4" /> 30 dakikada ekran ve batarya değişimi</span>
            <span className="flex items-center gap-2"><FiCheck className="h-4 w-4" /> Uzman destek</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[50px] z-40 flex justify-center sm:bottom-[52px]">
        <div className="flex items-center gap-0.5 rounded-full border border-white/20 bg-black/25 px-2 py-1 shadow-[0_8px_24px_rgba(0,0,0,.2)] backdrop-blur-lg">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => showSlide(index)}
              className="group flex h-8 w-7 touch-manipulation items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[var(--taxi-yellow)] focus-visible:ring-offset-1 focus-visible:ring-offset-black/40"
              aria-label={`${index + 1}. görseli göster`}
              aria-current={index === activeSlide ? 'true' : undefined}
            >
              <span className={`block h-1.5 rounded-full shadow-sm transition-all duration-300 ${index === activeSlide ? 'w-5 bg-[var(--taxi-yellow)]' : 'w-1.5 bg-white/60 group-hover:bg-white'}`} />
            </button>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 overflow-hidden bg-[var(--ink)] py-4 text-[var(--taxi-yellow)]">
        <div className="marquee-track flex min-w-max items-center gap-10 text-xs font-black uppercase tracking-[.22em]">
          {[1, 2].map((row) => (
            <div key={row} className="flex items-center gap-10">
              81 İle Hizmet <span>✦</span> 30 Dakikada Ekran Değişimi <span>✦</span> 30 Dakikada Batarya Değişimi <span>✦</span> Teknik Servis <span>✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
