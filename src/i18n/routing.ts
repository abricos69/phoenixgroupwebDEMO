import { defineRouting } from 'next-intl/routing';

export const LOCALES = ['ru', 'uk'] as const;
export const DEFAULT_LOCALE = 'ru';

export type Locale = (typeof LOCALES)[number];

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'always',
});
