import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Concept from "@/components/sections/Concept";
import Stats from "@/components/sections/Stats";
import WhyUs from "@/components/sections/WhyUs";
import Lezzet from "@/components/sections/Lezzet";
import FoodTruck from "@/components/sections/FoodTruck";
import Process from "@/components/sections/Process";
import Investment from "@/components/sections/Investment";
import TargetProfile from "@/components/sections/TargetProfile";
import Coverage from "@/components/sections/Coverage";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import QuickContact from "@/components/sections/QuickContact";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Karavan Köfte | Food Truck Bayilik Türkiye",
  description: "Karavan Köfte food truck bayiliği ile düşük yatırımla kendi işini kur. Türkiye genelinde franchise fırsatları, destek ve kazanç detayları burada.",
  alternates: {
    canonical: "https://bakacakkofte.com",
  },
  openGraph: {
    title: "Karavan Köfte | Food Truck Bayilik Türkiye",
    description: "Karavan Köfte food truck bayiliği ile düşük yatırımla kendi işini kur. Türkiye genelinde franchise fırsatları.",
    url: "https://bakacakkofte.com",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Food truck bayilik almak için ne kadar yatırım gerekiyor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Karavan Köfte food truck franchise paketi; araç, ekipman, eğitim ve ilk stok dahil eksiksiz bir başlangıç sunmaktadır. Kesin yatırım tutarı bölge ve araç modeline göre değiştiğinden başvuru sonrası kişisel teklif iletilmektedir."
      }
    },
    {
      "@type": "Question",
      "name": "Karavan Köfte bayilik şartları nelerdir?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "18 yaş üzeri olmak, gıda hijyeni sertifikası almak ve belirlenen başlangıç bütçesine sahip olmak yeterlidir. Restoran veya gıda sektörü deneyimi zorunlu değildir. Ekibimiz tüm eğitimi sağlar."
      }
    },
    {
      "@type": "Question",
      "name": "Food truck franchise Türkiye'de kârlı mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sabit mağazaya kıyasla düşük kira ve işletme maliyeti nedeniyle food truck modeli, doğru lokasyonda ortalama 8–14 ay içinde yatırım geri dönüşü sağlayabilmektedir. Brüt kâr marjı sektör ortalamasının üzerindedir."
      }
    },
    {
      "@type": "Question",
      "name": "Food truck bayiliğinde bölge sınırlaması var mı?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Her bayi başvurduğu ilçe veya şehirde öncelikli bölge hakkına sahip olur. Türkiye genelinde hâlâ açık bölgeler mevcuttur. Festival, pazar ve etkinlik alanlarında çoklu lokasyon çalışılabilir."
      }
    },
    {
      "@type": "Question",
      "name": "Food truck bayiliği başvurusundan açılışa ne kadar sürer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Karavan Köfte, onaylanan başvurudan itibaren ortalama 48 saat içinde araç teslimi gerçekleştirmekte ve açılış günü yerinde destek sağlamaktadır."
      }
    },
    {
      "@type": "Question",
      "name": "Franchise mi, sıfırdan food truck mı daha iyi?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Franchise modeli, marka bilinirliği, tedarik zinciri güvencesi ve operasyonel eğitim desteğiyle sıfırdan kurulan işletmelere kıyasla başarı oranını önemli ölçüde artırır. Müşteriler Bakacak Köfte markasını zaten tanır."
      }
    }
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  "name": "Bakacak Köfte",
  "description": "Türkiye genelinde food truck bayilik fırsatı sunan köfte franchise markası.",
  "url": "https://bakacakkofte.com",
  "servesCuisine": "Turkish",
  "areaServed": "TR",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Food Truck Bayilik Paketi",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Food Truck Franchise Paketi",
          "description": "Tam donanımlı karavan, eğitim, tedarik ve marka lisansı dahil bayilik paketi"
        }
      }
    ]
  }
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <Marquee />
      <Concept />
      <Stats />
      <WhyUs />
      <Lezzet />
      <FoodTruck />
      <Process />
      <Investment />
      <TargetProfile />
      <Coverage />
      <Testimonials />
      <FAQ />
      <BlogPreview />
      <QuickContact />
      <CTA />
    </>
  );
}
