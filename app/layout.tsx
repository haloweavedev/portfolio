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
  title: "Haloweave - AI Web Development Agency",
  description: "Web Designs to double conversions in just 14 days",
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