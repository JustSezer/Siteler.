"use client";

const items = [
  "Bakacak Köfte",
  "Food Truck Franchise",
  "Karli Is Modeli",
  "Tam Egitim",
  "Yerli Marka",
  "Hizli Kurulum",
  "Kanitlanmis Sistem",
  "Turkiye Geneli",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];

  return (
    <div
      style={{
        backgroundColor: "var(--color-red)",
        padding: "0.875rem 0",
        overflow: "hidden",
        position: "relative",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          gap: "3rem",
          whiteSpace: "nowrap",
          animation: "marquee 25s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              color: "var(--color-white)",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.5)",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
