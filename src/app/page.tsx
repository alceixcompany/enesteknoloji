import Image from 'next/image';
import Link from 'next/link';
import {
  FiArrowRight, FiBatteryCharging, FiCheck, FiClock, FiCpu, FiGrid,
  FiMessageCircle, FiPhone, FiShield, FiSmartphone, FiTool, FiZap,
} from 'react-icons/fi';
import HomeGallery from '@/components/HomeGallery';
import HomeBlog from '@/components/HomeBlog';

const services = [
  { icon: FiSmartphone, title: 'Ekran değişimi', text: 'Kırık ekran, görüntü ve dokunmatik sorunlarına hızlı çözüm' },
  { icon: FiZap, title: 'Soket değişimi', text: 'Şarj almama ve temassızlık sorunları için kontrollü soket değişimi' },
  { icon: FiCpu, title: 'Anakart tamiri', text: 'Anakart kaynaklı arızalar için detaylı tespit ve profesyonel onarım' },
  { icon: FiBatteryCharging, title: 'Batarya değişimi', text: 'Hızlı tükenme, ani kapanma ve batarya sorunlarına hızlı çözüm' },
  { icon: FiGrid, title: 'Kasa değişimi', text: 'Darbe, eğilme ve deformasyon yaşayan cihazlar için kasa yenileme' },
  { icon: FiTool, title: 'Ön cam değişimi', text: 'Görüntü ve dokunmatik çalışırken kırılan ön cam için hassas değişim' },
];

