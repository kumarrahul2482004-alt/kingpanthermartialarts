import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const siteUrl = "https://kingpantheracademy.com";
const title = "King Panther Martial Arts Academy | Train Like a Warrior";
const description =
  "Professional martial arts training for beginners and advanced fighters. Learn discipline, strength, and real combat skills at King Panther Martial Arts Academy.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "martial arts academy",
    "mma classes",
    "kids martial arts",
    "self defense classes",
    "fighter conditioning",
    "martial arts near me",
    "combat training academy",
  ],
  applicationName: "King Panther Martial Arts Academy",
  category: "sports",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "King Panther Martial Arts Academy",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-king-panther.svg",
        width: 1200,
        height: 630,
        alt: "King Panther Martial Arts Academy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-king-panther.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: "King Panther Martial Arts Academy",
    description,
    url: siteUrl,
    image: `${siteUrl}/images/og-king-panther.svg`,
    telephone: "9990262981",
    email: "r8802746909@gmail.com",
    openingHours: ["Mo-Fr 06:00-21:00", "Sa 08:00-17:00"],
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Panther Way",
      addressLocality: "Austin",
      addressRegion: "TX",
      postalCode: "78701",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.instagram.com/kingpantheracademy",
      "https://www.facebook.com/kingpantheracademy",
      "https://www.youtube.com/@kingpantheracademy",
    ],
  };

  return (
    <html lang="en" className={manrope.variable}>
      <body className={`${manrope.className} min-h-screen bg-background text-slate-100 antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
