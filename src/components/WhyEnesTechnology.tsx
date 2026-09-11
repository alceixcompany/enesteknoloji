import { FiCheck } from 'react-icons/fi';

const reasons = [
  {
    title: 'Şeffaf fiyatlandırma',
    text: 'İşleme başlamadan önce yapılacak işlemi ve maliyeti net şekilde öğrenin.',
  },
  {
    title: 'Profesyonel teknik servis',
    text: 'Cihazınız kontrollü şekilde incelenir ve işlem öncesi bilgilendirilirsiniz.',
  },
  {
    title: 'Güvenli alışveriş',
    text: 'Telefon alım ve satım işlemlerinde açık ve anlaşılır süreç.',
  },
  {
    title: 'Hızlı iletişim',
    text: 'WhatsApp üzerinden hızlıca bilgi ve fiyat alın.',
  },
  {
    title: 'Gerçek mağaza, gerçek ekip',
    text: 'Sizi sanal bir destek hattına değil, doğrudan mağazamıza ulaştırıyoruz.',
  },
] as const;

export default function WhyEnesTechnology() {
  return (
    <section className="border-y border-black/10 bg-white px-5 py-24 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="section-tag">Bizi tanıyın</p>
            <h2 className="mt-5 max-w-2xl text-3xl font-black leading-[1.02] tracking-[-.055em] sm:text-5xl">Neden Enes Teknoloji?</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/45">Teknik servis ve alışveriş sürecinin her adımında açık, hızlı ve ulaşılabilir bir deneyim sunuyoruz.</p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {reasons.map((reason, index) => (
            <article key={reason.title} className={`flex min-h-64 flex-col rounded-[26px] border border-black/10 bg-[var(--paper)] p-7 transition hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(20,20,20,.08)] ${index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--taxi-yellow)] text-black"><FiCheck className="h-5 w-5" strokeWidth={3} /></span>
                <span className="text-[10px] font-black tracking-[.18em] text-black/20">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-xl font-black tracking-[-.03em]">{reason.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/45">{reason.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
