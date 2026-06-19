import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/cn';
import { ICONS } from '@/lib/icons';
import { Reveal } from '@/components/ui/Reveal';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';
import type { ServiceKey } from '@/config/services';

interface Props {
  serviceKey: ServiceKey;
  icon: string;
  index: number;
}

export function ServiceCard({ serviceKey, icon, index }: Props) {
  const t = useTranslations('services');
  const Icon = ICONS[icon];

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className="group flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-200 group-hover:scale-105">
          {Icon ? <Icon className="h-6 w-6" /> : null}
        </span>
        <h3 className="text-lg font-semibold text-foreground">{t(`items.${serviceKey}.title`)}</h3>
        <p className="flex-1 text-sm text-muted">{t(`items.${serviceKey}.desc`)}</p>
        <Link
          href={`${ROUTES.SERVICES}#${serviceKey}`}
          className={cn(
            'inline-flex items-center gap-1.5 text-sm font-medium text-accent',
            'transition-colors hover:text-accent-hover',
          )}
        >
          {t('more')}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </article>
    </Reveal>
  );
}
