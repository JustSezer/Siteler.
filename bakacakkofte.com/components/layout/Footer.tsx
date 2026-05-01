"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Share2, MessageSquareShare } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-black)", color: "var(--color-white)" }}>
      <div className="container-site" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "inline-block",
                backgroundColor: "var(--color-white)",
                borderRadius: "6px",
                padding: "0.4rem 0.75rem",
              }}
            >
              <Image
                src="/logo.jpg"
                alt="Bakacak Köfte"
                width={140}
                height={48}
                style={{ objectFit: "contain", height: "40px", width: "auto", display: "block" }}
              />
            </div>
            <p style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#AAA", lineHeight: 1.7 }}>
              Türkiye&apos;nin en hızlı büyüyen food truck franchise markası. Lezzeti, sistemle buluşturuyoruz.
            </p>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#AAA", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#AAA")}
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "#AAA", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#AAA")}
              >
                <MessageSquareShare size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-red)", marginBottom: "1.25rem" }}>
              Sayfalar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/", label: "Anasayfa" },
                { href: "/hakkimizda", label: "Hakkımızda" },
                { href: "/blog", label: "Blog" },
                { href: "/iletisim", label: "İletişim" },
                { href: "/basvuru", label: "Bayilik Başvurusu" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{ color: "#CCC", fontSize: "0.9rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-white)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#CCC")}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-red)", marginBottom: "1.25rem" }}>
              İletişim
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <Mail size={16} style={{ color: "var(--color-red)", marginTop: "2px", flexShrink: 0 }} />
                <a
                  href="mailto:bayilik@bakacakkofte.com"
                  style={{ color: "#CCC", fontSize: "0.9rem", textDecoration: "none" }}
                >
                  bayilik@bakacakkofte.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <MapPin size={16} style={{ color: "var(--color-red)", marginTop: "2px", flexShrink: 0 }} />
                <span style={{ color: "#CCC", fontSize: "0.9rem" }}>Bolu, Türkiye</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 style={{ fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-red)", marginBottom: "1.25rem" }}>
              Hemen Başla
            </h3>
            <p style={{ color: "#AAA", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
              Kendi food truck işini kurmaya hazır mısın? Başvuru formunu doldur, 24 saat içinde geri dönelim.
            </p>
            <Link href="/basvuru" className="btn-red" style={{ fontSize: "0.8rem", padding: "0.7rem 1.5rem" }}>
              Ücretsiz Başvur
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid #2A2A2A",
            marginTop: "3rem",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <p style={{ color: "#666", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Bakacak Köfte. Tüm hakları saklıdır.
          </p>
          <p style={{ color: "#666", fontSize: "0.8rem" }}>
            Bayilik & Franchise sistemi
          </p>
        </div>
      </div>
    </footer>
  );
}
