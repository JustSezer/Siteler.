import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      aria-label="Ana hero bölümü"
      style={{
        color: "var(--color-white)",
        minHeight: "92vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Image
        src="/images/hero-food-truck-night.jpg"
        alt="Karavan Köfte food truck bayilik — gece parkında aydınlatılmış food truck"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center" }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(26,10,10,0.80) 60%, rgba(45,8,8,0.70) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 80% 30%, rgba(204,20,20,0.18) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1, paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div style={{ maxWidth: "780px" }}>
          <div style={{ marginBottom: "1.5rem" }}>
            <span className="tag-red">Food Truck Bayilik Türkiye</span>
          </div>

          {/* H1 — birincil hedef kelime: "food truck bayilik" */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 6.5vw, 4.8rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: "1.5rem",
              color: "var(--color-white)",
            }}
          >
            Türkiye&apos;nin En Lezzetli{" "}
            <span style={{ color: "var(--color-red)" }}>Food Truck Bayiliği</span>{" "}
            ile Kendi İşini Kur
          </h1>

          {/* Birincil paragraf — LSI: karavan köfte, franchise, düşük yatırım */}
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.18rem)",
              color: "#C8C8C8",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
              maxWidth: "580px",
            }}
          >
            Karavan Köfte food truck franchise sistemiyle Türkiye&apos;nin her köşesinde
            kendi işini kur. Düşük yatırımlı bayilik fırsatı, kanıtlanmış köfte tarifi
            ve tam operasyonel destek — sadece çalış ve kazan.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Link href="/basvuru" className="btn-red" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              Ücretsiz Bayilik Başvurusu <ArrowRight size={18} />
            </Link>
            <Link href="#konsept" className="btn-outline-white" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
              Franchise Sistemi Nedir?
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {[
              { num: "100+", label: "Hedef Bayilik Noktası" },
              { num: "30+", label: "Yıllık Köfte Tarifi" },
              { num: "48s", label: "Ortalama Kurulum" },
              { num: "%40+", label: "Brüt Kâr Marjı" },
            ].map((b) => (
              <div key={b.label}>
                <div style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--color-red)" }}>{b.num}</div>
                <div style={{ fontSize: "0.78rem", color: "#888", letterSpacing: "0.05em", textTransform: "uppercase" }}>{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          opacity: 0.5,
        }}
      >
        <ChevronDown size={20} color="white" />
      </div>
    </section>
  );
}
