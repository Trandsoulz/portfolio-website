import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bethrand.dev";
const siteName = "Bethrand Nnaemeka";
const siteDescription =
  "Full-stack developer with 4+ years of experience specializing in backend engineering. I build production-grade systems including scalable APIs, real-time communication platforms, secure payment architectures, and cloud infrastructure across e-commerce, fintech, and marketplace domains.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bethrand Nnaemeka — Backend Engineer & Full-Stack Developer",
    template: "%s | Bethrand Nnaemeka",
  },
  description: siteDescription,
  keywords: [
    "Backend Engineer",
    "Full-Stack Developer",
    "Node.js Developer",
    "TypeScript Engineer",
    "REST API Development",
    "System Architecture",
    "Microservices",
    "PostgreSQL",
    "MongoDB",
    "Express.js",
    "NestJS",
    "Socket.IO",
    "Real-time Systems",
    "Payment Integration",
    "Stripe Connect",
    "Escrow Systems",
    "AWS",
    "Docker",
    "DevOps",
    "Software Engineer Nigeria",
    "Tech Port Harcourt",
    "Fintech Developer",
    "E-commerce Systems",
    "Marketplace Platforms",
  ],
  authors: [
    {
      name: "Bethrand Nnaemeka",
      url: "https://github.com/Trandsoulz"
    }
  ],
  creator: "Bethrand Nnaemeka",
  publisher: "Bethrand Nnaemeka",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Bethrand Nnaemeka — Backend Engineer Building Production-Grade Systems",
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/bethrand.jpg`,
        width: 1200,
        height: 630,
        alt: "Bethrand Nnaemeka - Backend Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bethrand Nnaemeka — Backend Engineer",
    description: siteDescription,
    creator: "@bethrand",
    images: [`${siteUrl}/bethrand.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Bethrand Nnaemeka",
  url: siteUrl,
  image: `${siteUrl}/bethrand.jpg`,
  jobTitle: "Backend Engineer",
  description: siteDescription,
  alumniOf: {
    "@type": "Organization",
    name: "University of Port Harcourt",
  },
  knowsAbout: [
    "Backend Development",
    "Node.js",
    "TypeScript",
    "System Architecture",
    "API Development",
    "Database Design",
    "Payment Systems",
    "Real-time Systems",
    "Cloud Infrastructure",
    "DevOps",
  ],
  sameAs: [
    "https://github.com/Trandsoulz",
    "https://www.linkedin.com/in/bethrandnnaemeka2019/",
  ],
  email: "bethrand2019@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Port Harcourt",
    addressCountry: "Nigeria",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
