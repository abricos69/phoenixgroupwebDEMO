import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Reveal } from '@/components/ui/Reveal';

interface Props {
  itemKey: string;
  image: string;
  index: number;
}

export function NewsCard({ itemKey, image, index }: Props) {
  const t = useTranslations('news');

  return (
    <Reveal delay={index * 0.05} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={image}
            alt={t(`items.${itemKey}.title`)}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-6">
          <h3 className="text-lg font-semibold text-foreground">{t(`items.${itemKey}.title`)}</h3>
          <p className="flex-1 text-sm text-muted">{t(`items.${itemKey}.excerpt`)}</p>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent">
            {t('readMore')}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </article>
    </Reveal>
  );
}
