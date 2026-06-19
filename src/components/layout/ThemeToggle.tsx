'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { THEME_COOKIE, THEME_COOKIE_MAX_AGE } from '@/config/theme';

function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.toggle('dark');
  root.style.colorScheme = isDark ? 'dark' : 'light';
  document.cookie = `${THEME_COOKIE}=${isDark ? 'dark' : 'light'}; path=/; max-age=${THEME_COOKIE_MAX_AGE}; samesite=lax`;
}

export function ThemeToggle() {
  const t = useTranslations('theme');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t('toggle')}
      title={t('toggle')}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--radius) border border-border text-foreground transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Moon className="block h-5 w-5 dark:hidden" />
      <Sun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
