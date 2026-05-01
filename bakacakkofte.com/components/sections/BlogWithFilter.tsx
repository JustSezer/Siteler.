"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

const categories = ["Tümü", "Franchise", "Strateji", "Bayi Hikayeleri", "Hikaye", "İşletme"];

const posts = [
  {
    slug: "food-truck-franchise-nasil-kurulur",
    title: "Food Truck Franchise Nasıl Kurulur? 2025 Kapsamlı Rehber",
    excerpt: "Food truck işine girmeden önce bilmeniz gereken tüm adımlar, maliyetler ve dikkat edilmesi gerekenler.",
    date: "15 Ocak 2025",
    readTime: "7 dk",
    category: "Franchise",
  },
  {
    slug: "kofte-food-truck-karlik-stratejileri",
    title: "Kış Mevsiminde Food Truck Satışlarını Artırmanın 8 Yolu",
    excerpt: "Soğuk havalarda müşteri çekmenin sırları. Etkinlik planlaması, menü uyarlaması ve konum stratejileri.",
    date: "22 Şubat 2025",
    readTime: "5 dk",
    category: "Strateji",
  },
  {
    slug: "franchise-bayi-deneyimi",
    title: "Ankara'dan Bir Bayinin 6 Aylık Yolculuğu",
    excerpt: "Mehmet'in sıfırdan başladığı yolculuğu, karşılaştığı zorluklar ve öğrendikleri.",
    date: "10 Mart 2025",
    readTime: "6 dk",
    category: "Bayi Hikayeleri",
  },
  {
    slug: "food-truck-lokasyon-secimi",
    title: "Doğru Lokasyon = Başarılı Food Truck: 5 Altın Kural",
    excerpt: "Nereden çalışacağınız, ne kadar kazanacağınızı belirler. Lokasyon seçiminde dikkat edilmesi gerekenler.",
    date: "2 Nisan 2025",
    readTime: "4 dk",
    category: "Strateji",
  },
  {
    slug: "kofte-tarihce-bakacak",
    title: "Bakacak Köftesinin 30 Yıllık Hikayesi",
    excerpt: "Bolu Dağı'nın efsane lezzetinin perde arkası. Ustanın tutkuyla koruduğu tarif.",
    date: "20 Nisan 2025",
    readTime: "8 dk",
    category: "Hikaye",
  },
  {
    slug: "food-truck-muhasebe-ipuclari",
    title: "Food Truck İşletmesinde Muhasebe: Başlangıç Rehberi",
    excerpt: "Gider takibi, kâr hesabı, vergi yükümlülükleri. Sayılarla boğulmadan işletmenizi yönetin.",
    date: "5 Mayıs 2025",
    readTime: "6 dk",
    category: "İşletme",
  },
];

export default function BlogWithFilter() {
  const [active, setActive] = useState("Tümü");

  const filtered = active === "Tümü" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category filter */}
      <div style={{ backgroundColor: "var(--color-white)", borderBottom: "1px solid var(--color-border)" }}>
        <div
          className="container-site"
          style={{ paddingTop: "1rem", paddingBottom: "1rem", display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "100px",
                border: `1px solid ${active === cat ? "var(--color-red)" : "var(--color-border)"}`,
                backgroundColor: active === cat ? "var(--color-red)" : "transparent",
                color: active === cat ? "white" : "var(--color-gray)",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Post grid */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-site">
          {filtered.length === 0 ? (
            <p style={{ textAlign: "center", color: "var(--color-gray)", padding: "3rem 0" }}>
              Bu kategoride henüz yazı yok.
            </p>
          ) : (
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}
            >
              {filtered.map((post) => (
                <article
                  key={post.slug}
                  style={{
                    backgroundColor: "var(--color-white)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "8px",
                    overflow: "hidden",
                    transition: "transform 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div style={{ height: "4px", backgroundColor: "var(--color-red)" }} />
                  <div style={{ padding: "1.75rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          color: "var(--color-red)",
                          backgroundColor: "rgba(204,20,20,0.08)",
                          padding: "0.2rem 0.6rem",
                          borderRadius: "3px",
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: "var(--color-gray)" }}
                      >
                        <Clock size={12} /> {post.readTime}
                      </span>
                    </div>
                    <h2 style={{ fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.45, marginBottom: "0.75rem" }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "var(--color-black)", textDecoration: "none" }}>
                        {post.title}
                      </Link>
                    </h2>
                    <p style={{ fontSize: "0.875rem", color: "var(--color-gray)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.75rem", color: "var(--color-gray)" }}>{post.date}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "var(--color-red)",
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        Devamını Oku <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
