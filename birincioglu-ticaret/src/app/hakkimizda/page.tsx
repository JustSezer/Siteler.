import type { Metadata } from "next";
import Image from "next/image";
import { LOGO_URL } from "@/data/products";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "1946'dan beri Trabzon'da güvenilir ticaretin adresi. Birincioğlu Ticaret hakkında bilgi edinin.",
};

export default function HakkimizdaPage() {
  return (
    <div className="bg-[#fefaf5]">
      <div className="max-w-[1280px] mx-auto px-5 py-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">

          {/* Sol: Logo */}
          <div className="shrink-0 flex justify-center">
            <Image
              src={LOGO_URL}
              alt="Birincioğlu Ticaret"
              width={300}
              height={200}
              className="w-[300px] md:w-[500px] object-contain"
              unoptimized
            />
          </div>

          {/* Sağ: İçerik */}
          <div>
            <h1 className="text-2xl md:text-5xl font-bold text-[#414141] mb-6">Hakkımızda</h1>
<p className="text-gray-600 leading-relaxed text-base md:text-lg">
  1946 yılında Ahmet Birincioğlu tarafından zahire olarak başlayan serüven oğullarına devrolup
  1994 yılında Mustafa ve Yahya Birincioğlu tarafından kurulan <strong className="text-[#414141]">BİRİNCİOĞLU TİCARET</strong>,
  28 yılı aşkın tecrübesiyle Kömür, Kabuk, Pelet, Yakacak, Kedi ve Köpek maması hizmeti vermektedir.
  28 yıldır Gübre ve Kömür toptan ve perakende satışı yapılmaktadır. Günümüzde yeni yakıtı olan
  Pelet yakacak satışımız üç yıldır yapmaktayız. 4 senedir ise Kedi ve Köpek mamaları satışı yapmaktayız.
</p>
          </div>
        </div>
      </div>
    </div>
  );
}
