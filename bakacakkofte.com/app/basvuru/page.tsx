"use client";

import { useState } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const sehirler = [
  "İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Adana", "Konya",
  "Eskişehir", "Kocaeli", "Mersin", "Trabzon", "Gaziantep", "Diğer",
];

const butceSecenekler = [
  "50.000 - 100.000 TL",
  "100.000 - 200.000 TL",
  "200.000 - 350.000 TL",
  "350.000 TL+",
  "Belirtmek istemiyorum",
];

export default function BasvuruPage() {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    ad: "", soyad: "", email: "",
    sehir: "", butce: "", deneyim: "", aciklama: "",
  });

  const update = (key: string, val: string) => setForm({ ...form, [key]: val });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const included = [
    "Tam donanımlı food truck karavan",
    "5 günlük eğitim programı",
    "İlk stok seti",
    "Marka lisansı",
    "Pazarlama materyalleri",
    "6 ay teknik destek",
  ];

  if (sent) {
    return (
      <section
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "var(--color-cream)",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "520px", padding: "2rem" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "50%",
              backgroundColor: "rgba(204,20,20,0.1)",
              border: "2px solid var(--color-red)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1.5rem",
            }}
          >
            <CheckCircle size={36} style={{ color: "var(--color-red)" }} />
          </div>
          <h1 style={{ fontWeight: 900, fontSize: "2rem", marginBottom: "1rem" }}>
            Başvurunuz Alındı!
          </h1>
          <p style={{ color: "var(--color-gray)", lineHeight: 1.75, marginBottom: "2rem" }}>
            <strong>{form.ad} {form.soyad}</strong>, başvurunuz için teşekkürler.
            Ekibimiz <strong>24 saat</strong> içinde <strong>{form.email}</strong> adresinize geri dönecek.
          </p>
          <div
            style={{
              padding: "1.5rem",
              backgroundColor: "rgba(204,20,20,0.05)",
              border: "1px solid rgba(204,20,20,0.2)",
              borderRadius: "8px",
              marginBottom: "2rem",
            }}
          >
            <p style={{ fontSize: "0.875rem", color: "var(--color-gray)" }}>
              Bayilik@bakacakkofte.com adresine onay maili gönderildi.
            </p>
          </div>
          <a href="/" className="btn-red">
            Anasayfaya Dön
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-black) 0%, #1a0505 100%)",
          color: "white",
          padding: "7rem 0 5rem",
        }}
      >
        <div className="container-site">
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Food Truck Bayilik Başvurusu</span>
          {/* H1 — birincil: food truck bayilik başvurusu */}
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" }}>
            Food Truck Bayilik Başvurusu:{" "}
            <span style={{ color: "var(--color-red)" }}>Karavan Köfte Franchise&apos;ına Katıl</span>
          </h1>
          <p style={{ color: "#AAA", fontSize: "1rem", lineHeight: 1.75, maxWidth: "520px" }}>
            Ücretsiz ve bağlayıcı değil — formu doldurmak 3 dakika sürer.
            Kişisel franchise görüşmesi için önce sizi tanımak istiyoruz.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="section-pad" style={{ backgroundColor: "var(--color-cream)" }}>
        <div className="container-site">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
            {/* Form */}
            <div>
              {/* Steps */}
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2.5rem" }}>
                {[1, 2].map((s) => (
                  <div
                    key={s}
                    style={{
                      flex: 1,
                      height: "4px",
                      borderRadius: "2px",
                      backgroundColor: s <= step ? "var(--color-red)" : "var(--color-border)",
                      transition: "background-color 0.3s",
                    }}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                      Kişisel Bilgiler
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                      {[
                        { key: "ad", label: "Ad", placeholder: "Adınız" },
                        { key: "soyad", label: "Soyad", placeholder: "Soyadınız" },
                      ].map((f) => (
                        <div key={f.key}>
                          <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                            {f.label} <span style={{ color: "var(--color-red)" }}>*</span>
                          </label>
                          <input
                            required
                            type="text"
                            placeholder={f.placeholder}
                            value={form[f.key as keyof typeof form]}
                            onChange={(e) => update(f.key, e.target.value)}
                            style={{
                              width: "100%", padding: "0.8rem 1rem",
                              border: "1px solid var(--color-border)", borderRadius: "6px",
                              fontSize: "0.9rem", outline: "none", backgroundColor: "var(--color-white)",
                            }}
                            onFocus={(e) => (e.target.style.borderColor = "var(--color-red)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                          />
                        </div>
                      ))}
                    </div>

                    {[
                      { key: "email", label: "E-posta", type: "email", placeholder: "ornek@mail.com" },
                    ].map((f) => (
                      <div key={f.key}>
                        <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                          {f.label} <span style={{ color: "var(--color-red)" }}>*</span>
                        </label>
                        <input
                          required
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key as keyof typeof form]}
                          onChange={(e) => update(f.key, e.target.value)}
                          style={{
                            width: "100%", padding: "0.8rem 1rem",
                            border: "1px solid var(--color-border)", borderRadius: "6px",
                            fontSize: "0.9rem", outline: "none", backgroundColor: "var(--color-white)",
                          }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--color-red)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                        />
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-red"
                      style={{ justifyContent: "center" }}
                    >
                      Devam Et <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {step === 2 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "1.4rem", marginBottom: "0.5rem" }}>
                      İş Detayları
                    </h2>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Hedef Şehir <span style={{ color: "var(--color-red)" }}>*</span>
                      </label>
                      <select
                        required
                        value={form.sehir}
                        onChange={(e) => update("sehir", e.target.value)}
                        style={{
                          width: "100%", padding: "0.8rem 1rem",
                          border: "1px solid var(--color-border)", borderRadius: "6px",
                          fontSize: "0.9rem", outline: "none", backgroundColor: "var(--color-white)",
                          cursor: "pointer",
                        }}
                      >
                        <option value="">Şehir seçin...</option>
                        {sehirler.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Yatırım Bütçeniz
                      </label>
                      <select
                        value={form.butce}
                        onChange={(e) => update("butce", e.target.value)}
                        style={{
                          width: "100%", padding: "0.8rem 1rem",
                          border: "1px solid var(--color-border)", borderRadius: "6px",
                          fontSize: "0.9rem", outline: "none", backgroundColor: "var(--color-white)",
                          cursor: "pointer",
                        }}
                      >
                        <option value="">Bütçe aralığı seçin...</option>
                        {butceSecenekler.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Gıda/İş Deneyiminiz
                      </label>
                      <input
                        type="text"
                        placeholder="Örn: 3 yıl restoran deneyimi"
                        value={form.deneyim}
                        onChange={(e) => update("deneyim", e.target.value)}
                        style={{
                          width: "100%", padding: "0.8rem 1rem",
                          border: "1px solid var(--color-border)", borderRadius: "6px",
                          fontSize: "0.9rem", outline: "none", backgroundColor: "var(--color-white)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-red)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.82rem", fontWeight: 600, marginBottom: "0.4rem" }}>
                        Bize Kendinizden Bahsedin
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Neden Bakacak Köfte franchise'ı almak istiyorsunuz?"
                        value={form.aciklama}
                        onChange={(e) => update("aciklama", e.target.value)}
                        style={{
                          width: "100%", padding: "0.8rem 1rem",
                          border: "1px solid var(--color-border)", borderRadius: "6px",
                          fontSize: "0.9rem", outline: "none", resize: "vertical",
                          backgroundColor: "var(--color-white)", fontFamily: "inherit",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-red)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                      />
                    </div>

                    <div style={{ display: "flex", gap: "1rem" }}>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-outline"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        Geri
                      </button>
                      <button
                        type="submit"
                        className="btn-red"
                        style={{ flex: 2, justifyContent: "center" }}
                      >
                        Başvuruyu Gönder <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Sidebar */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--color-black)",
                  borderRadius: "12px",
                  padding: "2rem",
                  color: "var(--color-white)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: "1.5rem", color: "var(--color-red)" }}>
                  Pakete Dahil Olanlar
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.875rem" }}>
                  {included.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                      <CheckCircle size={16} style={{ color: "var(--color-red)", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.875rem", color: "#CCC" }}>{item}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ borderTop: "1px solid #333", marginTop: "2rem", paddingTop: "1.5rem" }}>
                  <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: 1.7 }}>
                    Başvurunuz <strong style={{ color: "#999" }}>ücretsiz ve bağlayıcı değildir.</strong>{" "}
                    Sadece bilgi almak için de başvurabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
