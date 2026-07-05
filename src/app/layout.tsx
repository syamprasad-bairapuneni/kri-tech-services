import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.kritechservices.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KRI Tech & Services | Technical, Customer & Education Support",
    template: "%s | KRI Tech & Services",
  },
  description:
    "KRI Tech & Services provides reliable remote technical support, customer support, and education consulting for growing businesses and students.",
  keywords: [
    "technical support",
    "customer support outsourcing",
    "education consulting",
    "study abroad guidance",
    "remote IT support",
    "KRI Tech & Services",
  ],
  openGraph: {
    title: "KRI Tech & Services",
    description:
      "Reliable technical support, customer support, and education consulting for growing businesses and students.",
    url: siteUrl,
    siteName: "KRI Tech & Services",
    images: ["/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "KRI Tech & Services",
    description:
      "Reliable technical support, customer support, and education consulting for growing businesses and students.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Blocking theme-init script — runs before paint so the page never
          flashes the wrong theme. Reads a saved preference, falls back to
          the OS setting, and sets the `dark` class before React hydrates.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('kri-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                document.documentElement.classList.toggle('dark', isDark);
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:shadow-card"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
