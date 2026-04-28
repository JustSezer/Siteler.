import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import SocialSidebar from "@/components/SocialSidebar";
import WelcomePopup from "@/components/WelcomePopup";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.birinciogluticaret.com"),
  title: {
    default: "Birincioğlu Ticaret | Kömür, Pelet, Gübre ve Evcil Hayvan Ürünleri",
    template: "%s | Birincioğlu Ticaret",
  },
  description:
    "1946'dan beri Trabzon'da güvenilir ticaret. Kömür, pelet yakıt, organik gübre, kedi maması ve köpek maması toptan ve perakende satış. En uygun fiyat en üst kalite.",
  keywords: [
    "birincioğlu ticaret",
    "trabzon kömür",
    "pelet yakıt trabzon",
    "organik gübre trabzon",
    "kedi maması trabzon",
    "köpek maması trabzon",
    "kömür satış trabzon",
    "gübre satış",
    "evcil hayvan maması",
  ],
  authors: [{ name: "Birincioğlu Ticaret" }],
  creator: "Birincioğlu Ticaret",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://www.birinciogluticaret.com",
    siteName: "Birincioğlu Ticaret",
    title: "Birincioğlu Ticaret | Trabzon",
    description:
      "1946'dan beri Trabzon'da kömür, pelet, gübre ve evcil hayvan ürünleri satışı.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birincioğlu Ticaret",
    description: "Trabzon'da kömür, pelet, gübre ve evcil hayvan ürünleri.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={inter.className}>
      <head>
        <link rel="alternate" type="application/rss+xml" title="Birincioğlu Ticaret Ürünleri" href="/rss.xml" />
      </head>
      <body>
        <a href="#main-content" className="skip-nav">Ana içeriğe geç</a>
        <div className="max-w-[1280px] mx-auto overflow-hidden">
          <Header />
          <main id="main-content" tabIndex={-1}>{children}</main>
          <Footer />
        </div>
        <SocialSidebar />
        <a
          href="https://wa.me/905424136532"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geç"
          className="fixed bottom-6 right-6 z-50 w-[68px] h-[68px] rounded-full shadow-lg hover:scale-110 transition-transform bg-[#25D366] flex items-center justify-center p-2.5"
        >
          <img src="/images/instagram-icon.png" alt="WhatsApp" className="w-8 h-8 object-contain" />
        </a>
        <CookieBanner />
        <WelcomePopup />
      </body>
    </html>
  );
}
