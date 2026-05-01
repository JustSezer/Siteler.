import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bayilik Başvurusu | Karavan Köfte Food Truck",
  description: "Karavan Köfte food truck franchise başvurusu — ücretsiz, 3 dakika, bağlayıcı değil. Düşük yatırımlı bayilik için hemen başvurun, 24 saat içinde dönüş yapıyoruz.",
  alternates: {
    canonical: "https://bakacakkofte.com/basvuru",
  },
};

export default function BasvuruLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
