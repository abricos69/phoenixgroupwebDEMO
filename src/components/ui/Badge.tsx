import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: Props) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent',
        className,
      )}
    >
      {children}
    </span>
  );
}
