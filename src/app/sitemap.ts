import type { MetadataRoute } from 'next';

import { SITE } from '@/config/site';
import { LOCALES } from '@/i18n/routing';
import { ROUTES } from '@/config/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [ROUTES.HOME, ROUTES.SERVICES];

  return LOCALES.flatMap((locale) =>
    paths.map((path) => ({
      url: `${SITE.url}/${locale}${path === '/' ? '' : path}`,
      lastModified: new Date(),
    })),
  );
}