const steps = [
  ['01', 'Dinliyoruz', 'Cihazınızdaki sorunu ve beklentinizi netleştiriyoruz.'],
  ['02', 'İnceliyoruz', 'Arıza tespiti yapıp çözüm ve fiyat bilgisini paylaşıyoruz.'],
  ['03', 'Onarıyoruz', 'Onayınızla işlemi tamamlayıp gerekli kontrolleri yapıyoruz.'],
  ['04', 'Teslim ediyoruz', 'Cihazınızı çalışır durumda, yapılan işlemi anlatarak teslim ediyoruz.'],
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
      <section className="relative min-h-[760px] bg-[var(--ink)] pt-[76px] text-white lg:min-h-[820px]">
        <Image src="/brand/enes-teknoloji-hero.webp" alt="Enes Teknoloji telefon ve aksesuar mağazası" fill priority className="object-cover object-[62%_center]" sizes="100vw" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,14,15,.96)_0%,rgba(13,14,15,.82)_40%,rgba(13,14,15,.16)_72%,rgba(13,14,15,.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(13,14,15,.72)_100%)]" />
        <div className="relative mx-auto flex min-h-[684px] max-w-[1440px] items-center px-5 pb-24 sm:px-8 lg:min-h-[744px] lg:px-12 lg:pb-28">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-black uppercase tracking-[.2em] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[var(--taxi-yellow)]" /> Türkiye&apos;nin 81 iline hizmet
            </div>
            <h1 className="max-w-3xl text-[54px] font-black leading-[.91] tracking-[-.065em] sm:text-[72px] lg:text-[92px]">Teknoloji<br />bizim <span className="outline-word-light">işimiz.</span></h1>
            <p className="mt-8 max-w-xl text-base font-medium leading-7 text-white/65 sm:text-lg">Telefonunuz için güvenilir teknik servis, doğru yönlendirme ve hızlı çözüm tek adreste.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/teknik-servis" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--taxi-yellow)] px-7 py-4 text-sm font-black text-[var(--ink)] shadow-[0_14px_0_rgba(0,0,0,.2)] transition hover:-translate-y-1">Teknik servisi incele <FiArrowRight className="transition group-hover:translate-x-1" /></Link>
              <a href="https://wa.me/905312899969" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"><FiMessageCircle /> WhatsApp&apos;tan yaz</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 text-xs font-bold text-white/60">
              <span className="flex items-center gap-2"><FiShield className="h-4 w-4" /> Garantili işlem</span>
              <span className="flex items-center gap-2"><FiClock className="h-4 w-4" /> 30 dakikada ekran ve batarya değişimi</span>
              <span className="flex items-center gap-2"><FiCheck className="h-4 w-4" /> Uzman destek</span>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 overflow-hidden bg-[var(--ink)] py-4 text-[var(--taxi-yellow)]">
          <div className="marquee-track flex min-w-max items-center gap-10 text-xs font-black uppercase tracking-[.22em]">{[1,2].map(row => <div key={row} className="flex items-center gap-10">81 İle Hizmet <span>✦</span> 30 Dakikada Ekran Değişimi <span>✦</span> 30 Dakikada Batarya Değişimi <span>✦</span> Teknik Servis <span>✦</span></div>)}</div>
        </div>
      </section>

      <section className="bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div><p className="section-tag">Teknik servis</p><h2 className="mt-5 max-w-3xl text-3xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Cihazınız için doğru teşhis,<br /><span className="text-[var(--taxi-deep)]">temiz işçilik.</span></h2></div>
            <p className="max-w-md text-sm leading-7 text-black/50">Her cihazı ayrı değerlendiriyor, yapılacak işlemi ve maliyeti başlamadan önce açıkça paylaşıyoruz.</p>
          </div>

          <div className="grid overflow-hidden rounded-[36px] border border-black/10 bg-white shadow-[0_28px_80px_rgba(20,20,20,.10)] lg:grid-cols-[.92fr_1.08fr]">
            <div className="relative min-h-[430px] overflow-hidden lg:min-h-[650px]">
              <Image src="/brand/gallery-repair.webp" alt="Enes Teknoloji profesyonel telefon teknik servis masası" fill className="object-cover" sizes="(max-width:1024px) 100vw, 46vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-white backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-[var(--taxi-yellow)]" /> Kontrollü çalışma alanı</div>
              <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur-md"><b className="text-2xl text-[var(--taxi-yellow)]">Net</b><span className="mt-1 block text-xs text-white/55">işlem bilgisi</span></div>
                <div className="rounded-2xl border border-white/15 bg-black/45 p-4 text-white backdrop-blur-md"><b className="text-2xl text-[var(--taxi-yellow)]">Titiz</b><span className="mt-1 block text-xs text-white/55">son kontrol</span></div>
              </div>
            </div>

            <div className="flex flex-col p-7 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between border-b border-black/10 pb-6"><div><span className="text-[10px] font-black uppercase tracking-[.2em] text-black/35">Servis kapsamı</span><p className="mt-2 text-xl font-black">Sık karşılaştığımız işlemler</p></div><span className="hidden rounded-full bg-[var(--taxi-yellow)] px-4 py-2 text-[10px] font-black uppercase tracking-wider sm:block">Entech servis</span></div>
              <div className="flex-1 divide-y divide-black/10">
                {services.map(({ icon: Icon, title, text }, index) => (
                  <Link href="/teknik-servis" key={title} className="group grid grid-cols-[48px_1fr_auto] items-center gap-4 py-5 sm:grid-cols-[52px_1fr_auto] sm:py-6">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--paper)] text-[var(--taxi-deep)] transition group-hover:bg-[var(--taxi-yellow)] group-hover:text-black"><Icon className="h-5 w-5" /></span>
                    <div><div className="flex items-center gap-3"><span className="text-[9px] font-black text-black/25">0{index + 1}</span><h3 className="text-lg font-black tracking-[-.025em] sm:text-xl">{title}</h3></div><p className="mt-2 text-xs leading-6 text-black/45 sm:text-sm">{text}</p></div>
                    <FiArrowRight className="text-black/25 transition group-hover:translate-x-1 group-hover:text-black" />
                  </Link>
                ))}
              </div>
              <div className="mt-3 flex flex-col gap-4 rounded-2xl bg-[var(--ink)] p-5 text-white sm:flex-row sm:items-center sm:justify-between"><div><span className="text-[10px] font-bold uppercase tracking-[.18em] text-[var(--taxi-yellow)]">Cihazınızda sorun mu var?</span><p className="mt-1 text-sm text-white/55">Ön değerlendirme için bize ulaşın.</p></div><Link href="/teknik-servis" className="inline-flex shrink-0 items-center gap-2 text-sm font-black">Servis detayları <FiArrowRight /></Link></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.68fr_1.32fr] lg:gap-24">
          <div>
            <p className="section-tag">Nasıl çalışıyoruz?</p>
            <h2 className="mt-5 text-3xl font-black leading-[1.02] tracking-[-.055em] sm:text-5xl">Dört adımda<br />kontrollü servis.</h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-black/45">Cihaz kabulünden teslimata kadar her aşama kayıtlı, anlaşılır ve sizin onayınızla ilerler.</p>
            <div className="mt-10 hidden items-center gap-4 rounded-2xl border border-black/10 bg-[var(--paper)] p-5 lg:flex"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--taxi-yellow)]"><FiShield /></span><div><b className="block text-sm">İşlem sonrası kontrol</b><span className="text-xs text-black/40">Teslim öncesi temel fonksiyon testi</span></div></div>
          </div>

          <ol className="relative border-l border-black/15 pl-8 sm:pl-12">
            {steps.map(([number,title,text], index) => (
              <li key={number} className="group relative grid gap-3 border-b border-black/10 py-8 first:pt-0 last:border-0 last:pb-0 sm:grid-cols-[90px_1fr] sm:gap-8">
                <span className="absolute -left-[41px] top-9 flex h-[18px] w-[18px] items-center justify-center rounded-full border-4 border-white bg-[var(--taxi-yellow)] sm:-left-[57px] sm:top-10" />
                <span className="text-4xl font-black tracking-[-.07em] text-black/15 transition group-hover:text-[var(--taxi-yellow)] sm:text-5xl">{number}</span>
                <div><div className="flex items-center justify-between gap-4"><h3 className="text-xl font-black tracking-[-.03em] sm:text-2xl">{title}</h3><FiCheck className="h-5 w-5 shrink-0 text-[var(--taxi-deep)]" /></div><p className="mt-3 max-w-xl text-sm leading-7 text-black/45">{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <HomeGallery />

      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[38px] bg-[var(--taxi-yellow)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[420px] lg:min-h-[620px]"><Image src="/brand/enes-teknoloji-hero.webp" alt="Enes Teknoloji mağazası" fill className="object-cover object-right" sizes="(max-width:1024px) 100vw, 55vw" /><div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_55%,rgba(230,185,31,.5))]" /></div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="section-tag">Enes Teknoloji</p>
            <h2 className="mt-5 text-3xl font-black leading-[1.01] tracking-[-.055em] sm:text-5xl">Türkiye&apos;nin 81 ilinde teknoloji çözüm ortağınız.</h2>
            <p className="mt-7 text-base font-medium leading-8 text-black/55">Nerede olursanız olun, cihazınız için hızlı ve güvenilir teknik servis desteği sunuyor; süreci açıkça anlatarak satış sonrasında da yanınızda duruyoruz.</p>
            <div className="mt-9 grid gap-4 sm:grid-cols-2">{['30 dakikada ekran değişimi','30 dakikada batarya değişimi','81 ile hizmet','İşlem sonrası destek'].map(item => <span key={item} className="flex items-center gap-3 text-sm font-black"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-[var(--taxi-yellow)]"><FiCheck /></span>{item}</span>)}</div>
            <Link href="/hakkimizda" className="mt-10 inline-flex w-fit items-center gap-3 rounded-xl bg-[var(--ink)] px-6 py-4 text-sm font-black text-white">Bizi daha yakından tanıyın <FiArrowRight /></Link>
          </div>
        </div>
      </section>

      <HomeBlog />

      <section className="bg-[var(--ink)] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div><p className="text-[11px] font-black uppercase tracking-[.22em] text-[var(--taxi-yellow)]">İletişim</p><h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-[-.05em] sm:text-5xl">Telefonunuz için doğru adım burada başlıyor.</h2></div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <a href="tel:+905312899969" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[var(--taxi-yellow)] px-7 py-4 text-sm font-black text-black"><FiPhone /> 0531 289 99 69</a>
            <Link href="/iletisim" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/15 px-7 py-4 text-sm font-black text-white">İletişim sayfası <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
