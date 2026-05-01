"use client";

import Link from "next/link";
import { Mail, MapPin, ArrowRight, FileText } from "lucide-react";

export default function QuickContact() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-black-2)" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>İletişim</span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, color: "var(--color-white)", marginBottom: "0.75rem" }}>
            Bir Adım Uzaktasın
          </h2>
          <div className="divider-red" style={{ margin: "1rem auto" }} />
          <p style={{ color: "#999", fontSize: "0.95rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
            Sorularını başvuru formu ya da e-posta ile iletebilirsin. 24 saat içinde yanıt veriyoruz.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
          {[
            {
              icon: <FileText size={22} />,
              title: "Başvuru Formu",
              value: "Ücretsiz başvur",
              href: "/basvuru",
            },
            {
              icon: <Mail size={22} />,
              title: "E-posta",
              value: "bayilik@bakacakkofte.com",
              href: "mailto:bayilik@bakacakkofte.com",
            },
            {
              icon: <MapPin size={22} />,
              title: "Merkez",
              value: "Bolu, Türkiye",
              href: "/iletisim",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2rem 1.5rem",
                backgroundColor: "var(--color-black-3)",
                border: "1px solid #333",
                borderRadius: "8px",
                textDecoration: "none",
                transition: "border-color 0.2s, transform 0.2s",
                gap: "0.75rem",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--color-red)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#333";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ color: "var(--color-red)" }}>{item.icon}</div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#666", fontWeight: 700 }}>
                {item.title}
              </div>
              <div style={{ color: "var(--color-white)", fontSize: "0.9rem", fontWeight: 600, textAlign: "center" }}>
                {item.value}
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link href="/iletisim" className="btn-outline-white">
            İletişim Sayfasına Git <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
