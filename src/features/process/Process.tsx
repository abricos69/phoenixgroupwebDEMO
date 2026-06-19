import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PROCESS_STEPS } from '@/config/content';
import { ProcessStep } from '@/features/process/ProcessStep';

export function Process() {
  const t = useTranslations('process');

  return (
    <Section id="process" className="bg-surface-2/40">
      <SectionHeading badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((step, index) => (
          <ProcessStep key={step} stepKey={step} index={index} />
        ))}
      </div>
    </Section>
  );
}
