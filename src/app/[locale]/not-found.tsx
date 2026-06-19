import { useTranslations } from 'next-intl';

import { Container } from '@/components/ui/Container';
import { buttonClasses } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';

export default function NotFound() {
  const t = useTranslations('nav');

  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
      <p className="text-6xl font-bold text-accent">404</p>
      <h1 className="text-2xl font-semibold text-foreground">Страница не найдена</h1>
      <Link href={ROUTES.HOME} className={buttonClasses('primary', 'md')}>
        {t('home')}
      </Link>
    </Container>
  );
}
