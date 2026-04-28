import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { UtensilsCrossed, Home, BookOpen, MapPin, ChefHat } from "lucide-react";

const quickLinks = [
  {
    href: "/duzce-yoresel-yemekleri",
    label: "Yöresel Lezzetler",
    desc: "Düzce'nin geleneksel tatları",
    icon: ChefHat,
  },
  {
    href: "/duzce-restoranlari",
    label: "Mekanlar",
    desc: "En iyi restoranlar rehberi",
    icon: MapPin,
  },
  {
    href: "/tarifler",
    label: "Tarifler",
    desc: "Evde pişirebileceğiniz tarifler",
    icon: BookOpen,
  },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 min-h-[70vh] flex items-center justify-center py-20 bg-background">
        <div className="text-center px-4 max-w-2xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 rounded-full bg-accent-soft flex items-center justify-center">
              <UtensilsCrossed className="w-12 h-12 text-accent" strokeWidth={1.5} />
            </div>
          </div>

          {/* Heading */}
          <p className="text-sm font-semibold text-secondary uppercase tracking-widest mb-2">
            404 — Sayfa Bulunamadı
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bu tabak menüde yok!
          </h1>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
            Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
            Ama endişelenmeyin — Düzce'nin lezzetleri sizi bekliyor.
          </p>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
            {quickLinks.map(({ href, label, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-border bg-card hover:border-primary hover:shadow-sm transition-all"
              >
                <Icon
                  className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />
                <span className="font-semibold text-foreground text-sm">{label}</span>
                <span className="text-muted-foreground text-xs">{desc}</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-light transition-colors"
          >
            <Home className="w-4 h-4" />
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
