import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiArrowRight, FiCheck, FiClock } from 'react-icons/fi';
import StorePageHero, { PageCta } from '@/components/StorePageHero';
import { blogPosts, getBlogPost } from '@/data/blogPosts';

type BlogDetailProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: `${post.title} | Enes Teknoloji`,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image, alt: post.title }],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enesteknoloji.com';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.image}`,
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    author: { '@type': 'Organization', name: 'Enes Teknoloji' },
    publisher: { '@type': 'Organization', name: 'Enes Teknoloji' },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <main className="bg-[var(--paper)] text-[var(--ink)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <StorePageHero
        index="Blog"
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        imageAlt={post.title}
      />

      <article className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[920px]">
          <div className="flex flex-wrap items-center justify-between gap-5 border-b border-black/10 pb-7">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-black text-black/45 transition hover:text-black"><FiArrowLeft /> Tüm yazılar</Link>
            <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[.15em] text-black/35"><span>{post.publishedAt}</span><span className="h-1 w-1 rounded-full bg-[var(--taxi-yellow)]"/><span className="flex items-center gap-2"><FiClock /> {post.readTime}</span></div>
          </div>

          <p className="mt-10 text-xl font-black leading-8 text-black/70 sm:text-2xl">{post.excerpt}</p>
          <div className="mt-8 space-y-6 text-base leading-8 text-black/55">
            {post.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <aside className="mt-10 rounded-[26px] border border-black/10 bg-white p-7 sm:p-9">
            <p className="text-[10px] font-black uppercase tracking-[.2em] text-[var(--taxi-deep)]">Kısa kontrol listesi</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {post.tips.map((tip) => <span key={tip} className="flex items-start gap-3 text-sm font-black leading-6"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--taxi-yellow)]/20 text-[var(--taxi-deep)]"><FiCheck /></span>{tip}</span>)}
            </div>
          </aside>
        </div>
      </article>

      <section className="border-y border-black/10 bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex items-end justify-between gap-6"><div><p className="section-tag">Diğer yazılar</p><h2 className="mt-4 text-2xl font-black tracking-[-.04em] sm:text-3xl">Okumaya devam edin.</h2></div><Link href="/blog" className="hidden items-center gap-2 text-xs font-black sm:inline-flex">Bloga dön <FiArrowRight /></Link></div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2">
            {relatedPosts.map((related) => (
              <Link key={related.slug} href={`/blog/${related.slug}`} className="group grid overflow-hidden rounded-[22px] border border-black/10 bg-[var(--paper)] sm:grid-cols-[160px_1fr]">
                <div className="relative min-h-[180px]"><Image src={related.image} alt={related.title} fill className="object-cover transition duration-500 group-hover:scale-[1.04]" sizes="160px" /></div>
                <div className="flex flex-col justify-center p-6"><span className="text-[9px] font-black uppercase tracking-[.16em] text-black/35">{related.category}</span><h3 className="mt-3 text-lg font-black leading-6">{related.title}</h3><span className="mt-4 inline-flex items-center gap-2 text-xs font-black">Devamını oku <FiArrowRight /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <PageCta title="Cihazınız için doğru adımı atalım." text="Belirtileri bize anlatın; uygun servis süreci hakkında sizi bilgilendirelim." href="/iletisim" label="Bize ulaşın" />
    </main>
  );
}
