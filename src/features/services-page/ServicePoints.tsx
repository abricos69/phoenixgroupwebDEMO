import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

import type { ServiceKey } from '@/config/services';

interface Props {
  serviceKey: ServiceKey;
}

export function ServicePoints({ serviceKey }: Props) {
  const t = useTranslations('services');
  const points = t.raw(`items.${serviceKey}.points`) as string[];

  return (
    <ul className="flex flex-col gap-2">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2.5 text-sm text-muted">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          {point}
        </li>
      ))}
    </ul>
  );
}
