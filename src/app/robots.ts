import type { MetadataRoute } from 'next';

// Демо: полностью закрыто от индексации до боевого запуска.
// На этапе полной переработки вернуть allow: '/' и ссылку на sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', disallow: '/' },
  };
}
