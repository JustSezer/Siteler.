import Link from "next/link";
import { Mountain, ArrowLeft, Compass, TreePine, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4 sm:px-6 py-16 text-center">
      {/* Arka plan dekoratif elemanlar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Tepe siluetleri */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-10 text-primary"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,320 L0,200 L180,80 L360,180 L540,60 L720,160 L900,40 L1080,140 L1260,70 L1440,160 L1440,320 Z" />
        </svg>
        <svg
          className="absolute bottom-0 left-0 right-0 w-full opacity-[0.06] text-primary-light"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,320 L0,240 L120,140 L300,220 L480,100 L660,200 L840,120 L1020,200 L1200,130 L1440,210 L1440,320 Z" />
        </svg>

        {/* Ağaçlar — mobilde köşe taşması olmaması için konumlar ayarlandı */}
        <TreePine className="absolute top-16 left-3 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 text-primary opacity-15 rotate-6" />
        <TreePine className="absolute top-28 left-12 sm:left-24 w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-10 -rotate-3" />
        <TreePine className="absolute top-14 right-3 sm:right-16 w-7 h-7 sm:w-10 sm:h-10 text-primary opacity-15 -rotate-6" />
        <TreePine className="absolute top-36 right-10 sm:right-32 w-5 h-5 sm:w-6 sm:h-6 text-primary opacity-10 rotate-3" />
        <TreePine className="absolute bottom-28 left-4 sm:left-20 w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-10 rotate-2" />
        <TreePine className="absolute bottom-36 right-6 sm:right-24 w-7 h-7 sm:w-10 sm:h-10 text-primary opacity-10 -rotate-4" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-lg mx-auto">
        {/* İkon */}
        <div className="mb-6 sm:mb-8 relative">
          <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-accent flex items-center justify-center shadow-lg">
            <Mountain className="w-10 h-10 sm:w-14 sm:h-14 text-primary" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-secondary/20 border-2 border-secondary/40 flex items-center justify-center">
            <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-secondary" />
          </div>
        </div>

        {/* 404 */}
        <p className="text-7xl sm:text-8xl font-extrabold tracking-tight text-primary/20 leading-none select-none mb-2">
          404
        </p>

        {/* Başlık */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
          Yol Kayboldu
        </h1>

        {/* Açıklama */}
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-2 px-2">
          Aradığınız sayfa bulunamadı. Belki silinmiş, taşınmış ya da
          URL&apos;yi yanlış yazmış olabilirsiniz.
        </p>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-8 sm:mb-10 px-2">
          Merak etmeyin — Bolu Dağı&apos;nın güzelliklerine geri dönmek için
          aşağıdaki bağlantıları kullanabilirsiniz.
        </p>

        {/* Butonlar */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 sm:mb-12 w-full sm:w-auto">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-primary text-white text-sm sm:text-base font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <Home className="w-4 h-4 shrink-0" />
            Ana Sayfaya Dön
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 border-2 border-primary text-primary text-sm sm:text-base font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            Blog Yazılarına Bak
          </Link>
        </div>

        {/* Hızlı bağlantılar */}
        <div className="border-t border-border pt-6 sm:pt-8 w-full">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4 font-medium">
            Popüler Sayfalar
          </p>
          <nav
            aria-label="Hızlı gezinti bağlantıları"
            className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3"
          >
            {[
              { href: "/#gezilecek-yerler", label: "Gezilecek Yerler" },
              { href: "/#aktiviteler", label: "Aktiviteler" },
              { href: "/#konaklama", label: "Konaklama" },
              { href: "/#galeri", label: "Galeri" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs sm:text-sm text-primary hover:text-primary-dark underline-offset-4 hover:underline transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
