import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import NetworkGraphic from "@/components/ui/NetworkGraphic";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      {/* subtle dot-grid texture, echoes the network motif without competing with it */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      <Container className="relative grid gap-12 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 inline-block rounded-full border border-teal-light/40 bg-teal/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-teal-light">
            Support &amp; Consulting Partner
          </p>
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            KRI Tech &amp; Services
          </h1>
          <p className="mt-4 text-xl font-medium text-sky-100">
            Reliable Technical Support &amp; Customer Support Services for
            Growing Businesses
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-sky-100/80">
            We help businesses streamline operations through remote technical
            support, customer support, and professional consulting solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" variant="primary">
              Book a Consultation
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              Explore Services
            </ButtonLink>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm md:max-w-md">
          <NetworkGraphic className="w-full h-auto" />
        </div>
      </Container>
    </section>
  );
}
