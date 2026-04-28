import Link from "next/link";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { nav } from "@/lib/site";

const suggestions = nav.slice(1, 6);

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex-1 pt-32 pb-24 px-5 sm:px-8">
        <div className="max-w-[720px] mx-auto text-center">
          <p className="eyebrow mb-6">404 · Ateş Burada Yanmıyor</p>

          <h1 className="display-font text-5xl sm:text-7xl text-ink mb-6 tracking-tight leading-none">
            Kaybolan{" "}
            <span className="italic text-ember font-normal">kor.</span>
          </h1>

          <p className="text-[17px] leading-relaxed text-ink-soft italic font-body mb-12 max-w-md mx-auto">
            Aradığınız sayfa başka bir ocağa taşınmış ya da hiç var olmamış
            olabilir. Rehbere dönelim.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link href="/" className="btn-amber">
              Ana Ocağa Dön
            </Link>
            <Link
              href="/blog"
              className="text-[13px] uppercase tracking-[0.14em] font-sans font-medium text-ink-soft hover:text-ember transition-colors border border-rule px-6 py-3"
            >
              Günlüğe Git
            </Link>
          </div>

          <div className="border-t border-rule pt-10">
            <p className="eyebrow-mute mb-6">Popüler Sayfalar</p>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {suggestions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[14px] uppercase tracking-[0.12em] font-sans text-ink-soft hover:text-ember transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
