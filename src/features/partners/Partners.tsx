import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { Reveal } from '@/components/ui/Reveal';
import { PARTNERS, SHOW_PARTNER_LOGOS } from '@/config/content';
import { PartnerLogos } from '@/features/partners/PartnerLogos';

export function Partners() {
  const t = useTranslations('partners');

  return (
    <section className="border-y border-border py-12">
      <Container>
        <Reveal className="flex flex-col items-center gap-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            {t('title')}
          </p>
          {SHOW_PARTNER_LOGOS ? (
            <PartnerLogos />
          ) : (
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
              {PARTNERS.map((brand) => (
                <li
                  key={brand}
                  className="text-lg font-semibold text-muted/70 transition-colors hover:text-foreground sm:text-xl"
                >
                  {brand}
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
