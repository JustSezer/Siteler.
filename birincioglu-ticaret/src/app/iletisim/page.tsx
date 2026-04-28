import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Birincioğlu Ticaret iletişim bilgileri. Trabzon Ortahisar'daki mağazamıza ulaşın veya WhatsApp ile sipariş verin.",
};

export default function IletisimPage() {
  return (
    <div className="bg-[#fefaf5]">
      <div className="max-w-[1280px] mx-auto px-5 py-12 flex flex-col items-center">

        {/* Başlık */}
        <h1 className="text-5xl font-bold text-[#414141] mb-10 text-center">İletişim</h1>

        {/* İletişim Bilgileri */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center">
          <div className="flex items-start gap-3">
            <Phone size={18} className="text-[#f88d58] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#414141] text-sm mb-0.5">Telefon</p>
              <a href="tel:+904623223770" className="block text-sm text-gray-600 hover:text-[#f88d58] transition-colors">0 462 322 37 70</a>
              <a href="tel:+905424136532" className="block text-sm text-gray-600 hover:text-[#f88d58] transition-colors">+90 542 413 65 32</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail size={18} className="text-[#f88d58] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#414141] text-sm mb-0.5">E-posta</p>
              <a href="mailto:info@birinciogluticaret.com" className="text-sm text-gray-600 hover:text-[#f88d58] transition-colors">
                info@birinciogluticaret.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="text-[#f88d58] shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[#414141] text-sm mb-0.5">Adres</p>
              <p className="text-sm text-gray-600">Pazarkapı, Kalkanoğlu Caddesi No:35<br />Ortahisar/Trabzon</p>
            </div>
          </div>
        </div>
        {/* Google Maps */}
        <div className="rounded-xl overflow-hidden border border-gray-200">
          <iframe
            src="https://maps.google.com/maps?q=Pazarkapı+Kalkanoğlu+Caddesi+No:35+Ortahisar+Trabzon&output=embed"
            width="1300"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Birincioğlu Ticaret Konum"
          />
        </div>

      </div>
    </div>
  );
}
