import { FiArrowUpRight, FiMapPin, FiPhone } from 'react-icons/fi';
import ContactMap from '@/components/ContactMap';

const contactItems = [
  { icon: FiPhone, label: 'Telefon', value: '0536 527 81 75', note: 'Doğrudan bizi arayın', href: 'tel:+905365278175' },
  { icon: FiMapPin, label: 'Adres', value: 'Merkez Mah. Soğanlı Cd. No:80/C', note: 'Güngören / İstanbul', href: 'https://www.google.com/maps/search/?api=1&query=Merkez%20Mahallesi%20So%C4%9Fanl%C4%B1%20Caddesi%20No%3A80%2FC%20G%C3%BCng%C3%B6ren%20%C4%B0stanbul' },
];

export default function ContactPage() {
  return (
    <main className="bg-[var(--paper)] pt-32 text-[var(--ink)] lg:pt-40">
      <section className="px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-[1440px]">
          <p className="section-tag">İletişim</p>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-[-.055em] sm:text-5xl">Bize ulaşın.</h1>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {contactItems.map(({ icon: Icon, label, value, note, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group flex items-center gap-4 rounded-[26px] border border-black/10 bg-white p-5 transition hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_rgba(20,20,20,.09)] sm:gap-5 sm:p-6"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--taxi-yellow)]"><Icon className="h-5 w-5" /></span>
                <div className="min-w-0">
                  <small className="text-[10px] font-black uppercase tracking-[.18em] text-black/35">{label}</small>
                  <b className="mt-1 block text-lg">{value}</b>
                  <span className="mt-1 block text-xs text-black/40">{note}</span>
                </div>
                <FiArrowUpRight className="ml-auto shrink-0 text-black/25 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <ContactMap />
    </main>
  );
}
