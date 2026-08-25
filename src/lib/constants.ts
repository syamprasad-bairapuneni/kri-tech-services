export const SITE_NAME = "KRI Tech & Services";

export const COMPANY = {
  name: "KRI Tech & Services",
  tagline: "Empowering Businesses, Enabling Futures",
  email: "contact@kritechservices.com",
  phones: [
    { display: "+91 85005 18312", href: "+918500518312" },
    { display: "+91 7013543791", href: "+917013543791" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Internships", href: "/internship-program" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact Us", href: "/contact" },
];

// Legal / registration details — placeholder until Udyam & GST are confirmed and issued.
// Fill these in once the actual numbers are in hand, then set SHOW_LEGAL_INFO to true.
export const SHOW_LEGAL_INFO = false;
export const LEGAL_INFO = {
  udyamNumber: "",
  gstNumber: "",
  registeredAddress: "",
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  credentials?: string[];
  photo?: string; // path under /public, e.g. "/team/krishna.jpg"
};

export const TEAM: TeamMember[] = [
  {
    name: "Krishna Allamsetti",
    role: "CEO & Founder",
    bio: "Network Security Engineer with hands-on experience securing and monitoring enterprise networks, leading KRI's technical direction and the Internship Program's networking and cybersecurity curriculum.",
    credentials: ["CCNA Certified", "PCNSE Certified", "SolarWinds Certified Professional"],
    photo: "/team/krishna-allamsetti.png",
  },
  {
    name: "Syam Prasad",
    role: "Chief Operations Officer (COO)",
    bio: "Leads day-to-day operations at KRI Tech & Services, including internship program delivery, college partnerships, and student/intern coordination from onboarding through completion.",
    photo: "/team/syam-prasad.png",
  },
];

export type InternshipTrack = {
  title: string;
  description: string;
};

export const INTERNSHIP_PROGRAM = {
  headline: "From Classroom to Industry",
  subheadline:
    "A 6-Month Internship Program combining CCNA-aligned Networking, Cybersecurity Fundamentals, and Hands-On Practical Training.",
  duration: "6 Months",
  targetAudience:
    "Diploma students (CSE, ECE, EE) and B.Tech students seeking a mandatory or career-focused industry internship.",
  tracks: [
    {
      title: "CCNA-Aligned Networking Fundamentals",
      description:
        "Core networking concepts aligned with the CCNA curriculum — routing, switching, and network fundamentals taught by a CCNA-certified engineer.",
    },
    {
      title: "Cybersecurity Fundamentals",
      description:
        "Foundational cybersecurity concepts and practices, grounded in real enterprise security experience.",
    },
    {
      title: "Practical Projects",
      description:
        "Hands-on projects that apply networking and security concepts to real-world scenarios.",
    },
    {
      title: "Remote IT/NOC Operations Exposure",
      description:
        "Direct exposure to how remote IT support and Network Operations Center (NOC) work is actually done.",
    },
  ] as InternshipTrack[],
  outcomes: [
    "6-month program completion certificate",
    "Practical, project-based experience for your resume",
    "Possibility of a full-time remote opportunity with KRI Tech & Services after successful completion",
  ],
};

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
