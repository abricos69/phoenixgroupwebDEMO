import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { buttonClasses } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';
import { SERVICES } from '@/config/services';
import { ServiceCard } from '@/features/services/ServiceCard';

export function ServicesSection() {
  const t = useTranslations('services');

  return (
    <Section id="services" className="bg-surface-2/40">
      <SectionHeading badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={service.key}
            serviceKey={service.key}
            icon={service.icon}
            index={index}
          />
        ))}
      </div>

      <Reveal className="mt-12 flex justify-center">
        <Link href={ROUTES.SERVICES} className={buttonClasses('outline', 'lg')}>
          {t('allCta')}
          <ArrowRight className="h-5 w-5" />
        </Link>
      </Reveal>
    </Section>
  );
}
