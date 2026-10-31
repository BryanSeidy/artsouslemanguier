import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-12 px-4">
          <div className="flex items-center gap-3 text-nowrap">
            <Link href="/">
              <Image
                src="/images/logo.jpg"
                alt=""
                width={36}
                height={36}
                className="block"
                style={{
                  backgroundColor: '#104020',
                  padding: '4px',
                  borderRadius: '4px',
                }}
              />
            </Link>
            <div>
              <div className="font-display font-bold text-ink">Art Sous Le Manguier</div>
              <div className="text-xs text-ink-soft">
                Initiative culturelle — Douala, Cameroun
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-5 text-sm text-ink-soft" aria-label="Pied de page">
            <Link
              href="/emissions"
              className="hover:text-green-dark underline underline-offset-2"
            >
              Émission / Archives
            </Link>
            <Link
              href="/a-propos"
              className="hover:text-green-dark underline underline-offset-2"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="hover:text-green-dark underline underline-offset-2"
            >
              Contact
            </Link>
          </nav>

          <div className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Art Sous Le Manguier. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
}
