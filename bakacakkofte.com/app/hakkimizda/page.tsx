import type { Metadata } from "next";
import { Heart, Award, Flame, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda | Karavan Köfte Food Truck Franchise Hikayemiz",
  description: "Karavan Köfte'nin hikayesi: Bolu Dağı'nın 30 yıllık köfte tarifi food truck franchise sistemine dönüşüyor. Misyonumuz, değerlerimiz ve Türkiye geneli büyüme hedefimiz.",
  alternates: {
    canonical: "https://bakacakkofte.com/hakkimizda",
  },
};

const values = [
  {
    icon: <Flame size={24} />,
    title: "Gerçek Lezzet",
    desc: "Köftemiz kimyasal katkı içermeyen, Bolu Dağı'nın doğal baharatlarıyla hazırlanan özgün tarif.",
  },
  {
    icon: <Heart size={24} />,
    title: "İnsan Odaklı",
    desc: "Hem bayilerimize hem müşterilerimize karşı şeffaf, dürüst ve destekleyici bir iş yürütürüz.",
  },
  {
    icon: <Award size={24} />,
    title: "Kalite Güvencesi",
    desc: "Her noktada aynı tadı, aynı sunum standardını, aynı hijyen koşullarını garanti ediyoruz.",
  },
  {
    icon: <Users size={24} />,
    title: "Birlikte Büyüme",
    desc: "Bayilerimizin başarısı bizim başarımız. Onlar kazandıkça biz büyürüz.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-black) 0%, #1a0505 100%)",
          color: "white",
          padding: "8rem 0 6rem",
        }}
      >
        <div className="container-site">
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Hikayemiz</span>
          {/* H1 — birincil: karavan köfte franchise hikayesi */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              maxWidth: "700px",
            }}
          >
            Karavan Köfte:{" "}
            <span style={{ color: "var(--color-red)" }}>Türkiye&apos;nin Mobil Köfte Franchise Markası</span>
          </h1>
          <p style={{ color: "#AAA", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "620px" }}>
            İbrahim&apos;in Yeri&apos;nin imza köftesini food truck konseptiyle Türkiye geneline taşıma misyonuyla yola çıktık.
            30 yılı aşkın tarihin emanetçisiyiz.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
            <div>
              <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
                Nereden Geldik?
              </h2>
              <div className="divider-red" style={{ marginBottom: "1.5rem" }} />
              <p style={{ color: "var(--color-gray)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                Bolu Dağı eteklerinde, İbrahim&apos;in Yeri olarak başlayan bu lezzet yolculuğu, onlarca yıl boyunca
                müşterilerin kalbinde taht kurdu. Anadolu mutfağının özünü köfteye işleyen bu tarif,
                kuşaktan kuşağa aktarıldı.
              </p>
              <p style={{ color: "var(--color-gray)", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
                2024 yılında bu lezzetin coğrafi sınırlarını aşması gerektiğine karar verdik.
                Food truck modeli; düşük maliyetiyle, mobil yapısıyla ve güçlü marka potansiyeliyle
                bizim için biçilmiş kaftandı.
              </p>
              <p style={{ color: "var(--color-gray)", lineHeight: 1.8, fontSize: "0.95rem" }}>
                Bugün Bakacak Köfte, Türkiye&apos;nin en hızlı büyüyen food truck franchise sistemi olmayı hedeflemektedir.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                {
                  title: "Köklü Tarif",
                  desc: "İbrahim&apos;in Yeri&apos;nin köfte tarifi, Bolu Dağı eteklerinde onlarca yıl boyunca müşterilerin favorisi oldu. Bölgenin ikonik lezzeti haline geldi.",
                },
                {
                  title: "Food Truck&apos;a Adım",
                  desc: "Lezzetin coğrafi sınırları aşması gerektiğine karar vererek food truck franchise modelini hayata geçirdik.",
                },
                {
                  title: "Türkiye Geneline Yayılım",
                  desc: "Kanıtlanmış sistem ve güçlü marka kimliğiyle Türkiye&apos;nin her köşesine ulaşmayı hedefliyoruz.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  style={{
                    padding: "1.25rem 1.5rem",
                    backgroundColor: "var(--color-cream)",
                    borderLeft: "3px solid var(--color-red)",
                    borderRadius: "0 6px 6px 0",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.4rem", color: "var(--color-black)" }}
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <div style={{ fontSize: "0.875rem", color: "var(--color-gray)", lineHeight: 1.7 }}
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-site">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="tag-red" style={{ marginBottom: "1rem" }}>Değerlerimiz</span>
            <h2 className="section-title">Bizi Biz Yapan Nedir?</h2>
            <div className="divider-red" style={{ margin: "1.25rem auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  padding: "2rem",
                  backgroundColor: "var(--color-white)",
                  borderRadius: "8px",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(204,20,20,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--color-red)",
                    marginBottom: "1.25rem",
                  }}
                >
                  {v.icon}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--color-gray)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
