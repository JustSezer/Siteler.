"use client";

import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

export default function IletisimPage() {
  const [form, setForm] = useState({ ad: "", email: "", konu: "", mesaj: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

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
          <span className="tag-red" style={{ marginBottom: "1rem" }}>İletişim</span>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Bizimle <span style={{ color: "var(--color-red)" }}>İletişime</span> Geç
          </h1>
          <p style={{ color: "#AAA", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "520px" }}>
            Bayilik soruları, genel sorular veya iş birlikleri için 24 saat içinde geri döneceğiz.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-white)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
            {/* Info */}
            <div>
              <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: "2rem" }}>Bize Ulaşın</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
                {[
                  { icon: <Mail size={20} />, title: "E-posta", value: "bayilik@bakacakkofte.com", href: "mailto:bayilik@bakacakkofte.com" },
                  { icon: <MapPin size={20} />, title: "Adres", value: "Bolu, Türkiye", href: "#" },
                ].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      padding: "1.25rem",
                      border: "1px solid var(--color-border)",
                      borderRadius: "8px",
                      textDecoration: "none",
                      color: "inherit",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-red)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  >
                    <div style={{ color: "var(--color-red)", marginTop: "2px" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-gray)", marginBottom: "0.25rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                style={{
                  padding: "1.5rem",
                  backgroundColor: "rgba(204,20,20,0.05)",
                  border: "1px solid rgba(204,20,20,0.2)",
                  borderRadius: "8px",
                }}
              >
                <p style={{ fontSize: "0.875rem", color: "var(--color-gray)", lineHeight: 1.7 }}>
                  <strong style={{ color: "var(--color-black)" }}>Bayilik başvurusu için</strong> aşağıdaki formu veya{" "}
                  <a href="/basvuru" style={{ color: "var(--color-red)", fontWeight: 600 }}>başvuru sayfasını</a>{" "}
                  kullanmanızı tavsiye ederiz. Daha hızlı değerlendirme sağlar.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 style={{ fontWeight: 700, fontSize: "1.5rem", marginBottom: "2rem" }}>Mesaj Gönder</h2>

              {sent ? (
                <div
                  style={{
                    padding: "2rem",
                    backgroundColor: "rgba(34,197,94,0.08)",
                    border: "1px solid rgba(34,197,94,0.3)",
                    borderRadius: "8px",
                    textAlign: "center",
                  }}
                >
                  <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Mesajınız iletildi!</h3>
                  <p style={{ color: "var(--color-gray)", fontSize: "0.9rem" }}>
                    En geç 24 saat içinde geri dönüş yapacağız.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                  {[
                    { name: "ad", label: "Ad Soyad", type: "text", placeholder: "Adınız Soyadınız", required: true },
                    { name: "email", label: "E-posta", type: "email", placeholder: "ornek@mail.com", required: true },
                    { name: "konu", label: "Konu", type: "text", placeholder: "Mesajınızın konusu", required: false },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        htmlFor={field.name}
                        style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}
                      >
                        {field.label} {field.required && <span style={{ color: "var(--color-red)" }}>*</span>}
                      </label>
                      <input
                        id={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        required={field.required}
                        value={form[field.name as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "0.8rem 1rem",
                          border: "1px solid var(--color-border)",
                          borderRadius: "6px",
                          fontSize: "0.9rem",
                          outline: "none",
                          backgroundColor: "var(--color-cream)",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-red)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label htmlFor="mesaj" style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                      Mesaj <span style={{ color: "var(--color-red)" }}>*</span>
                    </label>
                    <textarea
                      id="mesaj"
                      rows={5}
                      required
                      placeholder="Mesajınızı buraya yazın..."
                      value={form.mesaj}
                      onChange={(e) => setForm({ ...form, mesaj: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "0.8rem 1rem",
                        border: "1px solid var(--color-border)",
                        borderRadius: "6px",
                        fontSize: "0.9rem",
                        outline: "none",
                        resize: "vertical",
                        backgroundColor: "var(--color-cream)",
                        transition: "border-color 0.2s",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--color-red)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                    />
                  </div>

                  <button type="submit" className="btn-red" style={{ justifyContent: "center" }}>
                    <Send size={16} /> Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
