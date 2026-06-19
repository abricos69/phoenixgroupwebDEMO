import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { buttonClasses } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';

export function ServicesCta() {
  const t = useTranslations('servicesPage');

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal className="flex flex-col items-center gap-6 rounded-3xl border border-border bg-surface px-6 py-14 text-center sm:px-12">
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t('ctaTitle')}
          </h2>
          <p className="max-w-xl text-base text-muted">{t('ctaSubtitle')}</p>
          <Link href={`${ROUTES.HOME}#booking`} className={buttonClasses('primary', 'lg')}>
            {t('ctaButton')}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
