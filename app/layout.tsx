// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Instrument_Serif, Homemade_Apple } from 'next/font/google';
import { ReactLenis } from 'lenis/react';
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: '--font-inter' 
});

const instrumentSerif = Instrument_Serif({ 
  subsets: ["latin"], 
  variable: '--font-instrument-serif',
  weight: '400' 
});

const homemadeApple = Homemade_Apple({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-homemade-apple'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://haloweave.com'),
  title: {
    default: "Haloweave - AI-Powered Web Development Agency",
    template: "%s | Haloweave"
  },
  description: "Transform your vision into high-converting websites in 14 days. AI-powered development combining cutting-edge technology with expert craftsmanship for measurable results.",
  keywords: [
    "AI web development",
    "rapid web design",
    "conversion optimization",
    "custom web applications",
    "AI-driven design",
    "14-day delivery",
    "web development agency",
    "startup websites",
    "enterprise web solutions",
    "ecommerce development"
  ],
  authors: [{ name: "Haloweave" }],
  creator: "Haloweave",
  openGraph: {
    title: "Haloweave - AI-Powered Web Development Agency",
    description: "Double your conversions with our AI-driven web development. Rapid 14-day delivery with guaranteed results.",
    url: 'https://haloweave.com',
    siteName: "Haloweave",
    images: [
      {
        url: "/meta-image.jpg",
        width: 1200,
        height: 630,
        alt: "Haloweave - AI-Powered Web Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haloweave - AI-Powered Web Development",
    description: "Transform your digital presence with AI-driven development. 14-day delivery with measurable results.",
    images: ["/meta-image.jpg"],
    creator: "@haloweave",
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
  alternates: {
    canonical: 'https://haloweave.com',
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable} ${homemadeApple.variable}`}>
      <body className="font-inter font-light bg-gray-950 text-white antialiased">
        <ReactLenis root options={{
          lerp: 0.1,
          smoothWheel: true,
          syncTouch: true,
        }}>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}