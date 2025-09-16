import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Same Day Repairs - #1 Appliance Repair Gainesville VA | Refrigerator & Dryer Experts",
  description: "Same-day appliance repair in Gainesville VA. Expert refrigerator & dryer repair services. 25+ years experience. Call now for fast, reliable repairs!",
  keywords: "appliance repair Gainesville VA, refrigerator repair, dryer repair, same day service, Haymarket, Bristow, Centreville, Manassas",
  authors: [{ name: "Same Day Repairs" }],
  creator: "Same Day Repairs",
  publisher: "Same Day Repairs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://samedayrepairs.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Same Day Repairs - #1 Appliance Repair Gainesville VA",
    description: "Same-day appliance repair in Gainesville VA. Expert refrigerator & dryer repair services. 25+ years experience.",
    url: "https://samedayrepairs.com",
    siteName: "Same Day Repairs",
    images: [
      {
        url: "/images/sameday-repairs-og.jpg",
        width: 1200,
        height: 630,
        alt: "Same Day Repairs - Appliance Repair Gainesville VA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Same Day Repairs - #1 Appliance Repair Gainesville VA",
    description: "Same-day appliance repair in Gainesville VA. Expert refrigerator & dryer repair services.",
    creator: "@samedayrepairs",
    images: ["/images/sameday-repairs-twitter.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <meta name="geo.region" content="US-VA" />
        <meta name="geo.placename" content="Gainesville, Virginia" />
        <meta name="geo.position" content="38.7959;-77.6131" />
        <meta name="ICBM" content="38.7959, -77.6131" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="light" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 transition-all duration-200"
        >
          Skip to main content
        </a>
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
}
