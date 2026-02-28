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
const siteTitle =
  "Bethrand Nnaemeka — Backend Engineer & Full-Stack Developer";
const siteDescription =
  "Bethrand Nnaemeka is a backend engineer and full-stack developer with 4+ years of experience building production-grade systems — scalable APIs, real-time platforms, secure payment architectures, and cloud infrastructure across e-commerce, fintech, and marketplace domains.";
const ogImage =
  "https://res.cloudinary.com/dpesanzkk/image/upload/v1771147706/bethrand_1_nce8e4.webp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Bethrand Nnaemeka",
  },
  description: siteDescription,
  keywords: [
    "Bethrand Nnaemeka",
    "Bethrand",
    "Nnaemeka",
    "Bethrand Nnaemeka portfolio",
    "Bethrand Nnaemeka developer",
    "Bethrand Nnaemeka engineer",
    "Bethrand developer",
    "Nnaemeka developer",
    "bethrand.dev",
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
    "Golang Developer",
    "Socket.IO",
    "Real-time Systems",
    "Payment Integration",
    "Stripe Connect",
    "Escrow Systems",
    "AWS",
    "Docker",
    "DevOps",
    "Software Engineer Nigeria",
    "Software Developer Port Harcourt",
    "Tech Port Harcourt",
    "Nigerian Software Engineer",
    "Fintech Developer",
    "E-commerce Systems",
    "Marketplace Platforms",
  ],
  authors: [
    {
      name: "Bethrand Nnaemeka",
      url: siteUrl,
    },
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
    title:
      "Bethrand Nnaemeka — Backend Engineer Building Production-Grade Systems",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Bethrand Nnaemeka — Backend Engineer & Full-Stack Developer",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bethrand Nnaemeka — Backend Engineer Building Production-Grade Systems",
    description: siteDescription,
    creator: "@bethrand",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Bethrand Nnaemeka — Backend Engineer & Full-Stack Developer",
      },
    ],
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
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
      },
      {
        rel: "icon",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
      },
    ],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  other: {
    "google-site-verification": "tZukxrSMX1f95kRd2AO90BXFdnWMjW_26GPbCaQj7AE",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Bethrand Nnaemeka",
    givenName: "Bethrand",
    familyName: "Nnaemeka",
    alternateName: ["Bethrand", "Nnaemeka", "Trandsoulz"],
    url: siteUrl,
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
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
      "Golang",
      "System Architecture",
      "API Development",
      "Database Design",
      "Payment Systems",
      "Real-time Systems",
      "Cloud Infrastructure",
      "DevOps",
      "NestJS",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    sameAs: [
      "https://github.com/Trandsoulz",
      "https://www.linkedin.com/in/bethrandnnaemeka2019/",
    ],
    email: "bethrand2019@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Port Harcourt",
      addressRegion: "Rivers State",
      addressCountry: "NG",
    },
    nationality: {
      "@type": "Country",
      name: "Nigeria",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: siteName,
    description: siteDescription,
    publisher: {
      "@id": `${siteUrl}/#person`,
    },
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profilepage`,
    url: siteUrl,
    name: siteTitle,
    description: siteDescription,
    mainEntity: {
      "@id": `${siteUrl}/#person`,
    },
    dateCreated: "2025-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
  },
];

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
