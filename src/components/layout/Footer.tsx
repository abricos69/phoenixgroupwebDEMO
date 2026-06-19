import { MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/layout/Logo';
import { NavLinks } from '@/components/layout/NavLinks';
import { PHONES } from '@/config/site';

export function Footer() {
  const t = useTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-sm text-muted">{t('footer.tagline')}</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">{t('footer.navTitle')}</h3>
            <NavLinks className="flex flex-col gap-2.5" />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-foreground">{t('footer.contactsTitle')}</h3>
            <a
              href="https://maps.google.com/?q=вул.+Гната+Хоткевича+18+Київ"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {t('contacts.address')}
            </a>
            {PHONES.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0 text-accent" />
                {phone.display}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          © {year} Phoenix Group Automotive. {t('footer.rights')}
        </div>
      </Container>
    </footer>
  );
}
