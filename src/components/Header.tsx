'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import SkipLink from './SkipLink';
import { useState, useEffect, useRef, useCallback } from 'react';

const NAV = [
  { href: '/', label: 'Accueil' },
  { href: '/emissions', label: 'Émission / Archives' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on navigation
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const toggle = useCallback(() => setOpen((prev) => !prev), []);
  const close = useCallback(() => setOpen(false), []);

  // Escape key closes the mobile menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, close]);

  // When menu opens, focus the first focusable item; when closed, return focus to button
  useEffect(() => {
    if (!open) {
      btnRef.current?.focus();
      return;
    }
    const focusables = menuRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button'
    );
    if (focusables?.length) {
      focusables[0].focus();
    }
  }, [open]);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-40" style={{ backgroundColor: 'rgba(250,247,241,0.92)' }}>
      <div className="container relative">
        <SkipLink />
        <div
          className="flex items-center justify-between min-h-[64px] px-4"
          style={{
            paddingTop: 'var(--space-4)',
            paddingBottom: 'var(--space-4)',
          }}
        >
          {/* Brand: real logo + editorial wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 text-nowrap"
            aria-label="Art Sous Le Manguier — accueil"
          >
            <Image
              src="/images/logo.jpg"
              alt=""
              width={48}
              height={48}
              className="block"
              style={{
                backgroundColor: '#104020',
                padding: '6px',
                borderRadius: '4px',
              }}
            />
            <span
              className="font-display text-xl font-bold tracking-tight text-ink"
              style={{ color: 'var(--color-ink)' }}
            >
              Art Sous<span className="block">le Manguier</span>
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-6 text-sm font-medium"
            aria-label="Navigation principale"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-green-dark underline underline-offset-4 decoration-1 decoration-green-dark/40'
                    : 'text-ink-soft hover:text-green-dark'
                }`}
                onClick={close}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <button
            ref={btnRef}
            type="button"
            onClick={toggle}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Menu"
            className="md:hidden inline-flex items-center justify-center p-2 text-ink rounded hover:bg-surface-alt focus:outline-none"
          >
            <span
              className="block w-5 h-[2px] bg-ink mb-1.5 rounded"
              style={{
                transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
                transition: 'all var(--duration-fast) var(--ease)',
              }}
            />
            <span
              className="block w-5 h-[2px] bg-ink opacity-0"
              style={{
                opacity: open ? 0 : 1,
                transition: 'opacity var(--duration-fast) var(--ease)',
              }}
            />
            <span
              className="block w-5 h-[2px] bg-ink mt-1.5 rounded"
              style={{
                transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
                transition: 'all var(--duration-fast) var(--ease)',
              }}
            />
          </button>
        </div>

        {/* Mobile menu panel — hidden from keyboard when closed */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden ${
            open
              ? 'max-h-[calc(100vh-64px)] overflow-y-auto opacity-100'
              : 'max-h-0 overflow-hidden opacity-0 transition-opacity duration-150 ease-out'
          }`}
          hidden={!open}
          style={{
            paddingTop: open ? 'var(--space-4)' : 0,
            paddingBottom: open ? 'var(--space-6)' : 0,
          }}
        >
          <div className="border-t border-border mt-2 pt-4 space-y-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={close}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${
                  isActive(item.href)
                    ? 'bg-surface-alt text-green-dark'
                    : 'text-ink-soft hover:text-green-dark hover:bg-surface-alt'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-y border-border/60 bg-surface" />
    </header>
  );
}
