"use client";

import { Target, TrendingUp, Heart, Users } from "lucide-react";

const profiles = [
  {
    icon: <Target size={24} />,
    title: "Girişimci Ruh",
    desc: "Kendi işini kurmak isteyen, bağımsız çalışmayı seven, motive ve kararlı biri misin?",
    match: true,
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Ek Gelir Arayanlar",
    desc: "Mevcut işine ek olarak food truck ile ikinci gelir kaynağı oluşturmak istiyorsan.",
    match: true,
  },
  {
    icon: <Heart size={24} />,
    title: "Yemek Tutkusu",
    desc: "Yemek yapmayı seven, insanlarla iletişimi güçlü, müşteri odaklı bir kişilik.",
    match: true,
  },
  {
    icon: <Users size={24} />,
    title: "Aile İşi",
    desc: "Aile ile birlikte yönetilebilecek, nesiller boyu büyütülebilecek bir iş modeli.",
    match: true,
  },
];

export default function TargetProfile() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-gray-light)" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Food Truck Bayii Profili</span>
          {/* H2 — LSI: franchise bayi şartları, kendi işini kurmak */}
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Food Truck Franchise Bayisi{" "}
            <span style={{ color: "var(--color-red)" }}>Olmak İçin Gereken Profil</span>
          </h2>
          <div className="divider-red" style={{ margin: "1.25rem auto" }} />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Karavan Köfte bayilik şartları arasında gıda sektörü deneyimi aranmaz.
            Her başvuruyu değerlendiriyoruz — doğru eşleşme için profiline bak.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          {profiles.map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: "var(--color-white)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
                padding: "2rem 1.75rem",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(204,20,20,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-red)",
                  marginBottom: "1.25rem",
                }}
              >
                {p.icon}
              </div>
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "0.6rem" }}>{p.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-gray)", lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
