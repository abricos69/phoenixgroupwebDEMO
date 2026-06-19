import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/ui/Reveal';

interface Props {
  stepKey: string;
  index: number;
}

export function ProcessStep({ stepKey, index }: Props) {
  const t = useTranslations('process.steps');
  const number = String(index + 1).padStart(2, '0');

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <div className="relative flex h-full flex-col gap-3 rounded-2xl border border-border bg-surface p-6">
        <span className="text-3xl font-bold text-accent/30">{number}</span>
        <h3 className="text-base font-semibold text-foreground">{t(`${stepKey}.title`)}</h3>
        <p className="text-sm text-muted">{t(`${stepKey}.desc`)}</p>
      </div>
    </Reveal>
  );
}
