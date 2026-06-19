export const SERVICE_KEYS = [
  'diagnostics',
  'maintenance',
  'repair',
  'restoration',
  'tires',
  'alignment',
] as const;

export type ServiceKey = (typeof SERVICE_KEYS)[number];

interface ServiceMeta {
  key: ServiceKey;
  icon: string;
  image: string;
}

export const SERVICES: ServiceMeta[] = [
  {
    key: 'diagnostics',
    icon: 'Activity',
    image:
      'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'maintenance',
    icon: 'Droplets',
    image:
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'repair',
    icon: 'Wrench',
    image:
      'https://images.unsplash.com/photo-1599256621730-535171e28e50?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'restoration',
    icon: 'SprayCan',
    image:
      'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'tires',
    icon: 'CircleDot',
    image:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=70&auto=format&fit=crop',
  },
  {
    key: 'alignment',
    icon: 'Crosshair',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=70&auto=format&fit=crop',
  },
];
