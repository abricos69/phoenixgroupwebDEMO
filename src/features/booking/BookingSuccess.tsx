import { CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/Button';

interface Props {
  onReset: () => void;
}

export function BookingSuccess({ onReset }: Props) {
  const t = useTranslations('booking');

  return (
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft text-accent">
        <CheckCircle2 className="h-8 w-8" />
      </span>
      <h3 className="text-xl font-semibold text-foreground">{t('successTitle')}</h3>
      <p className="max-w-sm text-sm text-muted">{t('successText')}</p>
      <Button variant="outline" size="md" onClick={onReset}>
        {t('again')}
      </Button>
    </div>
  );
}
