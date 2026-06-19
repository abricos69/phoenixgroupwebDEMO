import { useTranslations } from 'next-intl';

import { ICONS } from '@/lib/icons';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  itemKey: string;
  icon: string;
  index: number;
}

export function AdvantageCard({ itemKey, icon, index }: Props) {
  const t = useTranslations('advantages.items');
  const Icon = ICONS[icon];

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <div className="flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
          {Icon ? <Icon className="h-6 w-6" /> : null}
        </span>
        <h3 className="text-base font-semibold text-foreground">{t(`${itemKey}.title`)}</h3>
        <p className="text-sm text-muted">{t(`${itemKey}.desc`)}</p>
      </div>
    </Reveal>
  );
}
