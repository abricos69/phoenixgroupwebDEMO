import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ADVANTAGES } from '@/config/content';
import { AdvantageCard } from '@/features/advantages/AdvantageCard';

export function Advantages() {
  const t = useTranslations('advantages');

  return (
    <Section id="advantages">
      <SectionHeading badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {ADVANTAGES.map((item, index) => (
          <AdvantageCard key={item.key} itemKey={item.key} icon={item.icon} index={index} />
        ))}
      </div>
    </Section>
  );
}
