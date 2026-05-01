"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Food truck bayilik almak için ne kadar yatırım gerekiyor?",
    a: "Karavan Köfte food truck franchise paketi; araç, ekipman, eğitim ve ilk stok dahil eksiksiz bir başlangıç sunar. Kesin yatırım tutarı bölge ve araç modeline göre değiştiğinden başvuru sonrası kişisel teklif iletilmektedir.",
  },
  {
    q: "Sıfır deneyimle food truck bayisi olabilir miyim?",
    a: "Evet. Karavan Köfte bayilik şartları arasında gıda sektörü deneyimi aranmaz. 5 günlük yoğun eğitim programıyla tarif, hazırlık tekniği ve günlük operasyonu tamamen öğreniyorsunuz. Sertifika ve üniformalar pakete dahildir.",
  },
  {
    q: "Food truck franchise Türkiye'de kârlı mı?",
    a: "Sabit mağazaya kıyasla düşük kira ve işletme maliyeti nedeniyle food truck modeli, doğru lokasyonda ortalama 8–14 ay içinde yatırım geri dönüşü sağlayabilmektedir. Brüt kâr marjı sektör ortalamasının üzerindedir.",
  },
  {
    q: "Hangi şehirlerde food truck bayiliği açılabilir?",
    a: "Türkiye'nin tüm illerinde bayilik fırsatı mevcuttur. İstanbul, Ankara, İzmir, Bursa ve Antalya'da bölgeler aktif olarak açık. Festival bölgeleri, turistik alanlar ve kalabalık çarşı noktaları öncelikli değerlendirilir.",
  },
  {
    q: "Food truck bayiliğinde malzeme tedariki nasıl sağlanır?",
    a: "Tüm malzemeler merkezi depomuzdaki tedarik zincirinden sağlanır. Kalite standardını ve köfte tarifinin özgünlüğünü korumak adına başka tedarikçi kullanımına izin verilmemektedir.",
  },
  {
    q: "Franchise başvurusundan açılışa ne kadar sürer?",
    a: "Karavan Köfte, onaylanan başvurudan itibaren ortalama 48 saat içinde araç teslimi gerçekleştirmektedir. Eğitim tamamlandıktan sonra açılış günü yerinde destek sağlanır.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>SSS</span>
          {/* H2 — LSI: food truck bayilik soruları, franchise bilgi */}
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Food Truck Bayilik Hakkında{" "}
            <span style={{ color: "var(--color-red)" }}>Sık Sorulan Sorular</span>
          </h2>
          <div className="divider-red" style={{ margin: "1.25rem auto" }} />
        </div>

        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                overflow: "hidden",
                transition: "border-color 0.2s",
                borderColor: open === i ? "var(--color-red)" : "var(--color-border)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.25rem 1.5rem",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
                aria-expanded={open === i}
              >
                <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--color-black)" }}>{faq.q}</span>
                <ChevronDown
                  size={20}
                  style={{
                    color: "var(--color-red)",
                    flexShrink: 0,
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s",
                  }}
                />
              </button>
              {open === i && (
                <div style={{ padding: "0 1.5rem 1.25rem", fontSize: "0.9rem", color: "var(--color-gray)", lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
