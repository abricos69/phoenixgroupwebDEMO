import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

interface Props {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: Props) {
  return (
    <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className)}>
      {children}
    </div>
  );
}
