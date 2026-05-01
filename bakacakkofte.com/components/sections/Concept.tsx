"use client";

import { Truck, Star, Zap } from "lucide-react";

export default function Concept() {
  const items = [
    {
      icon: <Truck size={28} />,
      title: "Mobil Food Truck Modeli",
      desc: "Sabit kira yok, esnek lokasyon. Karavan köfte araçla festival, pazar ve çarşıda — müşteri neredeyse orada çalış. Geleneksel restorana kıyasla yüzde seksene kadar daha düşük işletme maliyeti.",
    },
    {
      icon: <Star size={28} />,
      title: "30 Yıllık Köfte Tarifi",
      desc: "Bakacak Mevki&apos;nin efsane köfte tarifi müşteriler tarafından zaten biliniyor. Franchise alır almaz marka bilinirliğine ve sadık müşteri tabanına kavuşuyorsunuz. Sıfırdan itibar inşa etmeye gerek yok.",
    },
    {
      icon: <Zap size={28} />,
      title: "Hızlı Franchise Kurulumu",
      desc: "Bayilik başvurusundan açılışa ortalama 48 saat. Karmaşık bürokrasi, uzun tedarik zincirleri, belirsiz süreçler yok. Eğitim tamamlandı, karavan hazır, ilk satış günü geliyor.",
    },
  ];

  return (
    <section id="konsept" className="section-pad" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-site">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "4rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Food Truck Franchise Neden Kazançlı?</span>
          {/* H2 — LSI: mobil yemek satışı, düşük yatırımlı franchise */}
          <h2 className="section-title" style={{ maxWidth: "680px" }}>
            Düşük Yatırımlı Franchise Modeli: Neden Food Truck?
          </h2>
          <div className="divider-red" style={{ marginTop: "1.25rem", marginBottom: "1.25rem" }} />
          <p className="section-sub" style={{ textAlign: "center" }}>
            Geleneksel restoran risklerini ortadan kaldır. Mobil yemek satışı modeliyle
            düşük sermaye, yüksek esneklik ve güçlü kâr marjı — Türkiye&apos;nin büyüyen
            sokak yemeği pazarında yerini al.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {items.map((item) => (
            <article
              key={item.title}
              style={{
                padding: "2.5rem 2rem",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                transition: "box-shadow 0.2s, transform 0.2s",
                backgroundColor: "var(--color-cream)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(204,20,20,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "rgba(204,20,20,0.08)",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-red)",
                  marginBottom: "1.5rem",
                }}
              >
                {item.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.75rem" }}>{item.title}</h3>
              <p style={{ color: "var(--color-gray)", lineHeight: 1.75, fontSize: "0.93rem" }}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
