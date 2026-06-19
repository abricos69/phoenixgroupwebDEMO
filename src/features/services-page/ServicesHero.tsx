import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

export function ServicesHero() {
  const t = useTranslations('servicesPage');

  return (
    <section className="border-b border-border bg-surface-2/40">
      <Container className="py-16 sm:py-24">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Badge>{t('badge')}</Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-base text-muted sm:text-lg">{t('subtitle')}</p>
        </Reveal>
      </Container>
    </section>
  );
}
