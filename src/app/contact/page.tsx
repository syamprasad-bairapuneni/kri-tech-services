import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with KRI Tech & Services for technical support, customer support, or education consulting. Email, call, or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Contact Us"
            title="Let's talk about what you need"
            description="Reach out directly or send a message — we typically respond within one business day."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">
              Contact details
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-navy-900 dark:text-white">Email</p>
                  <a href={`mailto:${COMPANY.email}`} className="text-ink-light hover:text-brand dark:text-sky-100/70">
                    {COMPANY.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.85.55 2.81.68A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <div>
                  <p className="font-medium text-navy-900 dark:text-white">Phone</p>
                  <a href={`tel:${COMPANY.phoneHref}`} className="text-ink-light hover:text-brand dark:text-sky-100/70">
                    {COMPANY.phone}
                  </a>
                </div>
              </li>
            </ul>

            <p className="mt-8 rounded-xl bg-sky-50 p-5 text-sm leading-relaxed text-ink-light dark:bg-navy-900 dark:text-sky-100/70">
              Prefer to write instead? Fill out the form and let us know which
              service you're interested in — technical support, customer
              support, or education consulting — and a bit about your needs.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="text-lg font-semibold text-navy-900 dark:text-white">
              Send us a message
            </h2>
            <div className="mt-5 rounded-2xl border border-navy-900/10 bg-sky-50 p-6 md:p-8 dark:border-white/10 dark:bg-navy-900">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
