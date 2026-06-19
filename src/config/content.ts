export const PROCESS_STEPS = [
  'request',
  'clarify',
  'visit',
  'parts',
  'repair',
  'handover',
] as const;

export const ADVANTAGES = [
  { key: 'time', icon: 'Clock' },
  { key: 'lounge', icon: 'Coffee' },
  { key: 'quality', icon: 'ShieldCheck' },
  { key: 'parts', icon: 'PackageSearch' },
] as const;

export const NEWS = [
  {
    key: 'storage',
    image:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'balancing',
    image:
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'tireRepair',
    image:
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=70&auto=format&fit=crop',
  },
] as const;

export const PARTNERS = [
  '3M',
  'Colad',
  'Glasurit',
  'Bosch',
  'Mann-Filter',
  'Castrol',
  'Sata',
  'Mirka',
] as const;

// Переключатель секции партнёров: true — логотипы, false — текстовые названия.
// Откатить к старому виду = поменять на false (см. features/partners/Partners.tsx).
export const SHOW_PARTNER_LOGOS = true;
