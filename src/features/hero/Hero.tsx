import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { buttonClasses } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';
import { HeroStats } from '@/features/hero/HeroStats';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-6">
          <Badge>{t('badge')}</Badge>
          <h1 className="whitespace-pre-line text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>
          <p className="max-w-xl text-base text-muted sm:text-lg">{t('subtitle')}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href={`${ROUTES.HOME}#booking`} className={buttonClasses('primary', 'lg')}>
              {t('ctaPrimary')}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href={ROUTES.SERVICES} className={buttonClasses('outline', 'lg')}>
              {t('ctaSecondary')}
            </Link>
          </div>
          <HeroStats />
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/20">
            <Image
              src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200&q=75&auto=format&fit=crop"
              alt="Phoenix Group Automotive — автосервис"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-transparent" />
          </div>
          <div
            className="pointer-events-none absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
            aria-hidden
          />
        </Reveal>
      </Container>
    </section>
  );
}
