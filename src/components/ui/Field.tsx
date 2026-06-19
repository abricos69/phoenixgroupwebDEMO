import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

export const FIELD_CLASS =
  'h-11 w-full rounded-(--radius) border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/70 focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-ring/30 aria-[invalid=true]:border-red-500';

interface Props {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  className?: string;
}

export function Field({ label, htmlFor, error, children, className }: Props) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-red-500" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
