import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABand from "@/components/home/CTABand";
import { WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "See why small and growing businesses, students, and clients choose KRI Tech & Services for reliable, cost-effective support.",
};

export default function WhyChooseUsPage() {
  return (
    <>
      <section className="bg-navy-900 py-16 md:py-20">
        <Container>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Support that earns your trust, one interaction at a time"
            description="We know there are many support providers to choose from. Here's what makes working with KRI different."
            light
          />
        </Container>
      </section>

      <section className="section-padding bg-white dark:bg-navy-950">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-900/10 bg-sky-50 p-8 dark:border-white/10 dark:bg-navy-900"
              >
                <h2 className="text-xl font-semibold text-navy-900 dark:text-white">
                  {item.title}
                </h2>
                <p className="mt-3 leading-relaxed text-ink-light dark:text-sky-100/70">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy-900 p-8 md:p-10">
            <h2 className="text-xl font-semibold text-white">
              Our commitment to you
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-sky-100/85">
              We don't treat support as a checklist. Every client relationship
              starts with understanding what "good service" actually looks
              like for you — response times, tone, escalation paths, or
              reporting — and we build our process around that, not the other
              way around.
            </p>
          </div>
        </Container>
      </section>

      <CTABand
        title="See the difference for yourself"
        description="Book a short consultation and tell us what you're working with — we'll show you exactly how we'd support it."
      />
    </>
  );
}
