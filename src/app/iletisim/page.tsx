'use client';

import { FormEvent } from 'react';
import Image from 'next/image';
import { FiArrowUpRight, FiClock, FiMapPin, FiMessageCircle, FiPhone, FiSend } from 'react-icons/fi';
import StorePageHero from '@/components/StorePageHero';

const contactItems = [
  { icon: FiPhone, label: 'Telefon', value: '0536 527 81 75', note: 'Doğrudan bizi arayın', href: 'tel:+905365278175' },
  { icon: FiMessageCircle, label: 'WhatsApp', value: 'Hızlı destek hattı', note: 'Mesajınızı hemen iletin', href: 'https://wa.me/905365278175' },
  { icon: FiMapPin, label: 'Mağaza', value: 'Merkez Mah. Soğanlı Cd. No:80/C', note: 'Güngören / İstanbul', href: 'https://www.google.com/maps/search/?api=1&query=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul' },
];

export default function ContactPage() {
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      'Merhaba Enes Teknoloji,',
      `Ad: ${data.get('name')}`,
      `Telefon: ${data.get('phone')}`,
      `Konu: ${data.get('subject')}`,
      `Mesaj: ${data.get('message')}`,
    ].join('\n');
    window.open(`https://wa.me/905365278175?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return <main className="bg-[var(--paper)] text-[var(--ink)]">
    <StorePageHero index="03" eyebrow="İletişim" title="Bize ulaşmak çok kolay." description="Teknik servis, cihazınızla ilgili bir soru veya mağaza bilgisi için size en uygun kanaldan bizimle iletişime geçin." image="/images/edited/magaza-giris-02.webp" imageAlt="Enes Teknoloji mağaza karşılama alanı" />

    <section className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20"><div className="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-3">
      {contactItems.map(({icon:Icon,label,value,note,href})=><a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="group flex items-center gap-5 rounded-[26px] border border-black/10 bg-white p-6 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_rgba(20,20,20,.09)]"><span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--taxi-yellow)]"><Icon className="h-5 w-5"/></span><div className="min-w-0"><small className="text-[10px] font-black uppercase tracking-[.18em] text-black/35">{label}</small><b className="mt-1 block text-lg">{value}</b><span className="mt-1 block text-xs text-black/40">{note}</span></div><FiArrowUpRight className="ml-auto shrink-0 text-black/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"/></a>)}
    </div></section>

    <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"><div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[36px] bg-white shadow-[0_30px_90px_rgba(20,20,20,.1)] lg:grid-cols-[.86fr_1.14fr]">
      <div className="relative min-h-[500px] overflow-hidden bg-[var(--ink)] p-8 text-white sm:p-10 lg:min-h-[720px] lg:p-12">
        <Image src="/images/edited/magaza-giris-dikey.webp" alt="Enes Teknoloji mağaza iletişim" fill className="object-cover opacity-25" sizes="(max-width:1024px) 100vw, 43vw"/>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(23,24,25,.58),rgba(23,24,25,.97))]"/>
        <div className="relative flex h-full flex-col"><p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--taxi-yellow)]">Mağaza bilgileri</p><h2 className="mt-5 max-w-md text-3xl font-black leading-tight tracking-[-.05em]">Sorunuz varsa, doğru kişiye ulaştınız.</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/50">Cihazınızı getirmeden önce arayarak servis yoğunluğu ve tahmini değerlendirme süresi hakkında bilgi alabilirsiniz.</p>
          <div className="mt-auto space-y-4 pt-16"><div className="flex gap-4 border-t border-white/12 pt-5"><FiClock className="mt-1 text-[var(--taxi-yellow)]"/><div><b className="block text-sm">Çalışma saatleri</b><span className="mt-1 block text-xs text-white/40">Her gün 11:00–22:00</span></div></div><div className="flex gap-4 border-t border-white/12 pt-5"><FiMapPin className="mt-1 text-[var(--taxi-yellow)]"/><div><b className="block text-sm">Mağaza konumu</b><a href="https://www.google.com/maps/search/?api=1&query=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul" target="_blank" rel="noopener noreferrer" className="mt-1 block max-w-sm text-xs leading-5 text-white/50 transition hover:text-white">Merkez Mahallesi Soğanlı Caddesi No:80/C, Güngören / İstanbul</a></div></div></div>
        </div>
      </div>

      <form onSubmit={submit} className="p-7 sm:p-10 lg:p-12">
        <p className="section-tag">Hızlı talep</p><h2 className="mt-5 text-3xl font-black tracking-[-.05em] sm:text-4xl">Nasıl yardımcı olabiliriz?</h2><p className="mt-4 max-w-xl text-sm leading-7 text-black/45">Bilgileri doldurduğunuzda mesajınız hazırlanır ve WhatsApp üzerinden doğrudan bize iletilir.</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2"><label className="block"><span className="contact-label">Adınız</span><input name="name" required placeholder="Adınız ve soyadınız" className="contact-input"/></label><label className="block"><span className="contact-label">Telefon</span><input name="phone" required type="tel" placeholder="05xx xxx xx xx" className="contact-input"/></label></div>
        <label className="mt-5 block"><span className="contact-label">İlgilendiğiniz konu</span><select name="subject" required defaultValue="" className="contact-input appearance-none"><option value="" disabled>Konu seçiniz</option><option>Teknik servis</option><option>Ekran değişimi</option><option>Batarya ve şarj</option><option>Yazılım desteği</option><option>Diğer</option></select></label>
        <label className="mt-5 block"><span className="contact-label">Mesajınız</span><textarea name="message" required placeholder="Cihaz modeli ve yaşadığınız sorunu kısaca yazın" className="contact-input min-h-40 resize-none"/></label>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xs text-xs leading-5 text-black/35">Gönder butonu sizi güvenli WhatsApp görüşmesine yönlendirir.</p><button type="submit" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--taxi-yellow)] px-7 py-4 text-sm font-black text-black transition hover:-translate-y-0.5 hover:shadow-lg">Mesajı hazırla <FiSend/></button></div>
      </form>
    </div></section>

    <section className="px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[36px] bg-white shadow-[0_30px_90px_rgba(20,20,20,.1)]">
        <div className="flex flex-col gap-4 p-7 sm:flex-row sm:items-end sm:justify-between sm:p-10">
          <div><p className="section-tag">Konum</p><h2 className="mt-4 text-3xl font-black tracking-[-.05em] sm:text-4xl">Mağazamızı ziyaret edin.</h2><p className="mt-3 text-sm leading-7 text-black/45">Merkez Mahallesi Soğanlı Caddesi No:80/C, Güngören / İstanbul</p></div>
          <a href="https://www.google.com/maps/search/?api=1&query=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul" target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[var(--ink)] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-0.5">Google Maps&apos;te aç <FiArrowUpRight/></a>
        </div>
        <iframe title="Enes Teknoloji mağaza konumu" src="https://www.google.com/maps?q=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul&output=embed" className="h-[360px] w-full border-0 sm:h-[460px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    </section>
  </main>;
}
