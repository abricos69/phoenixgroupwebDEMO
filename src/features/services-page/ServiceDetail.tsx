import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/lib/cn';
import { ICONS } from '@/lib/icons';
import { Reveal } from '@/components/ui/Reveal';
import type { ServiceKey } from '@/config/services';
import { ServicePoints } from '@/features/services-page/ServicePoints';

interface Props {
  serviceKey: ServiceKey;
  icon: string;
  image: string;
  index: number;
}

export function ServiceDetail({ serviceKey, icon, image, index }: Props) {
  const t = useTranslations('services');
  const tPage = useTranslations('servicesPage');
  const Icon = ICONS[icon];
  const reversed = index % 2 === 1;

  return (
    <article id={serviceKey} className="scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn('flex flex-col gap-5', reversed && 'lg:order-2')}>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
            {Icon ? <Icon className="h-6 w-6" /> : null}
          </span>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {t(`items.${serviceKey}.title`)}
          </h2>
          <p className="text-base text-muted">{t(`items.${serviceKey}.desc`)}</p>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground">{tPage('includesTitle')}</p>
            <ServicePoints serviceKey={serviceKey} />
          </div>
        </Reveal>

        <Reveal delay={0.1} className={cn(reversed && 'lg:order-1')}>
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-border">
            <Image
              src={image}
              alt={t(`items.${serviceKey}.title`)}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </article>
  );
}
