import type { LucideIcon } from "lucide-react";
import { Flame, Drumstick, Thermometer, Clock, Droplet, Leaf } from "lucide-react";

export interface Kategori {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  icon: LucideIcon;
  href: string;
  image: string;
  imageAlt: string;
}

export const kategoriler: Kategori[] = [
  {
    slug: "ates",
    title: "Ateş & Kömür",
    kicker: "01",
    description:
      "Meşe, gürgen, kayın; köz ile alev arasındaki fark. Hangi odun hangi et için yakılır, kömür nasıl seçilir.",
    icon: Flame,
    href: "/mangal-rehberi#ates",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=75",
    imageAlt: "Mangal közü yakın çekim",
  },
  {
    slug: "et",
    title: "Et Seçimi",
    kicker: "02",
    description:
      "Dana, kuzu, tavuk, av eti. Kesim bölgeleri, yağlılık, dinlendirme süresi ve ustanın tezgahta aradığı işaretler.",
    icon: Drumstick,
    href: "/et-cesitleri",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=75",
    imageAlt: "Ahşap tahta üzerinde çiğ dana eti",
  },
  {
    slug: "sicaklik",
    title: "Sıcaklık & Süre",
    kicker: "03",
    description:
      "Direkt mi, dolaylı mı? Her et için çekirdek sıcaklık tablosu, kalınlığa göre çevirme aralıkları.",
    icon: Thermometer,
    href: "/mangal-rehberi#sicaklik",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=75",
    imageAlt: "Izgara üzerinde pişen et",
  },
  {
    slug: "dinlendirme",
    title: "Dinlendirme",
    kicker: "04",
    description:
      "Eti ocaktan indirmek başlangıçtır. Kaç dakika, ne örtüyle, hangi sıcaklıkta — ve neden atlanmaması gerekir.",
    icon: Clock,
    href: "/mangal-rehberi#dinlendirme",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=75",
    imageAlt: "Tahta üzerinde dinlendirilen dilimlenmiş et",
  },
  {
    slug: "marinasyon",
    title: "Marinasyon",
    kicker: "05",
    description:
      "Zeytinyağı, süt, yoğurt, tuzlu su. Hangi marinad hangi ete, ne kadar süreyle. Asit dengesi ve yumuşama.",
    icon: Droplet,
    href: "/tarifler#marinasyon",
    image: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?w=400&q=75",
    imageAlt: "Baharat ve otlarla marine edilmiş et",
  },
  {
    slug: "sos",
    title: "Sos & Garnitür",
    kicker: "06",
    description:
      "Chimichurri, köz patlıcan, sarımsaklı yoğurt, közde biber sosu — etin yanında duran sessiz yıldızlar.",
    icon: Leaf,
    href: "/tarifler#soslar",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&q=75",
    imageAlt: "Taze otlar ve soslar",
  },
];
