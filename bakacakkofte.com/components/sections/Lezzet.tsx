import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beef, Leaf, Flame, XCircle } from "lucide-react";

const ingredients = [
  { icon: <Beef size={20} />, label: "Taze Dana Eti" },
  { icon: <Leaf size={20} />, label: "Dogal Baharatlar" },
  { icon: <Flame size={20} />, label: "Mangal Kozu" },
  { icon: <XCircle size={20} />, label: "Katki Yok" },
];

export default function Lezzet() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-white)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
        }}
      >
        {/* Image side — full bleed */}
        <div style={{ position: "relative", minHeight: "520px" }}>
          <Image
            src="/images/kofte-grilled-meat.jpg"
            alt="Bakacak Kofte izgarasi"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              backgroundColor: "var(--color-red)",
              color: "white",
              padding: "0.6rem 1.2rem",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Gercek Mangal Lezzeti
          </div>
        </div>

        {/* Content side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "var(--color-black)",
            color: "var(--color-white)",
            padding: "5rem 3rem",
          }}
        >
          <span className="tag-red" style={{ marginBottom: "1.25rem" }}>Lezzet</span>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            30 Yillik Tarif,{" "}
            <span style={{ color: "var(--color-red)" }}>Degismeyen</span>{" "}
            Lezzet
          </h2>
          <div className="divider-red" style={{ marginBottom: "1.5rem" }} />

          <p style={{ color: "#AAA", lineHeight: 1.8, marginBottom: "1.25rem", fontSize: "0.95rem" }}>
            Bakacak Köfte&apos;nin sırrı basit: doğru et seçimi, doğru baharat, doğru ısı.
            Bolu Dağı&apos;nın temiz havasında geliştirilmiş bu tarif, onlarca yıldır
            müşterilerin favorisi.
          </p>

          <p style={{ color: "#AAA", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
            Katkı maddesi yok. Yapay aroma yok. Sadece gerçek et, taze malzeme ve
            ustanın elleri. Her lokmada fark edilir.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.75rem",
              marginBottom: "2.5rem",
              padding: "1.25rem",
              border: "1px solid #333",
              borderRadius: "8px",
            }}
          >
            {ingredients.map((item) => (
              <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
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
                  {item.icon}
                </div>
                <span style={{ fontSize: "0.82rem", color: "#CCC", fontWeight: 600, letterSpacing: "0.03em" }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <Link href="/basvuru" className="btn-red" style={{ alignSelf: "flex-start" }}>
            Sisteme Katil <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Full width image strip with quote */}
      <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
        <Image
          src="/images/grilled-meat-plate.jpg"
          alt="Izgara kofte tabagi"
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(10,10,10,0.75) 0%, rgba(10,10,10,0.25) 50%, rgba(10,10,10,0.75) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ textAlign: "center", color: "white", padding: "0 2rem" }}>
            <p
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.8rem)",
                fontWeight: 800,
                fontStyle: "italic",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              &ldquo;Bir kez tatsan, ikincisini istersin.&rdquo;
            </p>
            <p style={{ fontSize: "0.8rem", color: "#CCC", marginTop: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Musteri Gorusleri
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
