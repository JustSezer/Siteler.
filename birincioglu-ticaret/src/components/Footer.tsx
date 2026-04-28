import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { LOGO_URL } from "@/data/products";
import CookiePreferencesButton from "@/components/CookiePreferencesButton";

export default function Footer() {
  return (
    <footer className="bg-[#fefaf5] text-[#414141]" aria-label="Site altbilgisi">
      <div className="max-w-[1280px] mx-auto px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:divide-x md:divide-blue-200">

          {/* Site Haritası */}
          <div className="pr-4 text-center md:text-left">
            <h3 style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "0.05em" }} className="uppercase mb-4 text-base md:text-sm">
              Site Haritası
            </h3>
            <ul style={{ lineHeight: "2em" }} className="text-base md:text-xs">
              <li><Link href="/" className="hover:text-[#F88D58] transition-colors">Anasayfa</Link></li>
              <li><Link href="/magaza" className="hover:text-[#F88D58] transition-colors">Mağaza</Link></li>
              <li><Link href="/hakkimizda" className="hover:text-[#F88D58] transition-colors">Hakkımızda</Link></li>
              <li><Link href="/iletisim" className="hover:text-[#F88D58] transition-colors">İletişim</Link></li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div className="px-4 text-center md:text-left">
            <h3 style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "0.05em" }} className="uppercase mb-4 text-base md:text-sm">
              Kategoriler
            </h3>
            <ul style={{ lineHeight: "2em" }} className="text-base md:text-xs">
              <li><Link href="/kedi-mamasi" className="hover:text-[#F88D58] transition-colors">Kedi Maması</Link></li>
              <li><Link href="/kopek-mamasi" className="hover:text-[#F88D58] transition-colors">Köpek Maması</Link></li>
              <li><Link href="/kedi-kumu" className="hover:text-[#F88D58] transition-colors">Kedi Kumu</Link></li>
              <li><Link href="/pelet-yakacak" className="hover:text-[#F88D58] transition-colors">Pelet Çeşitleri</Link></li>
              <li><Link href="/organik-gubre" className="hover:text-[#F88D58] transition-colors">Organik Gübre</Link></li>
              <li><Link href="/gubre" className="hover:text-[#F88D58] transition-colors">Gübre Çeşitleri</Link></li>
              <li><Link href="/yakacak-cesitleri" className="hover:text-[#F88D58] transition-colors">Yakacak Çeşitleri</Link></li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="px-4 text-center md:text-left">
            <h3 style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "0.05em" }} className="uppercase mb-4 text-base md:text-sm">
              İletişim Bilgileri
            </h3>
            <ul style={{ lineHeight: "2em" }} className="space-y-1 text-base md:text-xs">
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Phone size={14} className="text-[#F88D58] shrink-0" />
                <div>
                  <a href="tel:+904623223770" className="block hover:text-[#F88D58] transition-colors">0 462 322 37 70</a>
                  <a href="tel:+905424136532" className="block hover:text-[#F88D58] transition-colors">+90 542 413 65 32</a>
                </div>
              </li>
              <li className="flex items-start gap-2 justify-center md:justify-start">
                <MapPin size={14} className="text-[#F88D58] shrink-0 mt-1" />
                <span>Pazarkapı, Kalkanoğlu Caddesi No:35<br />Ortahisar/Trabzon</span>
              </li>
              <li className="flex items-center gap-2 justify-center md:justify-start">
                <Mail size={14} className="text-[#F88D58] shrink-0" />
                <a href="mailto:info@birinciogluticaret.com" className="hover:text-[#F88D58] transition-colors break-all">
                  info@birinciogluticaret.com
                </a>
              </li>
            </ul>
          </div>

          {/* Sözleşmeler */}
          <div className="pl-4 text-center md:text-left">
            <h3 style={{ fontSize: "14px", fontWeight: "bold", letterSpacing: "0.05em" }} className="uppercase mb-4 text-base md:text-sm">
              Yasal
            </h3>
            <ul style={{ lineHeight: "2em" }} className="text-base md:text-xs">
              <li><Link href="/uyelik-sozlesmesi" className="hover:text-[#F88D58] transition-colors">Üyelik Sözleşmesi</Link></li>
              <li><Link href="/gizlilik-sozlesmesi" className="hover:text-[#F88D58] transition-colors">Gizlilik Sözleşmesi</Link></li>
              <li><Link href="/kullanim-kosullari" className="hover:text-[#F88D58] transition-colors">Kullanım Koşulları</Link></li>
              <li><Link href="/mesafeli-satis-sozlesmesi" className="hover:text-[#F88D58] transition-colors">Mesafeli Satış Sözleşmesi</Link></li>
              <li><Link href="/kisisel-veri-paylasimi" className="hover:text-[#F88D58] transition-colors">Kişisel Veri Paylaşımı</Link></li>
              <li><Link href="/cerez-politikasi" className="hover:text-[#F88D58] transition-colors">Çerez Politikası</Link></li>
              <li className="text-base md:text-xs"><CookiePreferencesButton /></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-blue-200 py-5 bg-[#fefaf5]">
        <div className="max-w-[1280px] mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Ödeme logoları */}
          <div className="flex items-center gap-4">
            <Image src="/images/troy.png" alt="Troy" width={54} height={32} className="h-20 w-auto object-contain" />
            <Image src="/images/visa.png" alt="Visa" width={54} height={32} className="h-15 w-auto object-contain" />
            <Image src="/images/masterpass.png" alt="Masterpass" width={54} height={32} className="h-15 w-auto object-contain" />
            <Image src="/images/Master Pass.avif" alt="iyzico" width={60} height={34} className="h-7 w-auto object-contain" />
          </div>

          {/* Sosyal medya */}
          <div className="flex items-center gap-2">
            <a href="https://wa.me/905424136532" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <Image src="/images/instagram-icon.png" alt="WhatsApp" width={30} height={30} className="w-7 h-7 object-contain hover:opacity-70 transition-opacity" unoptimized />
            </a>
            <a href="https://instagram.com/birinciogluticaret" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/images/facebook-icon.png" alt="Instagram" width={30} height={30} className="w-7 h-7 object-contain hover:opacity-70 transition-opacity" unoptimized />
            </a>
            <a href="https://facebook.com/birinciogluticaret" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/images/whatsapp-icon.png" alt="Facebook" width={30} height={30} className="w-7 h-7 object-contain hover:opacity-70 transition-opacity" unoptimized />
            </a>
          </div>

          {/* Müşteri destek */}
          <div className="text-center sm:text-center">
            <p style={{ fontSize: "24px" }} className="text-gray-500 mb-0.5">Müşteri Destek Hattı</p>
            <p style={{ fontSize: "24px", fontWeight: "bold" }} className="text-[#414141]">542 413 65 32</p>
          </div>

        </div>

        {/* Telif */}
        <div className="max-w-[1280px] mx-auto px-6 mt-5 pt-3 border-t border-blue-100 flex items-center justify-center gap-3">
          <span style={{ fontSize: "14px" }} className="text-gray-400">© {new Date().getFullYear()} Birincioğlu Ticaret. Tüm hakları saklıdır.</span>
        </div>
      </div>
    </footer>
  );
}
