'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { buttonClasses } from '@/components/ui/Button';
import { Link } from '@/i18n/navigation';
import { ROUTES } from '@/config/routes';
import { Logo } from '@/components/layout/Logo';
import { NavLinks } from '@/components/layout/NavLinks';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { LangSwitcher } from '@/components/layout/LangSwitcher';
import { MobileMenu } from '@/components/layout/MobileMenu';

export function Header() {
  const t = useTranslations('nav');
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
          <Logo />

          <NavLinks className="hidden items-center gap-8 md:flex" />

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <LangSwitcher />
              <ThemeToggle />
            </div>
            <Link
              href={`${ROUTES.HOME}#booking`}
              className={buttonClasses('primary', 'sm', 'hidden md:inline-flex')}
            >
              {t('book')}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-(--radius) border border-border text-foreground transition-colors hover:bg-surface-2 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
