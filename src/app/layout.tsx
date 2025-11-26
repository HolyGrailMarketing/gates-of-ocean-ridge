import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Only preload when used
  adjustFontFallback: false, // Reduce CLS
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Only preload when used
  adjustFontFallback: false, // Reduce CLS
});

export const metadata: Metadata = {
  title: "The Gates of Ocean Ridge | Luxury GREEN Community Coming Soon 2026",
  description: "Discover The Gates of Ocean Ridge - 114 luxury apartments in Ocean Ridge, Towel Isle St. Mary. A sustainable development featuring world-class amenities, ocean views, and eco-friendly living. Coming Soon 2026.",
  keywords: "luxury apartments, Ocean Ridge, St. Mary Jamaica, sustainable living, green community, oceanfront development, Renovare Developments",
  authors: [{ name: "Renovare Developments" }],
  creator: "Renovare Developments",
  publisher: "Renovare Developments",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'android-chrome', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
  openGraph: {
    title: "The Gates of Ocean Ridge | Luxury GREEN Community",
    description: "114 luxury sustainable apartments coming to Ocean Ridge, Towel Isle St. Mary in 2026",
    url: "https://gatesofoceandridge.com",
    siteName: "The Gates of Ocean Ridge",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: '/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'The Gates of Ocean Ridge - Renovare Developments',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gates of Ocean Ridge | Coming Soon 2026",
    description: "Luxury sustainable living in Ocean Ridge, St. Mary Jamaica",
    creator: "@renovaredevelopments.ja",
    images: ['/android-chrome-512x512.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://gates-of-ocean-ridge.vercel.app" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="https://vercel.app" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
