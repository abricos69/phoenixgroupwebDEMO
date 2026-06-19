import { useTranslations } from 'next-intl';

import { CountUp } from '@/components/ui/CountUp';

const STATS = [
  { value: 16, suffix: '+', key: 'years' },
  { value: 10000, suffix: '+', key: 'cars' },
  { value: 6, suffix: '', key: 'services' },
] as const;

export function HeroStats() {
  const t = useTranslations('hero.stats');

  return (
    <dl className="grid w-full max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
      {STATS.map((stat) => (
        <div key={stat.key} className="flex min-w-0 flex-col gap-1">
          <dt className="text-xl font-bold tabular-nums text-foreground sm:text-2xl lg:text-3xl">
            <CountUp value={stat.value} suffix={stat.suffix} />
          </dt>
          <dd className="text-xs text-muted sm:text-sm">{t(stat.key)}</dd>
        </div>
      ))}
    </dl>
  );
}
