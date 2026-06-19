import { useTranslations } from 'next-intl';

import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { NEWS } from '@/config/content';
import { NewsCard } from '@/features/news/NewsCard';

export function News() {
  const t = useTranslations('news');

  return (
    <Section id="news">
      <SectionHeading badge={t('badge')} title={t('title')} subtitle={t('subtitle')} />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {NEWS.map((item, index) => (
          <NewsCard key={item.key} itemKey={item.key} image={item.image} index={index} />
        ))}
      </div>
    </Section>
  );
}
