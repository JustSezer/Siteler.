import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Sayfa Bulunamadı | Düzce Et Mangal",
  description: "Aradığın sayfa mevcut değil. Ana sayfaya dön.",
  robots: { index: false, follow: false },
};

const QUICK_LINKS = [
  { href: "/bakacak-rehberi", label: "Bakacak Rehberi" },
  { href: "/et-rehberi", label: "Et Rehberi" },
  { href: "/blog", label: "Duman Defteri" },
  { href: "/iletisim", label: "İletişim" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 sm:py-32">
        <div className="max-w-[1320px] w-full mx-auto px-5 sm:px-6 lg:px-12">
          <div className="rule-dashed pt-3 mb-10 sm:mb-14">
            <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-soft">
              <span className="font-semibold">Duman Defteri</span>
              <span>Kayıp Durak</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-start">
            {/* Sol — içerik */}
            <div>
              <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-copper mb-5">
                Hata 404
              </p>

              <h1 className="font-display text-[64px] sm:text-[100px] lg:text-[120px] leading-[0.85] tracking-[-0.04em] font-bold text-charcoal mb-6">
                Kayıp{" "}
                <span className="italic font-normal text-forest">Durak</span>
              </h1>

              <p className="font-body text-lg sm:text-xl text-charcoal-soft leading-relaxed max-w-[520px] mb-4">
                Bu yolda böyle bir durak yok. Belki mangal dumanı gözlerini
                yaşarttı, belki de adres biraz kayıktı.
              </p>
              <p className="font-body text-base text-charcoal-muted leading-relaxed max-w-[520px] mb-10">
                Endişelenme — Bakacak'a giden her yol er ya da geç doğruya
                çıkar.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/" className="btn-forest">
                  Ana Sayfaya Dön
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-7 py-3 border border-bark-soft/50 rounded text-charcoal-soft font-display text-[0.9rem] font-semibold hover:border-forest/40 hover:text-forest transition-all"
                >
                  Duman Defteri
                </Link>
              </div>
            </div>

            {/* Sağ — hızlı linkler */}
            <div className="lg:min-w-[260px]">
              <p className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-charcoal-muted mb-6">
                Sık Uğranan Duraklar
              </p>
              <nav aria-label="Hızlı gezinme">
                <ul className="space-y-0">
                  {QUICK_LINKS.map((link, i) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-4 py-4 border-b border-bark-soft/30 last:border-0 hover:border-forest/30 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <span className="durak-number text-xl text-bark-soft/40 group-hover:text-forest/30 transition-colors tabular-nums">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-base font-semibold text-charcoal group-hover:text-forest transition-colors">
                            {link.label}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-charcoal-muted group-hover:text-copper transition-colors">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
