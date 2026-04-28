import type { Metadata } from "next";
import Link from "next/link";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Çerez Politikası — Birincioğlu Ticaret",
  description: "Birincioğlu Ticaret çerez politikası. Sitemizde kullanılan çerezler ve KVKK kapsamında haklarınız hakkında bilgi edinin.",
};

export default function CerezPolitikasiPage() {
  return (
    <div className="bg-[#fefaf5] min-h-screen">
      <div className="bg-[#fefaf5] border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-4 sm:py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#414141]">Çerez Politikası</h1>
        </div>
      </div>

      <article className="max-w-[860px] mx-auto px-4 sm:px-5 py-8 sm:py-12 prose-sm sm:prose text-[#414141]">
        <p className="text-sm text-gray-500 mb-8">Son güncelleme: Nisan 2026</p>

        <section aria-labelledby="cerez-nedir">
          <h2 id="cerez-nedir" className="text-lg font-bold mt-8 mb-3">1. Çerez Nedir?</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Çerezler, web sitelerinin ziyaretçilerin tarayıcılarına yerleştirdiği küçük metin dosyalarıdır.
            Ziyaretçilerin siteyi daha verimli kullanabilmesine yardımcı olmak ve web sitesi sahiplerine
            çeşitli istatistiksel bilgiler sunmak amacıyla kullanılırlar.
          </p>
        </section>

        <section aria-labelledby="kullandigimiz-cerezler">
          <h2 id="kullandigimiz-cerezler" className="text-lg font-bold mt-8 mb-3">2. Kullandığımız Çerezler</h2>

          <h3 className="text-base font-semibold mt-5 mb-2">2.1 Zorunlu Çerezler</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Bu çerezler sitenin temel işlevlerinin çalışması için zorunludur. Devre dışı bırakılamazlar.
            Çerez tercih kaydı, oturum yönetimi ve güvenlik işlemleri bu kapsamda değerlendirilir.
          </p>

          <h3 className="text-base font-semibold mt-5 mb-2">2.2 Analitik Çerezler</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olmak amacıyla kullanılır.
            Hangi sayfaların en çok ziyaret edildiğini, ziyaretçilerin sitede ne kadar süre geçirdiğini
            ve hata mesajları alıp almadıklarını ölçmemizi sağlar. Bu çerezlerin topladığı tüm bilgiler
            anonim niteliktedir.
          </p>

          <h3 className="text-base font-semibold mt-5 mb-2">2.3 Pazarlama Çerezleri</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Ziyaretçilere alakalı reklamlar ve pazarlama içerikleri sunmak amacıyla kullanılır.
            Reklam kampanyalarının etkinliğini ölçmek ve ilgi alanlarınıza göre kişiselleştirilmiş
            içerik sunmak için tercih edilir.
          </p>

          <h3 className="text-base font-semibold mt-5 mb-2">2.4 Fonksiyonel Çerezler</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dil tercihi ve özelleştirme seçenekleri gibi kullanıcı tercihlerini hatırlamak amacıyla
            kullanılır. Bu çerezler olmadan bazı özellikler düzgün çalışmayabilir.
          </p>
        </section>

        <section aria-labelledby="cerez-yonetimi">
          <h2 id="cerez-yonetimi" className="text-lg font-bold mt-8 mb-3">3. Çerez Tercihlerinizi Yönetin</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Çerez tercihlerinizi istediğiniz zaman değiştirebilirsiniz.
          </p>
          <CookiePreferencesButton />
        </section>

        <section aria-labelledby="tarayici-ayarlari">
          <h2 id="tarayici-ayarlari" className="text-lg font-bold mt-8 mb-3">4. Tarayıcı Ayarları</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Tüm modern tarayıcılar çerezleri kontrol etmenize olanak sağlar. Tarayıcı ayarlarınızdan
            çerezleri silebilir, engelleyebilir ya da uyarı alacak şekilde ayarlayabilirsiniz. Ancak
            çerezleri devre dışı bırakmanız durumunda sitemizin bazı özellikleri çalışmayabilir.
          </p>
        </section>

        <section aria-labelledby="kvkk">
          <h2 id="kvkk" className="text-lg font-bold mt-8 mb-3">5. KVKK Kapsamında Haklarınız</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında kişisel verilerinizin işlenip
            işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve
            amacına uygun kullanılıp kullanılmadığını öğrenme haklarına sahipsiniz. Bu haklarınızı
            kullanmak için{" "}
            <a href="mailto:info@birinciogluticaret.com" className="text-[#f88d58] hover:underline">
              info@birinciogluticaret.com
            </a>{" "}
            adresine e-posta gönderebilirsiniz.
          </p>
        </section>

        <section aria-labelledby="iletisim">
          <h2 id="iletisim" className="text-lg font-bold mt-8 mb-3">6. İletişim</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Çerez politikamız hakkında sorularınız için:
          </p>
          <address className="not-italic mt-2 text-sm text-gray-700 leading-relaxed">
            <strong>Birincioğlu Ticaret</strong><br />
            Pazarkapı, Kalkanoğlu Caddesi No:35, Ortahisar/Trabzon<br />
            <a href="mailto:info@birinciogluticaret.com" className="text-[#f88d58] hover:underline">
              info@birinciogluticaret.com
            </a><br />
            <a href="tel:+904623223770" className="text-[#f88d58] hover:underline">
              0 462 322 37 70
            </a>
          </address>
        </section>
      </article>
    </div>
  );
}
