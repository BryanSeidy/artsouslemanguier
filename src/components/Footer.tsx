export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 px-4">
          <div className="flex items-center gap-3 text-nowrap">
            <img
              src="/images/logo.jpg"
              alt=""
              width={36}
              height={36}
              decoding="async"
              className="block"
              style={{
                backgroundColor: '#104020',
                padding: '4px',
                borderRadius: '4px',
              }}
            />
            <div>
              <div className="font-display font-bold text-ink">Art Sous Le Manguier</div>
              <div className="text-xs text-ink-soft">
                Initiative culturelle — Douala, Cameroun
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-ink-soft" aria-label="Pied de page">
            <a
              href="/emissions"
              className="hover:text-green-dark underline underline-offset-2"
            >
              \u00c9mission / Archives
            </a>
            <a
              href="/a-propos"
              className="hover:text-green-dark underline underline-offset-2"
            >
              \u00c0 propos
            </a>
            <a
              href="/contact"
              className="hover:text-green-dark underline underline-offset-2"
            >
              Contact
            </a>
          </nav>

          <div className="text-xs text-ink-soft">
            \u00a9 {new Date().getFullYear()} Art Sous Le Manguier. Tous droits r\u00e9serv\u00e9s.
          </div>
        </div>
      </div>
    </footer>
  );
}
