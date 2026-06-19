import { useTranslations } from 'next-intl';

import { SERVICE_KEYS } from '@/config/services';

export function ServiceOptions() {
  const t = useTranslations('services.items');

  return (
    <>
      {SERVICE_KEYS.map((key) => (
        <option key={key} value={key}>
          {t(`${key}.title`)}
        </option>
      ))}
    </>
  );
}
