import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hustlry | Fast & Mobile-Friendly Business Websites",
  description:
    "Hustlry builds professional, mobile-optimized websites that drive leads and grow your business online. Starting from $100.",
  openGraph: {
    title: "Hustlry | Fast & Mobile-Friendly Business Websites",
    description:
      "Hustlr builds professional, mobile-optimized websites that drive leads and grow your business online.",
    url: "https://hustlry.com",
    siteName: "Hustlry",
    images: [
      {
        url: "https://Hustlry.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hustlry Website Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hustlry | Fast & Mobile-Friendly Business Websites",
    description:
      "Hustlry builds professional, mobile-optimized websites that drive leads and grow your business online.",
    images: ["https://hustlry.com/og-image.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
