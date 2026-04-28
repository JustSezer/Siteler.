import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kişisel Veri Paylaşımı ve İletişim İzni — Birincioğlu Ticaret",
  description: "Birincioğlu Ticaret kişisel veri paylaşımı ve iletişim izni politikası, KVKK kapsamında haklarınız.",
};

export default function KisiselVeriPaylasimi() {
  return (
    <div className="bg-[#fefaf5] min-h-screen">
      <div className="bg-[#fefaf5] border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-4 sm:py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#414141]">Kişisel Veri Paylaşımı ve İletişim İzni</h1>
        </div>
      </div>

      <article className="max-w-[860px] mx-auto px-4 sm:px-5 py-8 sm:py-12 text-[#414141]">

        <section className="mb-8">
          <p className="text-sm text-gray-700 leading-relaxed">
            'Kişisel Veri Paylaşımı Ve İletişim İzni'ni imzalamakla, bizimle paylaşılmasına rıza göstermiş olduğunuz kişisel verilerinizin, tarafınıza çeşitli avantajların sağlanıp sunulabilmesi ve kişisel olarak size uygun reklam, tanıtım, satış, pazarlama, bilgilendirme, promosyon, kampanya bildirimi, üyelik işlemleri, anket ve müşteri memnuniyeti araştırmaları ve bu kapsamdaki hizmetlerin sağlanması amacıyla her türlü elektronik iletişim yapılması ve diğer iletişim mesajlarının gönderilmesi için Mustafa Birincioğlu ("Birincioğlu Ticaret") tarafından toplanmasına, kaydedilmesine, işlenmesine, saklanmasına, kullanılmasına ve aynı amaçlara yönelik olarak aşağıda belirtilen üçüncü kişilere aktarılmasına/paylaşılmasına izin vermiş bulunmaktasınız.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Kişisel Verilerinizin Paylaşıldığı Üçüncü Kişiler</h2>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5">
            <li>Birincioğlu Ticaret iştirakleri ve bağlı ortaklıkları</li>
            <li>Birincioğlu Ticaret'in sözleşme ilişkisi içerisinde olduğu yurtiçi ve/veya yurtdışındaki 3. taraflar</li>
            <li>Birincioğlu Ticaret yetkili mağazaları</li>
            <li>Birincioğlu Ticaret ve yetkili mağazaları adına veri işleyen araştırma, tanıtım ve danışmanlık hizmeti veren firmalar</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed mt-4">
            Bu bilgiler sadece size sağlanacak hizmetlerin kusursuz sunulabilmesi, olası gönderilerinizin sağlıklı şekilde teslim edilmesi, telefon, sms ve/veya e-posta yoluyla bildirimlerimizin zamanında ulaştırılabilmesi amacıyla, sözleşme ilişkisi içinde olduğumuz, veri koruması ve güvenliği konusunda bizimle hukuken ve teknik olarak aynı sorumlulukları taşıyan, ilgili mevzuat hükümlerine riayet eden üçüncü kişilerle, yalnızca ihtiyaç durumunda ve gerekli ölçüde paylaşılacaktır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">KVKK Kapsamında Haklarınız</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            6698 Sayılı Kişisel Verilerin Korunması Kanunu ("KVKK")'nun 11. maddesi gereği kişisel verilerinizle ilgili aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="space-y-2 text-sm text-gray-700 leading-relaxed list-disc pl-5 mb-4">
            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
            <li>İşlenmişse bilgi talep etme</li>
            <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
            <li>Yurt içinde/yurt dışında aktarıldığı 3. kişileri bilme</li>
            <li>Eksik/yanlış işlenmişse düzeltilmesini isteme</li>
            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde silinmesini/yok edilmesini isteme</li>
            <li>Aktarıldığı 3. kişilere yapılan işlemlerin bildirilmesini isteme</li>
            <li>Münhasıran otomatik sistemler ile analiz edilmesi nedeniyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
            <li>Kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme</li>
          </ul>
          <p className="text-sm text-gray-700 leading-relaxed">
            Kişisel verilerinizle ilgili kayıtlarınızı güncellemek/düzeltmek için şirketimizde kayıtlı e-posta adresinizden{" "}
            <a href="mailto:info@birinciogluticaret.com" className="text-[#f88d58] hover:underline">info@birinciogluticaret.com</a>{" "}
            adresine mail atabilirsiniz. 11. madde uyarınca sahip olduğunuz diğer haklarınızı kullanmak için ise{" "}
            <a href="mailto:info@birinciogluticaret.com" className="text-[#f88d58] hover:underline">info@birinciogluticaret.com</a>{" "}
            adresine güvenli elektronik imzanızla imzalanmış bir e-posta gönderebilir ya da ıslak imzanızı taşıyan bir dilekçe ile şirket adresine İnsan Kaynakları departmanı dikkatine başvuru yapabilirsiniz.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Gizlilik ve Güvenlik</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Birincioğlu Ticaret, müşterilerine daha iyi hizmet verebilmek amacıyla bazı kişisel bilgilerinizi (isim, yaş, ilgi alanlarınız, e-posta vb.) sizlerden talep etmektedir. Birincioğlu Ticaret sunucularında toplanan bu bilgiler, dönemsel kampanya çalışmaları, müşteri profillerine yönelik özel promosyon faaliyetlerinin kurgulanması ve istenmeyen e-postaların iletilmemesine yönelik müşteri sınıflandırma çalışmalarında sadece Birincioğlu Ticaret bünyesinde kullanılmaktadır.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Birincioğlu Ticaret, üyelik formlarından topladığı bilgileri söz konusu üyenin haberi ya da aksi bir talimatı olmaksızın, üçüncü şahıslarla kesinlikle paylaşmamakta, faaliyet dışı hiçbir nedenle ticari amaçla kullanmamakta ve satmamaktadır.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Müşteri bilgileri, ancak resmi makamlarca bu bilgilerin talep edilmesi halinde ve yürürlükteki emredici mevzuat hükümleri gereğince resmi makamlara açıklanabilecektir.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Ödeme sayfasında istenen kredi kartı bilgileriniz, hiçbir şekilde Birincioğlu Ticaret veya ona hizmet veren şirketlerin sunucularında tutulmamaktadır. Ödemeye yönelik tüm işlemler, banka ve bilgisayarınız arasında güvenli şekilde gerçekleşmektedir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Çerez Kullanımı</h2>
          <p className="text-sm text-gray-700 leading-relaxed mb-3">
            Çerezler, sitemizi ziyaret ettiğinizde bilgisayarınız ya da mobil cihazınıza kaydedilen küçük metin dosyaları ya da bilgilerdir. Çerezleri, Sitelerimizin daha kolay kullanılması ve sizin ilgi ve ihtiyaçlarınıza göre ayarlanması için kullanıyoruz.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Çerezler ayrıca Sitelerimiz üzerinde gelecekteki hareketlerinizin hızlanmasına yardımcı olur. Bunlara ek olarak, ziyaretçilerin Sitelerimizi nasıl kullandığını anlamak ve tasarımı geliştirmek amacıyla istatistiksel bilgiler toplamak için de kullanılabilir.
          </p>
        </section>

        <div className="mt-10 pt-6 border-t border-gray-200 text-sm text-gray-700">
          <p><strong>Ad:</strong> Mustafa Birincioğlu</p>
          <p className="mt-1"><strong>Web Sitesi:</strong> www.birinciogluticaret.com</p>
          <p className="mt-1"><strong>Adres:</strong> Pazarkapı, Kalkanoğlu Caddesi No:35, Ortahisar/Trabzon</p>
          <p className="mt-1"><strong>E-posta:</strong>{" "}
            <a href="mailto:info@birinciogluticaret.com" className="text-[#f88d58] hover:underline">
              info@birinciogluticaret.com
            </a>
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-400">
          <p>Son güncelleme: Nisan 2026</p>
        </div>
      </article>
    </div>
  );
}
