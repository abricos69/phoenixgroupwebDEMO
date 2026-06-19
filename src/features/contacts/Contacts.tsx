import { Clock, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { PHONES, MAP_EMBED_SRC } from '@/config/site';
import { ContactPhones } from '@/features/contacts/ContactPhones';

export function Contacts() {
  const t = useTranslations('contacts');

  return (
    <Section id="contacts">
      <SectionHeading badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <MapPin className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{t('addressLabel')}</h3>
              <p className="text-sm text-muted">{t('address')}</p>
              <p className="text-xs text-muted/80">{t('addressNote')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Clock className="h-5 w-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-foreground">{t('scheduleLabel')}</h3>
              <p className="text-sm text-muted">{t('weekdays')}</p>
              <p className="text-sm text-muted">{t('saturday')}</p>
              <p className="text-sm text-muted">{t('sunday')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Phone className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="text-sm font-semibold text-foreground">{t('phonesLabel')}</h3>
              <ContactPhones phones={PHONES} tireNote={t('tireNote')} />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-80 overflow-hidden rounded-2xl border border-border">
          <iframe
            src={MAP_EMBED_SRC}
            title={t('address')}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-80 w-full"
          />
        </Reveal>
      </div>
    </Section>
  );
}
