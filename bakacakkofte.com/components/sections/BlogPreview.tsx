"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    slug: "food-truck-franchise-nasil-kurulur",
    title: "Food Truck Franchise Nasıl Kurulur? 2024 Kapsamlı Rehber",
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
    excerpt: "Mehmet'in sıfırdan başladığı yolculuğu, karşılaştığı zorluklar ve öğrendikleri. Gerçek bayi deneyimi.",
    date: "10 Mart 2025",
    readTime: "6 dk",
    category: "Bayi Hikayeleri",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-site">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span className="tag-red" style={{ marginBottom: "0.75rem" }}>Food Truck Rehberi</span>
            {/* H2 — LSI: food truck franchise rehberi, bayilik blog */}
            <h2 className="section-title">Food Truck &amp; Franchise Rehberi</h2>
          </div>
          <Link href="/blog" className="btn-outline" style={{ padding: "0.7rem 1.5rem", fontSize: "0.85rem" }}>
            Tüm Yazılar <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {posts.map((post) => (
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
              {/* Color bar */}
              <div style={{ height: "4px", backgroundColor: "var(--color-red)" }} />

              <div style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-red)",
                      backgroundColor: "rgba(204,20,20,0.08)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "3px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.75rem", color: "var(--color-gray)" }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 style={{ fontWeight: 700, fontSize: "1rem", lineHeight: 1.45, marginBottom: "0.75rem" }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "var(--color-black)", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-gray)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "var(--color-gray)" }}>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--color-red)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.25rem" }}
                  >
                    Oku <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
