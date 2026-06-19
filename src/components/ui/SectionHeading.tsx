import { cn } from '@/lib/cn';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

interface Props {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({ badge, title, subtitle, align = 'center' }: Props) {
  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' ? 'mx-auto items-center text-center' : 'items-start text-left',
      )}
    >
      {badge ? <Badge>{badge}</Badge> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="text-base text-muted sm:text-lg">{subtitle}</p> : null}
    </Reveal>
  );
}
