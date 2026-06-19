import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Container';

interface Props {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({ id, children, className, containerClassName }: Props) {
  return (
    <section id={id} className={cn('scroll-mt-20 py-20 sm:py-28', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
