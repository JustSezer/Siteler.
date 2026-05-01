import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Karavan Köfte Food Truck Bayilik",
  description: "Karavan Köfte food truck bayilik soruları için iletişime geçin. E-posta ve başvuru formu ile 24 saat içinde geri dönüş sağlıyoruz.",
  alternates: {
    canonical: "https://bakacakkofte.com/iletisim",
  },
};

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
