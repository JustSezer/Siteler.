import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mesafeli Satış Sözleşmesi — Birincioğlu Ticaret",
  description: "Birincioğlu Ticaret mesafeli satış sözleşmesi.",
};

export default function MesafeliSatisSozlesmesiPage() {
  return (
    <div className="bg-[#fefaf5] min-h-screen">
      <div className="bg-[#fefaf5] border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-4 sm:py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#414141]">Mesafeli Satış Sözleşmesi</h1>
        </div>
      </div>

      <article className="max-w-[860px] mx-auto px-4 sm:px-5 py-8 sm:py-12 text-[#414141]">

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 1 – Taraflar</h2>
          <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
            <div>
              <p className="font-semibold mb-1">1.1 – Satıcı:</p>
              <ul className="space-y-1 pl-4">
                <li>Ad: Mustafa Birincioğlu</li>
                <li>Adres: Pazarkapı, Kalkanoğlu Caddesi No:35, Ortahisar/Trabzon</li>
                <li>Telefon: <a href="tel:+905424136532" className="text-[#f88d58]">+90 542 413 65 32</a></li>
                <li>E-posta: <a href="mailto:info@birinciogluticaret.com" className="text-[#f88d58]">info@birinciogluticaret.com</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-1">1.2 – Alıcı:</p>
              <ul className="space-y-1 pl-4">
                <li>Adı/Soyadı: [Sipariş sahibi bilgisi]</li>
                <li>Adresi: [Teslimat adresi]</li>
                <li>Telefonu: [İletişim numarası]</li>
                <li>E-posta: [E-posta adresi]</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 2 – Konu</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            İşbu sözleşmenin konusu, Alıcı'nın Satıcı'ya ait Birincioğlu Ticaret internet sitesinden elektronik ortamda siparişini yaptığı aşağıda nitelikleri ve satış fiyatı belirtilen ürünün satışı ve teslimi ile ilgili olarak 4077 sayılı Tüketicilerin Korunması Hakkındaki Kanun ve Mesafeli Sözleşmeleri Uygulama Esas ve Usulleri Hakkında Yönetmelik hükümleri gereğince tarafların hak ve yükümlülüklerinin saptanmasıdır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 3 – Sözleşme Konusu Ürün</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Ürünlerin cinsi ve türü, miktarı, marka/modeli ve rengi sipariş anında belirlenmektedir. Toplam ürün tutarı, ödeme şekli ve teslimat adresi sipariş formunda belirtilir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 4 – Genel Hükümler</h2>
          <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <li><strong>4.1</strong> Alıcı, Birincioğlu Ticaret internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön bilgileri okuyup bilgi sahibi olduğunu ve elektronik ortamda gerekli teyidi verdiğini beyan eder.</li>
            <li><strong>4.2</strong> Sözleşme konusu ürün, yasal süreyi aşmamak koşulu ile her bir ürün için Alıcı'nın yerleşim yerinin uzaklığına bağlı olarak internet sitesinde ön bilgiler içinde açıklanan süre içinde Alıcı veya gösterdiği adresteki kişi/kuruluşa teslim edilir.</li>
            <li><strong>4.3</strong> Sözleşme konusu ürün, Alıcı'dan başka bir kişi/kuruluşa teslim edilecek ise, teslim edilecek kişi/kuruluşun teslimatı kabul etmemesinden Satıcı sorumlu tutulamaz.</li>
            <li><strong>4.4</strong> Satıcı, sözleşme konusu ürünün sağlam, eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri ve kullanım kılavuzları ile teslim edilmesinden sorumludur.</li>
            <li><strong>4.5</strong> Sözleşme konusu ürünün teslimatı için işbu sözleşmenin imzalı nüshasının Satıcı'ya ulaştırılmış olması ve bedelinin Alıcı'nın tercih ettiği ödeme şekli ile ödenmiş olması şarttır. Herhangi bir nedenle ürün bedeli ödenmez veya banka kayıtlarında iptal edilir ise, Satıcı ürünün teslimi yükümlülüğünden kurtulmuş kabul edilir.</li>
            <li><strong>4.6</strong> Ürünün tesliminden sonra Alıcı'ya ait kredi kartının Alıcı'nın kusurundan kaynaklanmayan bir şekilde yetkisiz kişilerce haksız veya hukuka aykırı olarak kullanılması nedeniyle ilgili banka veya finans kuruluşun ürün bedelini Satıcı'ya ödememesi halinde, Alıcı'nın kendisine teslim edilmiş olması kaydıyla ürünün 3 gün içinde Satıcı'ya gönderilmesi zorunludur. Bu takdirde nakliye giderleri Alıcı'ya aittir.</li>
            <li><strong>4.7</strong> Satıcı mücbir sebepler veya nakliyeyi engelleyen hava muhalefeti, ulaşımın kesilmesi gibi olağanüstü durumlar nedeniyle sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu Alıcı'ya bildirmekle yükümlüdür. Bu takdirde Alıcı siparişin iptal edilmesini, sözleşme konusu ürünün varsa emsali ile değiştirilmesini ve/veya teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesi haklarından birini kullanabilir. Alıcı'nın siparişi iptal etmesi halinde ödediği tutar 10 gün içinde kendisine nakten ve defaten ödenir.</li>
            <li><strong>4.8</strong> Garanti belgesi ile satılan ürünlerin arızalı veya bozuk olanları, garanti şartları içinde gerekli onarımın yapılması için Satıcı'ya gönderilebilir; bu takdirde kargo giderleri Alıcı tarafından karşılanacaktır.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 5 – Cayma Hakkı</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Alıcı, sözleşme konusu ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa tesliminden itibaren 3 gün içinde cayma hakkına sahiptir. Cayma hakkının kullanılması için bu süre içinde Satıcı'ya faks, e-posta veya telefon ile bildirimde bulunulması ve ürünün 6. madde hükümleri çerçevesinde kullanılmamış olması şarttır. Bu hakkın kullanılması halinde, 3. kişiye veya Alıcı'ya teslim edilen ürünün Satıcı'ya gönderildiğine ilişkin kargo teslim tutanağı örneği ile fatura aslının iadesi zorunludur. Bu belgelerin ulaşmasını takip eden 14 gün içinde ürün bedeli Alıcı'ya iade edilir. Fatura aslı gönderilmez ise KDV ve varsa sair yasal yükümlülükler iade edilemez. Cayma hakkı nedeniyle iade edilen ürünün kargo bedeli Alıcı tarafından karşılanır.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 6 – Cayma Hakkı Kullanılamayacak Ürünler</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Niteliği itibarıyla iade edilemeyecek ürünler, tek kullanımlık ürünler, kopyalanabilir yazılım ve programlar, hızlı bozulan veya son kullanım tarihi geçen ürünler için cayma hakkı kullanılamaz. Aşağıdaki ürünlerde cayma hakkının kullanılması, ürünün ambalajının açılmamış, bozulmamış ve ürünün kullanılmamış olması şartına bağlıdır. Alıcı tarafından satın alınmış fakat teslimat sırasında herhangi bir tutanak tutulmamış ve tek kullanımdan sonra deforme olabilecek ya da Satıcı tarafından tekrardan satışa konulamayacak kadar kusurlu kabul edilebilecek ürünlerin cayma hakkı Satıcı tarafından belirlenir. Bu gibi durumlarda Alıcı ürünü başka bir ürünle değiştirme hakkına sahiptir; değişim yapılan ürün ile arasındaki fiyat farkı Alıcı tarafından karşılanır ve nakliye giderleri Alıcı'ya aittir.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-lg font-bold mb-3">Madde 7 – Yetkili Mahkeme</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            İşbu sözleşmenin uygulanmasında, Sanayi ve Ticaret Bakanlığı ile Tarım ve Orman Bakanlığı tarafından ilan edilen değere kadar Tüketici Hakem Heyetleri ile Alıcı'nın veya Satıcı'nın yerleşim yerindeki Tüketici Mahkemeleri yetkilidir.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-3">
            <strong>Siparişin gerçekleşmesi durumunda Alıcı işbu sözleşmenin tüm koşullarını kabul etmiş sayılır.</strong>
          </p>
        </section>

        <div className="mt-10 pt-6 border-t border-gray-200 text-xs text-gray-400">
          <p>Satıcı: Mustafa Birincioğlu — www.birinciogluticaret.com</p>
          <p className="mt-1">Son güncelleme: Nisan 2026</p>
        </div>
      </article>
    </div>
  );
}
