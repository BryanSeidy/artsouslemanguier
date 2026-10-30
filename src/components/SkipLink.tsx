'use client';

import { usePathname } from 'next/navigation';

export default function SkipLink() {
  const pathname = usePathname();
  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        data-testid="skip-link"
      >
        Passer au contenu principal
      </a>
      {/* Anchor target for the skip link and scroll-padding */}
      {pathname === '/' && (
        <h2 className="visually-hidden" id="main-content">
          Contenu principal
        </h2>
      )}
    </>
  );
}
