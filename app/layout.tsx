import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://qaas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  // Title configuration
  title: {
    default: "QAAS | Automations & Enterprise Systems",
    template: "%s | QAAS Automations & Systems",
  },
  description:
    "Streamline your business operations with QAAS. Next-generation Quality as a Service, workflow automation, and custom enterprise systems.",

  keywords: [
    "QAAS",
    "Quality as a Service",
    "Business Automation",
    "Enterprise Systems",
    "Workflow Automation",
    "Process Optimization",
    "Software Testing Automation",
  ],
  authors: [{ name: "QAAS Automations & Systems", url: siteUrl }],
  creator: "QAAS Automations & Systems",

  // Crawling directives
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

  // Open Graph / Social Link Previews
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "QAAS | Automations & Enterprise Systems",
    description:
      "Streamline your business operations with QAAS. Next-generation Quality as a Service, workflow automation, and custom enterprise systems.",
    siteName: "QAAS Automations & Systems",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "QAAS Automations & Systems ",
      },
    ],
  },

  // Twitter/X Cards
  twitter: {
    card: "summary_large_image",
    title: "QAAS Automation &  Systems",
    description:
      "Streamline your business operations with QAAS. Next-generation Quality as a Service, workflow automation, and custom enterprise systems.",
    images: ["/og-image.jpg"],
    creator: "@qaas_automations",
  },

  // Favicon configuration using inline SVG with the letter 'Q'
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23000000"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="65" fill="%23FFFFFF">Q</text></svg>',
    shortcut:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" rx="20" fill="%23000000"/><text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="65" fill="%23FFFFFF">Q</text></svg>',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}