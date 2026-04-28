import { ArrowRight } from "lucide-react";
import { partner } from "@/lib/partner";

export default function CtaBant() {
  return (
    <section className="py-14 sm:py-16 lg:py-20 bg-forest text-smoke">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-[780px] mx-auto text-center">
          <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-smoke/60 mb-4">
            Yolcunun Tercihi
          </p>

          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-smoke mb-4">
            Düzce&apos;de Mangal Molası mı?
          </h2>

          <p className="font-body text-base sm:text-lg text-smoke/80 leading-relaxed mb-8">
            Bakacak mevkiinde meşe közünde et mangal, yöresel kahvaltı ve Bolu
            Dağı manzarası —{" "}
            <strong className="text-copper-glow">{partner.name}</strong>{" "}
            yolcuların bu sezon tercihi.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-copper"
            >
              Detaylı Bilgi
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
