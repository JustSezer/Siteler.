import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "Birincioğlu Ticaret gizlilik politikası",
};

export default function GizlilikPolitikasiPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-14">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-red-700">Anasayfa</Link>
        <span className="mx-2">/</span>
        <span>Gizlilik Politikası</span>
      </nav>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Gizlilik Politikası</h1>
      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed text-sm">
        <p>
          Birincioğlu Ticaret olarak, müşterilerimizin kişisel verilerinin gizliliğini ve güvenliğini
          son derece önemsiyor, yasal yükümlülüklerimiz çerçevesinde bu verileri korumayı taahhüt ediyoruz.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">Toplanan Veriler</h2>
        <p>
          Sitemizi ziyaret ettiğinizde veya sipariş verdiğinizde ad, soyad, telefon numarası,
          e-posta adresi ve adres bilgileriniz toplanabilir.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">Verilerin Kullanımı</h2>
        <p>
          Toplanan kişisel veriler; siparişlerin işlenmesi, müşteri hizmetleri, pazarlama
          faaliyetleri ve yasal yükümlülüklerin yerine getirilmesi amacıyla kullanılır.
        </p>
        <h2 className="text-lg font-semibold text-gray-800 mt-6">İletişim</h2>
        <p>
          Gizlilik politikamıza ilişkin sorularınız için{" "}
          <a href="mailto:info@birinciogluticaret.com" className="text-red-700 hover:underline">
            info@birinciogluticaret.com
          </a>{" "}
          adresine e-posta gönderebilirsiniz.
        </p>
      </div>
    </div>
  );
}
