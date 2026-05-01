import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Mehmet A.",
    city: "Ankara",
    text: "İlk aydan kâra geçtim. Beklentimin çok üzerinde bir başlangıç oldu. Ekip her adımda yanımdaydı.",
    months: "3. ay bayisi",
    rating: 5,
  },
  {
    name: "Fatma K.",
    city: "İstanbul",
    text: "Tarife inanmak gerekmiyordu — müşteriler zaten biliyordu. Marka gücü gerçekten çok büyük.",
    months: "6. ay bayisi",
    rating: 5,
  },
  {
    name: "Serkan T.",
    city: "Bursa",
    text: "Hafta sonları festival ve etkinliklerde çalışıyorum. Esnek model bana çok uydu. Harika bir iş fırsatı.",
    months: "5. ay bayisi",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-cream-2)" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Referanslar</span>
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Bayilerimiz Ne Diyor?
          </h2>
          <div className="divider-red" style={{ margin: "1.25rem auto" }} />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Gerçek bayilerimizin gerçek deneyimleri. Başarıları, bizim başarımız.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                backgroundColor: "var(--color-white)",
                borderRadius: "12px",
                overflow: "hidden",
                border: "1px solid var(--color-border)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Card body */}
              <div style={{ padding: "1.75rem", flex: 1, display: "flex", flexDirection: "column" }}>
                <Quote size={24} style={{ color: "var(--color-red)", opacity: 0.4, marginBottom: "0.75rem" }} />
                {/* Stars */}
                <div style={{ display: "flex", gap: "2px", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                  ))}
                </div>

                <p style={{ fontSize: "0.95rem", lineHeight: 1.75, color: "var(--color-black-2)", marginBottom: "1.5rem", fontStyle: "italic", flex: 1 }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      backgroundColor: "var(--color-red)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      flexShrink: 0,
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-gray)" }}>
                      {t.city} · {t.months}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof bar */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.5rem 2rem",
            backgroundColor: "var(--color-white)",
            border: "1px solid var(--color-border)",
            borderRadius: "8px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {[
            { val: "4.9/5", label: "Ortalama Bayi Memnuniyeti" },
            { val: "98%", label: "Yenileme Oranı" },
            { val: "0", label: "Bayi Kaybı (İlk Yıl)" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--color-red)" }}>{item.val}</div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-gray)", letterSpacing: "0.05em" }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
