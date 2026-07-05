"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy-900/10 bg-white/95 backdrop-blur transition-colors dark:border-white/10 dark:bg-navy-950/95">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label={`${COMPANY.name} home`}>
          <Image
            src="/logo.png"
            alt={`${COMPANY.name} logo`}
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover"
            priority
          />
          <span className="hidden sm:block leading-tight">
            <span className="block font-display text-lg font-bold text-navy-900 dark:text-white">
              KRI Tech &amp; Services
            </span>
            <span className="block text-xs font-medium text-ink-light dark:text-sky-100/60">
              {COMPANY.tagline}
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-medium transition-colors hover:text-brand ${
                  isActive ? "text-brand" : "text-ink dark:text-sky-100/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <ButtonLink href="/contact" className="!py-2.5 !px-5 text-sm">
            Book a Consultation
          </ButtonLink>
        </div>

        {/* Mobile: theme toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-navy-900 dark:text-white"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden border-t border-navy-900/10 bg-white dark:border-white/10 dark:bg-navy-950"
        >
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-ink hover:bg-sky-50 hover:text-brand dark:text-sky-100/80 dark:hover:bg-navy-900"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/contact" className="mt-2 justify-center">
              Book a Consultation
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  );
}
