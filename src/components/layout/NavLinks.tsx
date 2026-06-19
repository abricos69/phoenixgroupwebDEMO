import { useTranslations } from 'next-intl';

import { cn } from '@/lib/cn';
import { Link } from '@/i18n/navigation';
import { NAV_ITEMS } from '@/config/routes';

interface Props {
  className?: string;
  itemClassName?: string;
  onSelect?: () => void;
}

export function NavLinks({ className, itemClassName, onSelect }: Props) {
  const t = useTranslations('nav');

  return (
    <nav className={className} aria-label="Primary">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.key}
          href={item.href}
          onClick={onSelect}
          className={cn(
            'text-sm font-medium text-muted transition-colors hover:text-foreground',
            itemClassName,
          )}
        >
          {t(item.key)}
        </Link>
      ))}
    </nav>
  );
}
