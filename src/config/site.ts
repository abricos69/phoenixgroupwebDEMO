export const SITE = {
  name: 'Phoenix Group Automotive',
  domain: 'phoenixgroup.kiev.ua',
  url: 'https://phoenixgroup.kiev.ua',
  geo: { lat: 50.4501, lng: 30.6133 },
} as const;

export const PHONES = [
  { display: '(050) 166-99-90', href: 'tel:+380501669990', noteKey: null },
  { display: '(097) 888-69-51', href: 'tel:+380978886951', noteKey: null },
  { display: '(097) 888-62-73', href: 'tel:+380978886273', noteKey: 'tire' },
] as const;

export const MAP_EMBED_SRC =
  'https://maps.google.com/maps?q=' +
  encodeURIComponent('вул. Гната Хоткевича 18, Київ') +
  '&t=&z=15&ie=UTF8&iwloc=&output=embed';
