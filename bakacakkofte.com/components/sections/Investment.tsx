import Link from "next/link";
import { ArrowRight, CheckCircle, Info } from "lucide-react";

const included = [
  "Tam donanımlı food truck karavan",
  "5 günlük eğitim programı",
  "İlk stok malzeme seti",
  "Marka lisansı & logo hakları",
  "Sosyal medya başlangıç paketi",
  "6 ay teknik destek",
  "Üniformalar & ekipman seti",
  "Sertifika & ruhsat danışmanlığı",
];

export default function Investment() {
  return (
    <section
      className="section-pad"
      style={{
        background: "linear-gradient(to bottom, var(--color-black) 0%, var(--color-black-2) 100%)",
        color: "var(--color-white)",
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Left: Info */}
          <div>
            <span className="tag-red" style={{ marginBottom: "1rem" }}>Franchise Yatırım Paketi</span>
            {/* H2 — LSI: düşük yatırımlı franchise, food truck maliyeti */}
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" }}>
              Düşük Yatırımlı Franchise:{" "}
              <span style={{ color: "var(--color-red)" }}>Pakete Neler Dahil?</span>
            </h2>
            <div className="divider-red" style={{ marginBottom: "1.5rem" }} />
            <p style={{ color: "#AAA", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.95rem" }}>
              Şeffaf fiyatlandırma politikasıyla gizli maliyet yok. Karavan Köfte food truck franchise paketi;
              araç, ekipman, eğitim ve ilk stok dahil eksiksiz bir başlangıç sunar.
              Detaylı yatırım analizi için başvuru yapın.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.25rem",
                backgroundColor: "rgba(204,20,20,0.1)",
                border: "1px solid rgba(204,20,20,0.3)",
                borderRadius: "6px",
                marginBottom: "2rem",
              }}
            >
              <Info size={18} style={{ color: "var(--color-red)", flexShrink: 0 }} />
              <p style={{ fontSize: "0.85rem", color: "#CCC" }}>
                Kesin fiyat bilgisi görüşme sonrası iletilir. Bölge ve model seçimine göre değişkenlik gösterir.
              </p>
            </div>

            <Link href="/basvuru" className="btn-red" style={{ fontSize: "1rem" }}>
              Fiyat Teklifi Al <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: Included list */}
          <div
            style={{
              backgroundColor: "var(--color-black-3)",
              border: "1px solid #333",
              borderRadius: "12px",
              padding: "2.5rem 2rem",
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: "2rem", color: "var(--color-red)" }}>
              Pakete Dahil Olanlar
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {included.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                  <CheckCircle size={18} style={{ color: "var(--color-red)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.9rem", color: "#CCC" }}>{item}</span>
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid #333",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "0.8rem", color: "#666", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Başlangıç Yatırımı
              </div>
              <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--color-white)" }}>
                Teklif Al
              </div>
              <div style={{ fontSize: "0.8rem", color: "#666" }}>Görüşme sonrası kişisel fiyat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
