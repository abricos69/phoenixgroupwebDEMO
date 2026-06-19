'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

import { cn } from '@/lib/cn';
import { LOCALES } from '@/i18n/routing';
import { usePathname, useRouter } from '@/i18n/navigation';

export function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('lang');
  const [isPending, startTransition] = useTransition();

  function switchTo(next: string) {
    if (next === locale) return;
    startTransition(() => router.replace(pathname, { locale: next }));
  }

  return (
    <div
      className="flex items-center rounded-(--radius) border border-border p-0.5"
      role="group"
      aria-label={t('label')}
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => switchTo(code)}
          disabled={isPending}
          aria-pressed={code === locale}
          className={cn(
            'cursor-pointer rounded-[calc(var(--radius)-4px)] px-2.5 py-1 text-xs font-semibold transition-colors',
            code === locale
              ? 'bg-accent text-accent-foreground'
              : 'text-muted hover:text-foreground',
          )}
        >
          {t(code)}
        </button>
      ))}
    </div>
  );
}
