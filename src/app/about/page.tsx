import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/home/CTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KRI Tech & Services — a support and consulting company built on reliability, service quality, and trust.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="About Us"
            title="A support partner you can rely on"
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-navy-950">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-base leading-relaxed text-ink dark:text-sky-100/80">
            <p>
              KRI Tech &amp; Services was founded on a simple idea: businesses
              grow faster when their support is dependable, and students make
              better decisions when their guidance is honest. We work at the
              intersection of both, delivering technical support, customer
              support, and education consulting with the same standard of
              care in every engagement.
            </p>
            <p>
              We know that handing over support responsibilities — whether
              that's your customers' inboxes, your team's IT issues, or a
              student's education path — requires trust. That's why we
              prioritize clear communication, consistent response times, and
              measurable service quality over shortcuts. Every ticket,
              conversation, and consultation is treated as a reflection of
              our reputation, not just a task to close.
            </p>
            <p>
              Our team combines experienced support professionals with a
              growing network of trained graduates, giving clients access to
              capable people while giving those graduates a genuine start to
              their careers. It's a model built for long-term reliability,
              not one-off transactions.
            </p>
            <p>
              Today, KRI Tech &amp; Services supports small and growing
              businesses that need remote technical and customer support they
              can count on, alongside students who need clear, practical
              guidance on studying abroad, applying to universities, and
              planning their careers. In both cases, our commitment is the
              same: show up reliably, communicate honestly, and do the work
              well.
            </p>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
