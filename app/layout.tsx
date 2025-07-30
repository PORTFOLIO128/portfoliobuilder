import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Builders",
  description:
    "Stand out from thousands of applicants. Build your professional portfolio and get noticed by top IT MNCs. Quick delivery at an affordable price.",
  keywords: [
    "Portfolio Builder",
    "Create Portfolio",
    "Professional Portfolio",
    "IT Jobs",
    "Resume Website",
    "Portfolio for Students"
  ],
  authors: [{ name: "Portfolio Builders" }],
  openGraph: {
    title: "Portfolio Builders",
    description:
      "Your dream job starts with the right portfolio. Stand out and get noticed by top companies.",
    url: "https://portfoliobuilders.vercel.app",
    siteName: "Portfolio Builders",
    images: [
      {
        url: "https://portfoliobuilders.vercel.app/og-image.jpg", // replace with your actual image
        width: 1200,
        height: 630,
        alt: "Portfolio Builders"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico" // make sure favicon.ico is in public folder
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased}
      >
        {children}
      </body>
    </html>
  );
}
