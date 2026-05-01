const regions = [
  { name: "İstanbul", status: "Açık", color: "var(--color-red)" },
  { name: "Ankara", status: "Açık", color: "var(--color-red)" },
  { name: "İzmir", status: "Açık", color: "var(--color-red)" },
  { name: "Bursa", status: "Açık", color: "var(--color-red)" },
  { name: "Antalya", status: "Açık", color: "var(--color-red)" },
  { name: "Bolu", status: "Doldu", color: "#888" },
  { name: "Eskişehir", status: "Açık", color: "var(--color-red)" },
  { name: "Kocaeli", status: "Açık", color: "var(--color-red)" },
  { name: "Diğer İller", status: "Görüşmeye Açık", color: "#F59E0B" },
];

export default function Coverage() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Bayilik Bölgeleri</span>
          {/* H2 — LSI: food truck bayilik türkiye, şehir bazlı franchise */}
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Türkiye&apos;de Food Truck Bayilik:{" "}
            <span style={{ color: "var(--color-red)" }}>Açık Bölgeler</span>
          </h2>
          <div className="divider-red" style={{ margin: "1.25rem auto" }} />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Türkiye genelinde Karavan Köfte food truck franchise bölgeleri hızla dolmakta.
            İstanbul, Ankara, İzmir ve diğer illerde öncelikli bayi hakkınızı bugün ayırtın.
          </p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center", marginBottom: "3rem" }}>
          {regions.map((r) => (
            <div
              key={r.name}
              style={{
                border: `2px solid ${r.color}`,
                borderRadius: "6px",
                padding: "0.875rem 1.5rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                minWidth: "160px",
                justifyContent: "space-between",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>{r.name}</span>
              <span
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: r.color,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", fontSize: "0.8rem", color: "var(--color-gray)" }}>
            <span>
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "var(--color-red)", marginRight: "0.4rem" }} />
              Başvuruya Açık
            </span>
            <span>
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B", marginRight: "0.4rem" }} />
              Görüşmeye Açık
            </span>
            <span>
              <span style={{ display: "inline-block", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#888", marginRight: "0.4rem" }} />
              Doldu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
