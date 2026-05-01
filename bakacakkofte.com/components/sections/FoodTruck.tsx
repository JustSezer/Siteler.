import Image from "next/image";
import { Flame, Shield, Gauge, Wrench } from "lucide-react";

const features = [
  { icon: <Flame size={20} />, label: "Profesyonel Izgaralı Ocak" },
  { icon: <Shield size={20} />, label: "Gıda Güvenliği Onaylı" },
  { icon: <Gauge size={20} />, label: "Hızlı Servis Düzeni" },
  { icon: <Wrench size={20} />, label: "Kolay Bakım & Temizlik" },
];

export default function FoodTruck() {
  return (
    <section
      className="section-pad"
      style={{
        background: "linear-gradient(to right, var(--color-black) 50%, var(--color-black-2) 100%)",
        color: "var(--color-white)",
      }}
    >
      <div className="container-site">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Images: 2 stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div
              style={{
                position: "relative",
                borderRadius: "12px",
                overflow: "hidden",
                aspectRatio: "16/9",
              }}
            >
              <Image
                src="/images/food-truck-exterior.jpg"
                alt="Bakacak Köfte food truck dışarıdan"
                fill
                style={{ objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 50%)",
                }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="/images/food-truck-seller.jpg"
                  alt="Food truck satıcısı"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "relative", borderRadius: "8px", overflow: "hidden", aspectRatio: "4/3" }}>
                <Image
                  src="/images/food-truck-service.jpg"
                  alt="Food truck müşteri servisi"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="tag-red" style={{ marginBottom: "1rem" }}>Food Truck Ekipmanı</span>
            {/* H2 — LSI: karavan food truck, franchise araç paketi */}
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" }}>
              Franchise Araç Paketi:{" "}
              <span style={{ color: "var(--color-red)" }}>Tam Donanımlı Karavan</span>
            </h2>
            <div className="divider-red" style={{ marginBottom: "1.5rem" }} />
            <p style={{ color: "#AAA", lineHeight: 1.75, marginBottom: "2rem", fontSize: "0.95rem" }}>
              Karavan Köfte food truck franchise paketi sadece bir araç değil, hazır bir iş sistemi. Profesyonel
              mutfak ekipmanları, gıda güvenliği onaylı çalışma alanı ve güçlü marka kimliğiyle
              her lokasyonda fark yaratır. Ek yatırım gerektirmez.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {features.map((f) => (
                <div key={f.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "6px",
                      backgroundColor: "rgba(204,20,20,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-red)",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>
                  <span style={{ fontSize: "0.85rem", color: "#CCC" }}>{f.label}</span>
                </div>
              ))}
            </div>

            {/* Extra detail */}
            <div
              style={{
                backgroundColor: "rgba(204,20,20,0.08)",
                border: "1px solid rgba(204,20,20,0.25)",
                borderRadius: "8px",
                padding: "1.25rem",
              }}
            >
              <p style={{ fontSize: "0.85rem", color: "#BBB", lineHeight: 1.7 }}>
                Her karavan teslim öncesi <strong style={{ color: "white" }}>tam teknik kontrol</strong> geçer.
                Ekipman garantisi ve bakım desteği pakete dahildir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
