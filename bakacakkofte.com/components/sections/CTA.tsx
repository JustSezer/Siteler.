import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--color-red) 0%, var(--color-red-dark) 100%)",
        color: "var(--color-white)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          backgroundColor: "rgba(255,255,255,0.05)",
          pointerEvents: "none",
        }}
      />

      <div className="container-site" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        {/* H2 — birincil CTA: food truck bayilik başvurusu */}
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: "1.25rem",
          }}
        >
          Food Truck Franchise Bayiliği İçin{" "}
          <br />
          Bugün Başvur
        </h2>
        <p style={{ fontSize: "1.1rem", opacity: 0.9, maxWidth: "560px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          Karavan Köfte bayilik başvurusu ücretsiz ve bağlayıcı değil.
          Formu doldur, 24 saat içinde uzman ekibimiz seni arayacak.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
          <Link
            href="/basvuru"
            style={{
              backgroundColor: "var(--color-white)",
              color: "var(--color-red)",
              padding: "1rem 2.25rem",
              borderRadius: "4px",
              fontWeight: 800,
              fontSize: "0.95rem",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              textDecoration: "none",
              transition: "transform 0.15s",
            }}
          >
            Ücretsiz Başvur <ArrowRight size={18} />
          </Link>
          <a
            href="mailto:bayilik@bakacakkofte.com"
            className="btn-outline-white"
            style={{ fontSize: "0.9rem" }}
          >
            <Mail size={16} /> E-posta Gönder
          </a>
        </div>
      </div>
    </section>
  );
}
