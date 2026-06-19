import { setRequestLocale } from 'next-intl/server';

import { Hero } from '@/features/hero/Hero';
import { Partners } from '@/features/partners/Partners';
import { ServicesSection } from '@/features/services/ServicesSection';
import { Advantages } from '@/features/advantages/Advantages';
import { Process } from '@/features/process/Process';
import { News } from '@/features/news/News';
import { Booking } from '@/features/booking/Booking';
import { Contacts } from '@/features/contacts/Contacts';

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Partners />
      <ServicesSection />
      <Advantages />
      <Process />
      <News />
      <Booking />
      <Contacts />
    </>
  );
}
