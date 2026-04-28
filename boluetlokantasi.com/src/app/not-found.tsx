import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ArrowLeft, Utensils } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen flex items-center">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-32 w-full">
          <div className="max-w-xl">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-10">
              <Utensils className="w-7 h-7 text-primary" />
            </div>

            {/* Number */}
            <p className="font-serif text-8xl lg:text-[10rem] font-bold text-foreground/10 leading-none mb-2 select-none">
              404
            </p>

            {/* Text */}
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Sayfa Bulunamadı
            </h1>
            <p className="text-foreground-muted text-lg leading-relaxed mb-10">
              Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.
              Bolu'nun lezzetleri sizi ana sayfada bekliyor.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Ana Sayfaya Dön
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                Blog'a Git
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
