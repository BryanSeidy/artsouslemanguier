'use client';

import { useEffect } from 'react';

export default function SkipLink() {
  // Ensure the main content target can receive focus when the skip link is activated
  useEffect(() => {
    const main = document.getElementById('main-content');
    if (main && main.tabIndex !== -1) {
      main.tabIndex = -1;
      main.setAttribute('data-tabindex-set', 'true');
    }
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="skip-link"
        data-testid="skip-link"
      >
        Passer au contenu principal
      </a>
    </>
  );
}
