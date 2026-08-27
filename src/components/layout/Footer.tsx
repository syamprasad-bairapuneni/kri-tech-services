import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { COMPANY, NAV_LINKS, SHOW_LEGAL_INFO, LEGAL_INFO } from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-sky-100/80">
      <Container className="grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt={`${COMPANY.name} logo`}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-lg font-bold text-white">
              {COMPANY.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            {COMPANY.tagline}. Reliable technical support, customer support,
            and education consulting for growing businesses and ambitious
            students.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white">
                {COMPANY.email}
              </a>
            </li>
            {COMPANY.phones.map((phone) => (
              <li key={phone.href}>
                <a href={`tel:${phone.href}`} className="hover:text-white">
                  {phone.display}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {SHOW_LEGAL_INFO && (
        <div className="border-t border-white/10 py-4">
          <Container className="flex flex-col gap-1 text-xs text-sky-100/60 md:flex-row md:gap-6">
            {LEGAL_INFO.udyamNumber && <span>Udyam Reg. No: {LEGAL_INFO.udyamNumber}</span>}
            {LEGAL_INFO.gstNumber && <span>GSTIN: {LEGAL_INFO.gstNumber}</span>}
            
          </Container>
        </div>
      )}

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col-reverse items-center gap-2 text-xs text-sky-100/60 md:flex-row md:justify-between">
          <p>© {year} {COMPANY.name}. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-white">
            Privacy Policy
          </Link>
        </Container>
      </div>
    </footer>
  );
}
