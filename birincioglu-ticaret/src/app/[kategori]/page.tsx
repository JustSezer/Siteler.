import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ kategori: string }>;
};

export async function generateStaticParams() {
  return categories.map((cat) => ({ kategori: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { kategori } = await params;
  const category = getCategoryBySlug(kategori);
  if (!category) return { title: "Kategori Bulunamadı" };
  return {
    title: `${category.name} — Birincioğlu Ticaret`,
    description: `${category.name} ürünleri — Birincioğlu Ticaret'te toptan ve perakende satış.`,
  };
}

export default async function KategoriPage({ params }: Props) {
  const { kategori } = await params;
  const category = getCategoryBySlug(kategori);
  if (!category) notFound();

  const categoryProducts = getProductsByCategory(kategori);

  return (
    <div className="bg-[#fefaf5] min-h-screen">

      {/* Banner */}
      {category.banner && (
        <div className="relative w-full overflow-hidden">
          <Image
            src={category.banner}
            alt={category.name}
            width={1920}
            height={811}
            className="w-full h-auto"
            priority
            sizes="100vw"
          />
        </div>
      )}

      {/* Başlık */}
      <div className="bg-[#fefaf5] border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-4 sm:py-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#414141]">{category.name}</h1>
        </div>
      </div>

      {/* Ürünler */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-5 py-6 sm:py-8">
        {categoryProducts.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            <p className="mb-4 text-sm">Bu kategoride henüz ürün bulunmamaktadır.</p>
            <Link href="/magaza" className="text-[#f88d58] hover:underline text-sm">
              Tüm ürünlere dön
            </Link>
          </div>
        ) : (
          <>
            <p className="text-xs sm:text-sm text-gray-400 mb-4">{categoryProducts.length} ürün</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {kategori === "yakacak-cesitleri" && (
              <div className="mt-10 border-t border-gray-200 pt-8 text-center">
                <p className="text-sm sm:text-base text-[#414141] leading-relaxed">
                  Odun, Kömür, Pelet, Gübre Çeşitlerinin satışı sadece{" "}
                  <span className="font-bold text-[#f88d58]">Whatsapp CANLI DESTEK HATTI</span>{" "}
                  üzerinden yapılmaktadır.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
