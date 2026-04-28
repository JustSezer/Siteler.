import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Sözleşmesi — Birincioğlu Ticaret",
  description: "Birincioğlu Ticaret gizlilik sözleşmesi ve çerez kullanım politikası.",
};

export default function GizlilikSozlesmesiPage() {
  return (
    <div className="bg-[#fefaf5] min-h-screen">
      <div className="bg-[#fefaf5] border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-4 sm:py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#414141]">Gizlilik Sözleşmesi</h1>
        </div>
      </div>

      <article className="max-w-[860px] mx-auto px-4 sm:px-5 py-8 sm:py-12 text-[#414141]">

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Bölüm 1 – Birincioğlu Ticaret Çerezleri Nasıl Kullanmaktadır?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Şirket çerezleri şu amaçlarla kullanmaktadır:</p>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-gray-700 leading-relaxed">
            <li>
              Tercihleri hatırlamak ve web sitesi/mobil uygulama kullanımını kişiselleştirmek:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Şifreleri kaydetmek ve oturum sürekliliğini sağlamak</li>
                <li>Kullanıcıları geri döndüklerinde tanımak ve hatırlamak</li>
              </ul>
            </li>
            <li>
              Web sitesi/uygulamanın nasıl kullanıldığını belirlemek:
              <ul className="list-disc pl-5 mt-1 space-y-1">
                <li>Kullanıcıların nereden ve hangi cihazlardan bağlandığı</li>
                <li>Hangi içeriklerin görüntülendiği</li>
                <li>Ziyaret süresi</li>
              </ul>
            </li>
            <li>Kullanıcı ilgi alanlarına göre hedefli reklamlar ve içerik sunmak</li>
            <li>Kişiselleştirilmiş kampanyalar sunmak ve istenmeyen içerikleri engellemek amacıyla çerezlerden elde edilen bilgileri diğer kişisel verilerle eşleştirmek</li>
          </ol>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Bölüm 2 – Üçüncü Taraf Çerezleri Reklam ve Yeniden Hedefleme İçin Nasıl Kullanılmaktadır?</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Şirket, üçüncü taraf çerezlerini ve "reklam teknolojisi"ni şu amaçlarla kullanmaktadır:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
            <li>Arama motorlarında ve ortak web sitelerinde potansiyel olarak alakalı reklamlar göstermek</li>
            <li>Kişiselleştirilmiş reklamlar için önceki ziyaret bilgilerini kullanmak</li>
            <li>Kimlik belirleme amacıyla benzersiz üçüncü taraf çerezleri yerleştirmek</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Şirket, hedefli reklamcılık ve özel kitle oluşturma amacıyla e-posta adreslerini sosyal medya platformlarıyla paylaşmakta olup şu güvenceler verilmektedir:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed">
            <li>E-posta yalnızca eşleştirme amacıyla karma (hash) hâle getirilir</li>
            <li>Üçüncü taraflarla veya diğer reklamverenlerle paylaşılmaz</li>
            <li>Eşleştirme tamamlandıktan sonra sosyal medya sistemlerinden silinir</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Bölüm 3 – Çerez Yönetimi</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">Farklı tarayıcılarda çerez yönetimi için talimatlar:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 leading-relaxed mb-4">
            <li><strong>Google Chrome:</strong> Adres çubuğundaki kilit simgesine veya "i"ye tıklayın, Çerez ayarlarına erişin</li>
            <li><strong>Internet Explorer:</strong> Araçlar menüsü → Güvenlik sekmesi → Çerezlere izin ver veya reddet</li>
            <li><strong>Mozilla Firefox:</strong> Menü → Seçenekler → Gizlilik ve Güvenlik</li>
            <li><strong>Safari:</strong> Ayarlar → Safari → Gizlilik ve Güvenlik bölümü</li>
            <li><strong>Diğer tarayıcılar (Opera, Microsoft Edge):</strong> Tarayıcı yardım/destek sayfalarına başvurun</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed"><strong>Önemli Not:</strong> Kalıcı çerezleri veya oturum çerezlerini reddederseniz, web sitesini kullanmaya devam edebilirsiniz fakat web sitesinin tüm işlevlerine erişemeyebilirsiniz.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Bölüm 4 – Çerez Çeşitleri</h2>
          <ul className="list-disc pl-5 space-y-3 text-sm text-gray-700 leading-relaxed">
            <li><strong>Oturum Çerezi:</strong> Kişisel bilgilerle kullanıcı girişini ve sayfalar arasında veri transferiyle alışverişi etkinleştirir.</li>
            <li><strong>Analiz Çerezleri:</strong> Kullanıcı deneyimini iyileştirmek ve teknik sorunları çözmek için ziyaret edilen sayfaları takip eder.</li>
            <li><strong>Anonim Kullanıcı Tanılama Çerezleri:</strong> Dil ve ülke tercihlerini kaydeder; geri dönen kullanıcıları otomatik olarak tanımak için kullanılır.</li>
            <li><strong>Reklamlar ve Üçüncü Taraf Çerezleri:</strong> Ziyaret tercihlerini hatırlar, ilgili kişiselleştirilmiş reklamlar gösterir, reklam sıklığını sınırlar, kampanya etkinliğini ölçer.</li>
          </ul>
        </section>

        <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400">
          Son güncelleme: Nisan 2026
        </div>
      </article>
    </div>
  );
}
