'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

import { buttonClasses } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';
import { NavLinks } from '@/components/layout/NavLinks';

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  const t = useTranslations('nav');

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.22, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed inset-x-0 top-16 z-40 origin-top border-b border-border bg-background/80 shadow-xl shadow-black/10 backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-1 px-5 py-4">
            <NavLinks
              className="flex flex-col"
              itemClassName="py-2.5 text-base"
              onSelect={onClose}
            />
            <Link
              href={`${ROUTES.HOME}#booking`}
              onClick={onClose}
              className={buttonClasses('primary', 'md', 'mt-3 w-full')}
            >
              {t('book')}
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
