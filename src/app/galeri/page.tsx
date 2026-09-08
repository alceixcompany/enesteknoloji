'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FiCamera, FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';
import StorePageHero, { PageCta } from '@/components/StorePageHero';
import { storeGallery } from '@/data/storeGallery';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem = selectedIndex === null ? null : storeGallery[selectedIndex];

  const move = (direction: -1 | 1) => {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return (current + direction + storeGallery.length) % storeGallery.length;
    });
  };

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedIndex(null);
      if (event.key === 'ArrowLeft') move(-1);
      if (event.key === 'ArrowRight') move(1);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedIndex]);

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">
      <StorePageHero
        index="05"
        eyebrow="Mağazadan Kareler"
        title="Ürünleri ve mağazamızı yakından görün."
        description="Telefon aksesuarlarından servis parçalarına, Enes Teknoloji mağazasının gerçek ve güncel fotoğrafları."
        image="/images/edited/magaza-genel-hero.webp"
        imageAlt="Enes Teknoloji mağazasının genel görünümü"
      />

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div>
              <p className="section-tag"><FiCamera /> Galeri</p>
              <h2 className="mt-5 text-3xl font-black tracking-[-.05em] sm:text-5xl">Mağazanın içinden,<br />olduğu gibi.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/45 lg:justify-self-end">
              Mağaza düzenimizi, ürün çeşitlerimizi ve teknik servis için kullandığımız parça alanlarını inceleyin.
            </p>
          </div>

          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {storeGallery.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[24px] bg-black text-left"
                aria-label={`${item.title} görselini büyüt`}
              >
                <div className={item.orientation === 'landscape' ? 'aspect-[4/3]' : 'aspect-[3/4]'}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.035]"
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <small className="block text-[9px] font-black uppercase tracking-[.18em] text-[var(--taxi-yellow)]">{item.category}</small>
                  <strong className="mt-1 block text-base">{item.title}</strong>
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Aradığınız ürünü birlikte bulalım." text="Telefon modelinizi ve ihtiyacınızı iletin; uygun ürün veya servis seçeneği için yardımcı olalım." />

      {selectedItem && selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={selectedItem.title} onClick={() => setSelectedIndex(null)}>
          <button type="button" onClick={() => setSelectedIndex(null)} className="absolute right-5 top-5 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20" aria-label="Galeriyi kapat"><FiX className="h-6 w-6" /></button>
          <button type="button" onClick={(event) => { event.stopPropagation(); move(-1); }} className="absolute left-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6" aria-label="Önceki görsel"><FiChevronLeft className="h-6 w-6" /></button>
          <figure className="relative h-[82vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedItem.src} alt={selectedItem.alt} fill className="object-contain" sizes="95vw" priority />
            <figcaption className="absolute inset-x-0 bottom-0 mx-auto w-fit rounded-full bg-black/65 px-5 py-3 text-center text-sm font-bold text-white backdrop-blur">{selectedItem.title} <span className="ml-2 text-white/45">{selectedIndex + 1}/{storeGallery.length}</span></figcaption>
          </figure>
          <button type="button" onClick={(event) => { event.stopPropagation(); move(1); }} className="absolute right-3 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6" aria-label="Sonraki görsel"><FiChevronRight className="h-6 w-6" /></button>
        </div>
      )}
    </main>
  );
}
