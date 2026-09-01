import type { MetadataRoute } from 'next';
import { blogPosts } from '@/data/blogPosts';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://enesteknoloji.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', changeFrequency: 'weekly' as const, priority: 1 },
    { path: '/teknik-servis', changeFrequency: 'monthly' as const, priority: 0.9 },
    { path: '/hakkimizda', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/blog', changeFrequency: 'monthly' as const, priority: 0.7 },
    { path: '/iletisim', changeFrequency: 'monthly' as const, priority: 0.8 },
  ];

  const staticPages = pages.map((page) => ({
    url: `${siteUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly',
    priority: 0.65,
  }));

  return [...staticPages, ...blogPages];
}
