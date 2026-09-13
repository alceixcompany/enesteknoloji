import { FiArrowUpRight, FiMessageCircle, FiSmartphone, FiStar } from 'react-icons/fi';

const reviews = [
  {
    quote: 'Telefonum kısa sürede hazırlandı. Yapılacak işlem ve ücret baştan açıkça anlatıldı.',
    detail: 'Teknik servis müşterisi',
  },
  {
    quote: 'Aradığım kılıfı ve ekran koruyucuyu birlikte bulduk. İlgi ve ürün çeşitliliği çok iyiydi.',
    detail: 'Mağaza müşterisi',
  },
  {
    quote: 'Cihazımdaki sorun hızlıca tespit edildi ve teslim sırasında bütün kontroller birlikte yapıldı.',
    detail: 'Ekran değişimi müşterisi',
  },
] as const;

const sellPhoneUrl = 'https://wa.me/905365278175?text=Merhaba%20Enes%20Teknoloji%2C%20telefonumu%20satmak%20istiyorum.';

export default function HomeTrust() {
  return (
    <section id="telefonlar" className="scroll-mt-24 bg-[var(--paper)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-16 grid overflow-hidden rounded-[36px] bg-[var(--taxi-yellow)] lg:grid-cols-[1.15fr_.85fr]">
          <div className="p-8 sm:p-12 lg:p-14">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-[var(--taxi-yellow)]"><FiSmartphone className="h-6 w-6" /></span>
            <p className="mt-8 text-[11px] font-black uppercase tracking-[.22em] text-black/45">Telefonunu değerlendir</p>
            <h2 className="mt-4 text-3xl font-black leading-[1.02] tracking-[-.055em] sm:text-5xl">Telefonunu sat.</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-black/55">Cihazının marka, model ve durum bilgisini WhatsApp üzerinden gönder; ekibimiz seninle iletişime geçsin.</p>
          </div>
          <div className="flex flex-col justify-center bg-[var(--ink)] p-8 text-white sm:p-12 lg:p-14">
            <FiMessageCircle className="h-9 w-9 text-[var(--taxi-yellow)]" />
            <h3 className="mt-6 text-2xl font-black tracking-[-.04em]">Hızlı teklif için bize yaz.</h3>
            <p className="mt-3 text-sm leading-7 text-white/50">Düğmeye tıkladığında hazır mesajla WhatsApp görüşmesi açılır.</p>
            <a href={sellPhoneUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center justify-center gap-3 rounded-xl bg-[var(--taxi-yellow)] px-7 py-4 text-sm font-black text-black transition hover:-translate-y-0.5 hover:shadow-lg">
              Telefonunu Sat <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div>
            <p className="section-tag">Müşteri yorumları</p>
            <h2 className="mt-5 max-w-3xl text-3xl font-black leading-[1.02] tracking-[-.055em] sm:text-5xl">
              Güven, iyi bir deneyimle başlar.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-black/45">
            Mağazamızı ve teknik servisimizi tercih eden müşterilerimizin deneyimleri.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reviews.map((review, index) => (
            <article key={review.detail} className="flex min-h-64 flex-col rounded-[28px] border border-black/10 bg-white p-7 shadow-[0_18px_55px_rgba(20,20,20,.07)] sm:p-8">
              <div className="flex items-center justify-between">
                <div className="flex gap-1 text-[var(--taxi-deep)]" aria-label="5 yıldız">
                  {Array.from({ length: 5 }).map((_, star) => <FiStar key={star} className="fill-current" />)}
                </div>
                <span className="text-xs font-black text-black/20">0{index + 1}</span>
              </div>
              <blockquote className="mt-7 text-lg font-bold leading-8 tracking-[-.02em]">“{review.quote}”</blockquote>
              <p className="mt-auto pt-7 text-xs font-bold uppercase tracking-[.15em] text-black/35">{review.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
