import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const siteUrl = "https://vastraveda.com";
const title = "Vastra Veda | Premium Sarees for Weddings, Festivals, and Everyday Elegance";
const description =
  "Shop premium handcrafted sarees with rich fabrics, elegant detailing, fast delivery, and a luxury online shopping experience built for every celebration.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Vastra Veda",
  },
  description,
  applicationName: "Vastra Veda",
  keywords: [
    "premium sarees",
    "wedding sarees",
    "festive sarees",
    "designer sarees online",
    "indian ethnic wear",
    "luxury saree brand",
    "handcrafted sarees",
  ],
  category: "fashion",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Vastra Veda",
    title,
    description,
    locale: "en_IN",
    images: [
      {
        url: "/images/og-vastra-veda.svg",
        width: 1200,
        height: 630,
        alt: "Vastra Veda premium saree collection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-vastra-veda.svg"],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vastra Veda",
    url: siteUrl,
    logo: `${siteUrl}/images/logo-mark.svg`,
    image: `${siteUrl}/images/og-vastra-veda.svg`,
    description,
    sameAs: [
      "https://www.instagram.com/vastraveda",
      "https://www.facebook.com/vastraveda",
      "https://www.pinterest.com/vastraveda",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-rose-50 font-sans text-ink-900 antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
