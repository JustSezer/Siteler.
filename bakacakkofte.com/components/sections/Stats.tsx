const stats = [
  { num: "30+", label: "Yıllık Tarif Mirası", desc: "Köfte franchise'ında kanıtlanmış lezzet" },
  { num: "100+", label: "Hedef Bayi Noktası", desc: "Türkiye geneli food truck bayilik" },
  { num: "48s", label: "Franchise Kurulum", desc: "Başvurudan ilk satışa en hızlı süreç" },
  { num: "%40+", label: "Brüt Kâr Marjı", desc: "Düşük yatırımlı franchise'da yüksek getiri" },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "linear-gradient(135deg, var(--color-red) 0%, var(--color-red-dark) 100%)",
        color: "var(--color-white)",
      }}
    >
      <div className="container-site" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                padding: "1.5rem 1rem",
                borderRight: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                  fontWeight: 900,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {s.num}
              </div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.25rem" }}>{s.label}</div>
              <div style={{ fontSize: "0.8rem", opacity: 0.75 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
