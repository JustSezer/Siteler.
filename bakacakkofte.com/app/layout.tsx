import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bakacak Köfte | Food Truck Franchise Türkiye",
    template: "%s | Bakacak Köfte",
  },
  description: "Bakacak Köfte food truck franchisesi ile kendi işini kur. Türkiye genelinde bayilik fırsatı. Hızlı kurulum, güçlü marka, kanıtlanmış sistem.",
  metadataBase: new URL("https://bakacakkofte.com"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/rss.xml",
    },
  },
  openGraph: {
    title: "Bakacak Köfte | Food Truck Franchise Türkiye",
    description: "Bakacak Köfte food truck franchisesi ile kendi işini kur. Türkiye genelinde bayilik fırsatı.",
    locale: "tr_TR",
    type: "website",
    url: "https://bakacakkofte.com",
    siteName: "Bakacak Köfte",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bakacak Köfte | Food Truck Franchise Türkiye",
    description: "Bakacak Köfte food truck franchisesiyle kendi işini kur.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <link rel="alternate" type="application/rss+xml" title="Bakacak Köfte Blog" href="/rss.xml" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
