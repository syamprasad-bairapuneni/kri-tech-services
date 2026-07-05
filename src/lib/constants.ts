export const SITE_NAME = "KRI Tech & Services";

export const COMPANY = {
  name: "KRI Tech & Services",
  tagline: "Empowering Businesses, Enabling Futures",
  email: "abc.xyz@gmail.com",
  phone: "+91 9876543210",
  phoneHref: "+919876543210",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact" },
];

export type ServiceItem = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "technical-support",
    title: "Technical Support",
    summary:
      "Fast, dependable remote IT support that keeps your systems running and your team unblocked — without the overhead of an in-house help desk.",
    points: [
      "Remote troubleshooting for hardware and software issues",
      "Structured ticket management from first report to resolution",
      "Network setup, monitoring, and support",
      "General IT assistance for day-to-day business operations",
    ],
  },
  {
    slug: "customer-support",
    title: "Customer Support",
    summary:
      "Consistent, courteous front-line support that protects your customer relationships across every channel your clients use.",
    points: [
      "Email support with clear, timely responses",
      "Live chat support for real-time customer queries",
      "Customer query handling across multiple channels",
      "Escalation management for complex or sensitive cases",
    ],
  },
  {
    slug: "education-consulting",
    title: "Education Consulting",
    summary:
      "Practical, one-on-one guidance for students planning their next academic step, from choosing a university to building a career path.",
    points: [
      "Study abroad guidance tailored to each student's goals",
      "University application support, from shortlisting to submission",
      "Career counseling to connect education choices with career outcomes",
    ],
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Experienced Support",
    description:
      "Our team brings hands-on experience across technical, customer, and education support, so issues are handled correctly the first time.",
  },
  {
    title: "Cost Effective",
    description:
      "Get dependable, professional support without the cost of building and managing a full in-house team.",
  },
  {
    title: "Graduate Talent Network",
    description:
      "We connect capable, trained graduates with real support roles, giving your business fresh talent and giving graduates a genuine start.",
  },
  {
    title: "Customer Focused",
    description:
      "Every engagement is built around your outcomes — clear communication, measurable service, and support that adapts to how you work.",
  },
];
