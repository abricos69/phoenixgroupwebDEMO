'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'framer-motion';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

function formatNumber(n: number) {
  // Разряды разделяем пробелом: 10000 → "10 000".
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function CountUp({ value, suffix = '', duration = 1.6, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let controls: ReturnType<typeof animate> | undefined;

    // IntersectionObserver надёжно срабатывает при первой отрисовке,
    // если элемент уже виден (в отличие от useInView при reload/restore scroll).
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || controls) return;
        controls = animate(0, value, {
          duration,
          ease: [0.21, 0.47, 0.32, 0.98],
          onUpdate: (latest) => {
            node.textContent = `${formatNumber(Math.round(latest))}${suffix}`;
          },
        });
        observer.disconnect();
      },
      { threshold: 0.1 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      controls?.stop();
    };
  }, [value, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {`${formatNumber(0)}${suffix}`}
    </span>
  );
}
