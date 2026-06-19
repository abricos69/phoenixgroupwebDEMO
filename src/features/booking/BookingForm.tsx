'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/cn';
import { Field, FIELD_CLASS } from '@/components/ui/Field';
import { Select } from '@/components/ui/Select';
import { Button } from '@/components/ui/Button';
import { useBookingSchema, type BookingValues } from '@/features/booking/useBookingSchema';
import { BookingSuccess } from '@/features/booking/BookingSuccess';
import { ServiceOptions } from '@/features/booking/ServiceOptions';

const DEFAULTS: BookingValues = { name: '', phone: '', car: '', service: '', comment: '' };

export function BookingForm() {
  const t = useTranslations('booking');
  const schema = useBookingSchema();
  const [done, setDone] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({ resolver: zodResolver(schema), defaultValues: DEFAULTS });

  async function onSubmit() {
    // Демо: имитируем отправку без реального запроса.
    await new Promise((resolve) => setTimeout(resolve, 700));
    setDone(true);
  }

  function handleReset() {
    reset(DEFAULTS);
    setDone(false);
  }

  if (done) return <BookingSuccess onReset={handleReset} />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t('name')} htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            className={FIELD_CLASS}
            placeholder={t('namePlaceholder')}
            aria-invalid={!!errors.name}
            {...register('name')}
          />
        </Field>
        <Field label={t('phone')} htmlFor="phone" error={errors.phone?.message}>
          <input
            id="phone"
            type="tel"
            className={FIELD_CLASS}
            placeholder={t('phonePlaceholder')}
            aria-invalid={!!errors.phone}
            {...register('phone')}
          />
        </Field>
        <Field label={t('car')} htmlFor="car" className="sm:col-span-2">
          <input
            id="car"
            className={FIELD_CLASS}
            placeholder={t('carPlaceholder')}
            {...register('car')}
          />
        </Field>
        <Field
          label={t('service')}
          htmlFor="service"
          error={errors.service?.message}
          className="sm:col-span-2"
        >
          <Select id="service" aria-invalid={!!errors.service} defaultValue="" {...register('service')}>
            <option value="" disabled>
              {t('servicePlaceholder')}
            </option>
            <ServiceOptions />
          </Select>
        </Field>
      </div>

      <Field label={t('comment')} htmlFor="comment">
        <textarea
          id="comment"
          rows={3}
          className={cn(FIELD_CLASS, 'h-auto py-3')}
          placeholder={t('commentPlaceholder')}
          {...register('comment')}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        <Send className="h-5 w-5" />
        {isSubmitting ? t('submitting') : t('submit')}
      </Button>

      <p className="text-center text-xs text-muted">{t('demoNote')}</p>
    </form>
  );
}
