import Image from "next/image";
import { CheckCircle } from "lucide-react";

const reasons = [
  {
    title: "Tanınan Köfte Markası",
    desc: "İbrahim&apos;in Yeri&apos;nin imza lezzeti — bayilik alır almaz hazır müşteri tabanı ve marka bilinirliğiyle başlıyorsunuz. Müşteri kazanmak için yıllarca beklemenize gerek yok.",
  },
  {
    title: "Tam Eğitim ve Mentorluk",
    desc: "Tarif, hazırlık tekniği, müşteri ilişkileri, günlük operasyon — 5 günlük yoğun franchise eğitimi. Sertifika ve üniformalar pakete dahil.",
  },
  {
    title: "Merkezi Tedarik Zinciri",
    desc: "Malzeme tedariki merkezi depodan gerçekleşir. Kalite ve fiyat kontrolü bizde — siz sadece satışa odaklanın.",
  },
  {
    title: "Tam Donanımlı Karavan",
    desc: "Profesyonel mutfak ekipmanıyla donanmış food truck teslimata hazır. Ek yatırım veya ekipman alımı gerekmez.",
  },
  {
    title: "Dijital Pazarlama Desteği",
    desc: "Sosyal medya içerikleri, tanıtım görselleri, yerel reklam şablonları — hazır dijital pazarlama paketi bayilik anlaşmasına dahil.",
  },
  {
    title: "Esnek Lokasyon Özgürlüğü",
    desc: "Şehir, ilçe veya etkinlik bazlı çalışma özgürlüğü. Festival, pazar, kurumsal etkinlik — food truck bayiliği sabit mekân zorunluluğu olmaksızın çalışır.",
  },
];

export default function WhyUs() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          {/* Sol: görsel kolaj */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "3/4" }}>
                <Image
                  src="/images/food-truck-customers.jpg"
                  alt="Karavan köfte müşterileri food truck önünde"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "var(--color-red)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 900 }}>%40+</div>
                <div style={{ fontSize: "0.75rem", opacity: 0.85, letterSpacing: "0.05em" }}>BRÜT KÂR MARJI</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", paddingTop: "2rem" }}>
              <div
                style={{
                  backgroundColor: "var(--color-black)",
                  borderRadius: "8px",
                  padding: "1.25rem",
                  color: "white",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: 900 }}>48s</div>
                <div style={{ fontSize: "0.75rem", color: "#AAA", letterSpacing: "0.05em" }}>KURULUM SÜRESİ</div>
              </div>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "3/4" }}>
                <Image
                  src="/images/food-truck-festival.jpg"
                  alt="Festival alanında karavan köfte food truck"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Sağ: sebepler */}
          <div>
            <span className="tag-red" style={{ marginBottom: "1rem" }}>Neden Karavan Köfte Bayiliği?</span>
            {/* H2 — ikincil kelime: gıda bayiliği veren firmalar, fast food bayilik */}
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Gıda Bayiliği Veren Firmalar Arasında{" "}
              <span style={{ color: "var(--color-red)" }}>Fark Yaratan</span>{" "}
              6 Avantaj
            </h2>
            <div className="divider-red" style={{ marginBottom: "1.25rem" }} />
            <p className="section-sub" style={{ marginBottom: "2rem" }}>
              Fast food bayilik seçenekleri arasında Karavan Köfte, en düşük işletme maliyeti
              ve en yüksek marka desteğini bir arada sunan food truck franchise sistemidir.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {reasons.map((r) => (
                <div key={r.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <CheckCircle
                    size={20}
                    style={{ color: "var(--color-red)", flexShrink: 0, marginTop: "2px" }}
                  />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.2rem" }}>{r.title}</div>
                    <div
                      style={{ fontSize: "0.85rem", color: "var(--color-gray)", lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: r.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
