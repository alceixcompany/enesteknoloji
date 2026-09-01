import Image from 'next/image';
import { FiCheck, FiMessageCircle, FiShield, FiTool, FiUsers } from 'react-icons/fi';
import StorePageHero, { PageCta } from '@/components/StorePageHero';

const values = [
  { icon: FiMessageCircle, no: '01', title: 'Açık iletişim', text: 'Teknik ifadelerin arkasına saklanmadan, seçenekleri ve süreci anlaşılır biçimde paylaşırız.' },
  { icon: FiShield, no: '02', title: 'Güvenilir hizmet', text: 'Kısa vadeli satıştan önce uzun vadeli memnuniyeti ve ulaşılabilir olmayı önemseriz.' },
  { icon: FiTool, no: '03', title: 'Doğru çözüm', text: 'Her müşteriye aynı cevabı vermek yerine ihtiyaca ve cihazın durumuna göre hareket ederiz.' },
];

export default function AboutPage() {
  return <main className="bg-[var(--paper)] text-[var(--ink)]">
    <StorePageHero index="02" eyebrow="Hakkımızda" title="Güven, işimizin en önemli parçası." description="Enes Teknoloji; teknik bilgiyi açık iletişim, temiz işçilik ve satış sonrası destekle bir araya getiren yerel teknoloji mağazasıdır." image="/brand/hero-about.webp" imageAlt="Enes Teknoloji modern telefon mağazası ve servis bankosu" />

    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-20">
      <div className="grid grid-cols-12 gap-4">
        <div className="relative col-span-12 min-h-[440px] overflow-hidden rounded-[32px] sm:col-span-9 sm:min-h-[580px]"><Image src="/brand/enes-teknoloji-hero.webp" alt="Enes Teknoloji mağaza içi" fill className="object-cover object-right" sizes="(max-width:1024px) 100vw, 50vw"/><div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"/></div>
        <div className="relative col-span-12 min-h-[260px] overflow-hidden rounded-[26px] sm:col-span-3 sm:mt-20 sm:min-h-0"><Image src="/brand/gallery-accessories.webp" alt="Enes Teknoloji aksesuar alanı" fill className="object-cover" sizes="(max-width:640px) 100vw, 18vw"/></div>
      </div>
      <div><p className="section-tag">Bizim yaklaşımımız</p><h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-.055em] sm:text-5xl">Teknolojiyi karmaşık olmaktan çıkarıyoruz.</h2><div className="mt-7 space-y-5 text-base leading-8 text-black/52"><p>Telefon seçerken de, cihazınız arızalandığında da neye ihtiyacınız olduğunu anlamak en önemli adımdır. Önce dinler, sonra seçenekleri net şekilde anlatırız.</p><p>Amacımız yalnızca işlemi tamamlamak değil; mağazadan ayrılırken doğru karar verdiğinizden emin olmanızı sağlamaktır.</p></div><div className="mt-9 border-l-4 border-[var(--taxi-yellow)] pl-6"><p className="text-xl font-black leading-8">“Satıştan sonra da ulaşabileceğiniz bir teknoloji mağazası.”</p><span className="mt-3 block text-xs font-bold uppercase tracking-[.18em] text-black/35">Enes Teknoloji yaklaşımı</span></div></div>
    </div></section>

    <section className="bg-[var(--ink)] px-5 py-16 text-white sm:px-8 lg:px-12"><div className="mx-auto grid max-w-[1440px] gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-3">
      <div className="bg-[#1d1e20] p-7"><b className="text-4xl font-black text-[var(--taxi-yellow)]">Açık</b><span className="mt-2 block text-sm text-white/45">fiyat ve işlem bilgisi</span></div>
      <div className="bg-[#1d1e20] p-7"><b className="text-4xl font-black text-[var(--taxi-yellow)]">Özenli</b><span className="mt-2 block text-sm text-white/45">ürün ve servis yaklaşımı</span></div>
      <div className="bg-[#1d1e20] p-7"><b className="text-4xl font-black text-[var(--taxi-yellow)]">Ulaşılabilir</b><span className="mt-2 block text-sm text-white/45">satış sonrası destek</span></div>
    </div></section>

    <section className="bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1440px]">
      <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><div><p className="section-tag">Değerlerimiz</p><h2 className="mt-5 text-3xl font-black tracking-[-.05em] sm:text-4xl">Her gün aynı standart.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-black/45">Mağazada verdiğimiz her kararın arkasında üç temel ilke bulunur.</p></div><div className="divide-y divide-black/10 border-y border-black/10">{values.map(({icon:Icon,no,title,text})=><article key={no} className="grid gap-5 py-8 sm:grid-cols-[64px_180px_1fr] sm:items-center"><span className="text-4xl font-black text-[var(--taxi-yellow)]">{no}</span><div className="flex items-center gap-3"><Icon className="text-[var(--taxi-deep)]"/><h3 className="text-xl font-black">{title}</h3></div><p className="text-sm leading-7 text-black/45">{text}</p></article>)}</div></div>
    </div></section>

    <section className="px-5 py-20 sm:px-8 lg:px-12"><div className="mx-auto max-w-[1440px] overflow-hidden rounded-[30px] border border-black/10 bg-white shadow-[0_18px_50px_rgba(23,24,25,.06)]">
      <div className="grid gap-6 border-b border-black/10 p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-9"><span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--ink)] text-[var(--taxi-yellow)]"><FiUsers className="h-7 w-7"/></span><div><p className="section-tag">Size verdiğimiz söz</p><h2 className="mt-4 text-2xl font-black tracking-[-.04em] sm:text-3xl">Komşuluk kadar yakın, işimiz kadar profesyonel.</h2></div></div>
      <div className="grid divide-y divide-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">{['Sizi dinleyen ekip','Şeffaf bilgilendirme','İşlem sonrası destek'].map((item, index)=><div key={item} className="flex items-center gap-3 px-8 py-6 text-sm font-black"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--taxi-yellow)]/20 text-[var(--taxi-deep)]"><FiCheck/></span><span><small className="mb-1 block text-[9px] font-black tracking-[.16em] text-black/30">0{index + 1}</small>{item}</span></div>)}</div>
    </div></section>
    <PageCta title="Tanışmak için mağazamıza bekleriz." text="Ürün veya servis konusunda aklınızdaki soruyu bize iletin; birlikte değerlendirelim." />
  </main>;
}
