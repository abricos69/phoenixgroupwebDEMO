import { Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';
import { PHONES } from '@/config/site';
import { BookingForm } from '@/features/booking/BookingForm';

export function Booking() {
  const t = useTranslations('booking');

  return (
    <Section id="booking" className="bg-surface-2/40">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="flex flex-col items-start gap-5">
          <Badge>{t('badge')}</Badge>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t('title')}
          </h2>
          <p className="max-w-md text-base text-muted sm:text-lg">{t('subtitle')}</p>
          <ul className="mt-2 flex flex-col gap-3">
            {PHONES.map((phone) => (
              <li key={phone.href}>
                <a
                  href={phone.href}
                  className="inline-flex items-center gap-3 text-lg font-medium text-foreground transition-colors hover:text-accent"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-soft text-accent">
                    <Phone className="h-5 w-5" />
                  </span>
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <BookingForm />
        </Reveal>
      </div>
    </Section>
  );
}
