import Image, { type StaticImageData } from 'next/image';

import { cn } from '@/lib/cn';

import threeM from './logos/3m.png';
import castrol from './logos/Castrol.png';
import colad from './logos/Colad.png';
import elit from './logos/ELIT.png';
import fps from './logos/FPS.png';
import liquiMoly from './logos/LuqiuMoly.png';
import omega from './logos/Omega.png';
import zipAvto from './logos/ZipAvto.png';
import glasurit from './logos/glasurium.png';

interface Logo {
  name: string;
  src: StaticImageData;
}

const LOGOS: Logo[] = [
  { name: '3M', src: threeM },
  { name: 'Colad', src: colad },
  { name: 'Glasurit', src: glasurit },
  { name: 'Castrol', src: castrol },
  { name: 'Liqui Moly', src: liquiMoly },
  { name: 'ELIT', src: elit },
  { name: 'FPS', src: fps },
  { name: 'Omega', src: omega },
  { name: 'ЗипАвто', src: zipAvto },
];

// Одна строка с горизонтальным скроллом на узких экранах.
// py-3 даёт месту для подъёма карточки на hover (overflow-x обрезает и по вертикали).
const TRACK = '-mx-4 w-full overflow-x-auto px-4 py-3';
const ROW = 'mx-auto flex w-max items-center gap-3 sm:gap-4';

// Светлая тема — белая карточка. Тёмная — без подложки (логотипы серые прямо на
// тёмном фоне секции), на hover появляется белая карточка + подъём + цвет логотипа.
const CARD = cn(
  'group flex h-16 w-28 shrink-0 items-center justify-center rounded-xl p-3',
  'transition duration-300 hover:-translate-y-1',
  'bg-white ring-1 ring-black/5',
  'dark:bg-transparent dark:ring-0 dark:hover:bg-white dark:hover:ring-1 dark:hover:ring-black/5',
);

// Приглушены (серые, полупрозрачные) в покое, полный цвет на hover.
const LOGO = cn(
  'object-contain opacity-80 grayscale transition duration-300',
  'group-hover:opacity-100 group-hover:grayscale-0',
);

export function PartnerLogos() {
  return (
    <div className={TRACK}>
      <ul className={ROW}>
        {LOGOS.map(({ name, src }) => (
          <li key={name} className={CARD}>
            <span className="relative block h-full w-full">
              <Image src={src} alt={name} fill sizes="112px" className={LOGO} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
