import { ClipboardList, Mail, Truck, GraduationCap, Rocket } from "lucide-react";

const steps = [
  {
    icon: <ClipboardList size={24} />,
    num: "01",
    title: "Başvuruyu Doldur",
    desc: "Online formu 5 dakikada tamamla. Kişisel bilgiler ve hedef bölge yeterli.",
  },
  {
    icon: <Mail size={24} />,
    num: "02",
    title: "E-posta Yanıtı",
    desc: "24 saat içinde uzman ekibimiz e-posta ile geri döner. Soru-cevap, beklenti yönetimi.",
  },
  {
    icon: <GraduationCap size={24} />,
    num: "03",
    title: "Eğitim Programı",
    desc: "5 günlük yoğun tarif ve operasyon eğitimi. Sertifika ve üniformalar dahil.",
  },
  {
    icon: <Truck size={24} />,
    num: "04",
    title: "Karavan Teslimi",
    desc: "Tam donanımlı food truck karavanınız teslim edilir. Stok ve malzeme hazır.",
  },
  {
    icon: <Rocket size={24} />,
    num: "05",
    title: "Açılış & Para Kazan",
    desc: "İlk gün destekle açılış yap. Satışlar başlar, kâr hesabınıza geçer.",
  },
];

export default function Process() {
  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-white)" }}>
      <div className="container-site">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Franchise Başvuru Süreci</span>
          {/* H2 — LSI: food truck bayilik başvurusu, franchise nasıl alınır */}
          <h2 className="section-title" style={{ marginBottom: "1rem" }}>
            Food Truck Bayilik Başvurusundan{" "}
            <span style={{ color: "var(--color-red)" }}>Açılışa 5 Adım</span>
          </h2>
          <div className="divider-red" style={{ margin: "1.25rem auto" }} />
          <p className="section-sub" style={{ margin: "0 auto", textAlign: "center" }}>
            Karavan Köfte franchise başvurusundan açılışa kadar her adımda ekibimiz yanınızda.
            Bürokratik engel yok, belirsiz süreç yok — sadece 5 net adım.
          </p>
        </div>

        {/* Steps */}
        <div style={{ position: "relative" }}>
          {/* Connecting line (desktop) */}
          <div
            style={{
              position: "absolute",
              top: "40px",
              left: "10%",
              right: "10%",
              height: "2px",
              backgroundColor: "var(--color-border)",
              zIndex: 0,
            }}
            className="hidden md:block"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "2rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {steps.map((step, i) => (
              <div key={step.num} style={{ textAlign: "center" }}>
                {/* Icon circle */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    backgroundColor: i === 0 ? "var(--color-red)" : "var(--color-cream)",
                    border: `2px solid ${i === 0 ? "var(--color-red)" : "var(--color-border)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    color: i === 0 ? "white" : "var(--color-red)",
                    transition: "all 0.2s",
                  }}
                >
                  {step.icon}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 800,
                    letterSpacing: "0.15em",
                    color: "var(--color-red)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.num}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{step.title}</h3>
                <p style={{ fontSize: "0.85rem", color: "var(--color-gray)", lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
