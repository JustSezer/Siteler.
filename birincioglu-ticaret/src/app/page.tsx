import Image from "next/image";
import Link from "next/link";
import { products, HERO_IMAGE_URL } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const firstRows = products.slice(0, 15);
  const middleRows = products.slice(15, 18);
  const restRows = products.slice(18, 28);

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-[280px] sm:h-[380px] md:h-[500px] mt-[10px]">
        <Image
          src={HERO_IMAGE_URL}
          alt="Birincioğlu Ticaret"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute top-[16px] left-[16px] right-[16px] sm:top-[20px] sm:left-[20px] sm:right-auto flex flex-col items-start sm:max-w-[60%]">
          <h1 className="text-white text-xl sm:text-4xl md:text-6xl font-bold mb-2 sm:mb-3 leading-snug drop-shadow">
            En uygun fiyat en üst kalite prensibimizdir
          </h1>
          <Link
            href="/magaza"
            className="self-end sm:self-start border-2 border-black text-black bg-transparent hover:bg-white/30 font-semibold px-5 sm:px-12 py-1.5 sm:py-2 rounded-full text-sm sm:text-base transition-colors"
          >
            Mağaza
          </Link>
        </div>
      </section>

      {/* Ürünler — ilk 15 */}
      <section className="bg-[#fefaf5] pt-8 sm:pt-12 pb-6">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-5">
          <h2 className="text-xl sm:text-2xl font-bold text-[#414141] mb-5 sm:mb-8">Ürünlerimiz</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {firstRows.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="w-full bg-purple-700 py-2 px-3">
        <div className="text-white text-xs sm:text-sm text-center">
          Tüm Siparişleriniz Aynı Gün Kargoda! Türkiye&apos;nin Her İli İçin Saat 16:00&apos;a Kadar Verdiğiniz Siparişler Aynı Gün Kargoda!
        </div>
      </div>

      {/* 3 ürün */}
      <section className="bg-[#fefaf5] pt-6 pb-6">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-5">
          <div className="grid grid-cols-3 gap-3 sm:gap-4 sm:flex sm:justify-center">
            {middleRows.map((product) => (
              <div key={product.id} className="sm:w-[calc(20%-1rem)] sm:min-w-[180px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero2 — sol panel bilgi kutuları */}
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px]">
        <Image
          src="/images/hero2.jpg"
          alt="Birincioğlu Ticaret"
          fill
          className="object-cover object-center"
          unoptimized
        />
        <div className="absolute inset-0 bg-black/40 sm:bg-black/30" />
        <div className="absolute left-0 top-0 bottom-0 flex items-center w-full sm:w-auto">
          <div className="flex flex-col gap-4 sm:gap-7 w-full sm:w-80 md:w-96 bg-black/40 sm:bg-white/20 backdrop-blur-sm h-full justify-center px-5 sm:px-8 py-0">
            <div>
              <p className="text-white font-bold text-base sm:text-xl md:text-2xl uppercase tracking-wide">ÜCRETSİZ KARGO</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">Saat 16:00&apos;a kadar verilen tüm siparişler MNG Kargo ile aynı gün kargoda</p>
            </div>
            <div>
              <p className="text-white font-bold text-base sm:text-xl md:text-2xl uppercase tracking-wide">Whatsapp Sipariş Hattı</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">Siparişleriniz ile ilgili aklınıza takılan hertürlü soru ile alakalı Whatsapp Destek hattı üzerinden iletişime geçebilirsiniz.</p>
            </div>
            <div>
              <p className="text-white font-bold text-base sm:text-xl md:text-2xl uppercase tracking-wide">%100 Güvenli Alışveriş</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base mt-1 leading-relaxed">256Bit SSL &amp; 3D Secure ile Alışverişleriniz Güvence Altında</p>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp bant */}
      <div className="w-full bg-[#414141] py-3 sm:py-4">
        <div className="max-w-[1280px] mx-auto px-3 sm:px-5 text-center">
          <p className="text-white text-xs sm:text-sm">
            Odun, Kömür, Pelet, Gübre Çeşitlerinin satışı sadece{" "}
            <a
              href="https://wa.me/905424136532"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F88D58] font-semibold hover:text-[#c76b3e] transition-colors"
            >
              Whatsapp CANLI DESTEK HATTI
            </a>{" "}
            üzerinden yapılmaktadır.
          </p>
        </div>
      </div>

      {/* Ürünler — kalan */}
      {restRows.length > 0 && (
        <section className="bg-[#fefaf5] pt-6 pb-12">
          <div className="max-w-[1280px] mx-auto px-3 sm:px-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {restRows.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
