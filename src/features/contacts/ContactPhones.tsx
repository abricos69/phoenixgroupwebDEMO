interface Phone {
  display: string;
  href: string;
  noteKey: string | null;
}

interface Props {
  phones: readonly Phone[];
  tireNote: string;
}

export function ContactPhones({ phones, tireNote }: Props) {
  return (
    <ul className="flex flex-col gap-1">
      {phones.map((phone) => (
        <li key={phone.href}>
          <a
            href={phone.href}
            className="text-sm text-muted transition-colors hover:text-accent"
          >
            {phone.display}
            {phone.noteKey === 'tire' ? (
              <span className="ml-1.5 text-xs text-muted/70">({tireNote})</span>
            ) : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
