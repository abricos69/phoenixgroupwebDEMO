import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/cn';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';

const styles = {
  wordmark: 'flex min-w-0 flex-col leading-tight',
  name: 'truncate text-base font-bold tracking-tight text-foreground',
  tagline: 'truncate text-[11px] font-medium text-muted',
  image: 'h-9 w-9 shrink-0 transition-transform duration-200 group-hover:scale-105',
} as const;

interface Props {
  className?: string;
}

export function Logo({ className }: Props) {
  const t = useTranslations('brand');
  const name = t('name');

  return (
    <Link
      href={ROUTES.HOME}
      className={cn('group flex min-w-0 items-center gap-2.5', className)}
      aria-label={name}
    >
      <Image src="/logo.png" alt={name} width={36} height={36} className={styles.image} />

      <span className={styles.wordmark}>
        <span className={styles.name}>{name}</span>
        <span className={styles.tagline}>{t('tagline')}</span>
      </span>
    </Link>
  );
}
