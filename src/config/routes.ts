export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
} as const;

export const NAV_ITEMS = [
  { key: 'home', href: ROUTES.HOME },
  { key: 'services', href: ROUTES.SERVICES },
  { key: 'advantages', href: '/#advantages' },
  { key: 'process', href: '/#process' },
  { key: 'contacts', href: '/#contacts' },
] as const;
