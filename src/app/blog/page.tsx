import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiBookOpen, FiClock } from 'react-icons/fi';
import StorePageHero, { PageCta } from '@/components/StorePageHero';
import { blogPosts } from '@/data/blogPosts';

export default function BlogPage() {
  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">
      <StorePageHero
        index="04"
        eyebrow="Teknoloji Blogu"
        title="Telefonunuzu daha uzun kullanın."
        description="Cihaz bakımı, sık karşılaşılan arızalar ve doğru aksesuar seçimi hakkında kısa, anlaşılır ve işe yarayan rehberler."
        image="/blog/batarya-degisimi-rehberi.webp"
        imageAlt="Enes Teknoloji telefon teknik servis ve teknoloji rehberleri"
      />

      <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 border-b border-black/10 pb-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div>
              <p className="section-tag"><FiBookOpen /> Faydalı bilgiler</p>
              <h2 className="mt-5 text-3xl font-black tracking-[-.05em] sm:text-5xl">Cihazınız için pratik notlar.</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/45 lg:justify-self-end">Teknik konuları karmaşıklaştırmadan anlatıyor, günlük kullanımda işinize yarayacak bilgileri bir araya getiriyoruz.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article key={post.slug} className="group flex overflow-hidden rounded-[28px] border border-black/10 bg-white shadow-[0_18px_55px_rgba(23,24,25,.06)]">
                <Link href={`/blog/${post.slug}`} className="flex w-full flex-col">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" sizes="(max-width:1024px) 100vw, 33vw" />
                    <span className="absolute left-5 top-5 rounded-full bg-[var(--taxi-yellow)] px-3 py-2 text-[9px] font-black uppercase tracking-[.16em]">Rehber / 0{index + 1}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[.14em] text-black/35"><span>{post.category}</span><span className="h-1 w-1 rounded-full bg-[var(--taxi-yellow)]"/><span className="flex items-center gap-1.5"><FiClock /> {post.readTime}</span></div>
                    <h2 className="mt-5 text-2xl font-black leading-tight tracking-[-.04em]">{post.title}</h2>
                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-black/45">{post.excerpt}</p>
                    <span className="mt-7 inline-flex items-center gap-3 text-sm font-black">Devamını oku <FiArrowRight className="transition-transform group-hover:translate-x-1" /></span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Sorunuzun cevabını birlikte bulalım." text="Telefonunuz veya aksesuar seçiminizle ilgili merak ettiklerinizi bize iletin." />
    </main>
  );
}
