import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sunabase | The Modern Backend Standard",
  description:
    "Enterprise-grade database infrastructure featuring Atomic SQL, Zero-Trust Identity, and Edge-Native Workflows. Day 1/30 of the AI Mockup Challenge.",
  keywords: [
    "Sunabase",
    "PostgreSQL",
    "Atomic SQL",
    "Zero-Trust Auth",
    "Edge Workflows",
    "Database Infrastructure",
    "Backend as a Service",
    "AI Mockup Challenge",
  ],
  authors: [{ name: "Adriel Zimbril", url: "https://www.adrielzimbril.com" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Sunabase | The Modern Backend Standard",
    description:
      "Enterprise-grade database infrastructure. Day 1 of the AI-Generated Mockup Challenge.",
    url: "https://sunabase-landing.adrielzimbril.com",
    siteName: "Sunabase",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Sunabase Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunabase | The Modern Backend Standard",
    description:
      "Enterprise-grade database infrastructure. Day 1 of the AI-Generated Mockup Challenge.",
    images: ["/opengraph-image.png"],
    creator: "@adrielzimbril",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}
      >
        {children}
      </body>
    </html>
  );
}
