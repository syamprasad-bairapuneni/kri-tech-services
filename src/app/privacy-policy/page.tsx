import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the KRI Tech & Services privacy policy to understand how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 2026";

  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading eyebrow="Legal" title="Privacy Policy" light />
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="max-w-3xl">
          <p className="text-sm text-ink-light dark:text-sky-100/60">Last updated: {lastUpdated}</p>

          <div className="mt-8 space-y-8 text-base leading-relaxed text-ink dark:text-sky-100/80">
            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                1. Introduction
              </h2>
              <p className="mt-3">
                {COMPANY.name} ("we", "us", "our") respects your privacy and
                is committed to protecting any personal information you share
                with us. This policy explains what information we collect,
                how we use it, and the choices you have.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                When you use our contact form, we may collect your name,
                email address, phone number, the service you're interested
                in, and any message you choose to share. We do not collect
                sensitive personal information through this site.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                3. How We Use Your Information
              </h2>
              <p className="mt-3">
                Information submitted through our contact form is used
                solely to respond to your inquiry, understand your support
                or consulting needs, and follow up regarding our services. We
                do not sell or rent your personal information to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                4. Data Storage &amp; Security
              </h2>
              <p className="mt-3">
                We take reasonable measures to protect the information you
                share with us. As this site's contact form is currently
                frontend-only, no submissions are stored on our servers until
                a backend integration is enabled; at that point, this policy
                will be updated to describe the specific storage and security
                practices in place.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                5. Cookies
              </h2>
              <p className="mt-3">
                This site does not currently use tracking or advertising
                cookies. Should analytics or cookies be added in the future,
                this policy will be updated accordingly.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                6. Your Rights
              </h2>
              <p className="mt-3">
                You may request that we delete any information you've
                submitted to us, or ask what information we hold about you,
                by contacting us using the details below.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                7. Contact Us
              </h2>
              <p className="mt-3">
                If you have questions about this privacy policy or how your
                information is handled, please contact us at{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-brand hover:underline">
                  {COMPANY.email}
                </a>{" "}
                or{" "}
                <a href={`tel:${COMPANY.phoneHref}`} className="text-brand hover:underline">
                  {COMPANY.phone}
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
