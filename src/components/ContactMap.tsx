import { FiArrowUpRight } from 'react-icons/fi';

export default function ContactMap() {
  return (
    <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-white shadow-[0_30px_90px_rgba(20,20,20,.1)]">
        <div className="flex flex-col gap-4 p-7 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div><p className="section-tag">Konum</p><h2 className="mt-4 text-3xl font-black tracking-[-.05em] sm:text-4xl">Mağazamızı ziyaret edin.</h2><p className="mt-3 text-sm leading-7 text-black/45">Merkez Mahallesi Soğanlı Caddesi No:80/C, Güngören / İstanbul</p></div>
          <a href="https://www.google.com/maps/search/?api=1&query=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5">Google Maps&apos;te aç <FiArrowUpRight/></a>
        </div>
        <iframe title="Enes Teknoloji mağaza konumu" src="https://www.google.com/maps?q=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul&output=embed" className="h-[360px] w-full border-0 sm:h-[460px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    </section>
  );
}
