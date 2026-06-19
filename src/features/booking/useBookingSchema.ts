import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

export type BookingValues = {
  name: string;
  phone: string;
  car: string;
  service: string;
  comment: string;
};

export function useBookingSchema() {
  const t = useTranslations('booking.errors');

  return useMemo(
    () =>
      z.object({
        name: z.string().trim().min(2, t('name')),
        phone: z
          .string()
          .trim()
          .refine((value) => value.replace(/\D/g, '').length >= 9, t('phone')),
        car: z.string().trim(),
        service: z.string().min(1, t('service')),
        comment: z.string().trim(),
      }),
    [t],
  );
}
