import type { Metadata } from "next";
import { products, categories, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mağaza",
  description:
    "Kömür, pelet yakıt, organik gübre, kedi maması, köpek maması ve daha fazlası. Birincioğlu Ticaret mağazasından tüm ürünlerimizi inceleyin.",
};

type Props = {
  searchParams: Promise<{ kategori?: string }>;
};

export default async function MagazaPage({ searchParams }: Props) {
  const { kategori } = await searchParams;

  const activeCategory = kategori
    ? categories.find((c) => c.slug === kategori)
    : null;

  const filteredProducts = kategori
    ? getProductsByCategory(kategori)
    : products;

  return (
    <div className="bg-[#fefaf5]">
      <div className="max-w-[1280px] mx-auto px-5 py-8">
        <div className="flex gap-8">

          {/* Sol: Filtrele */}
          <aside className="hidden md:block w-52 shrink-0">
            <div className="bg-white border border-gray-100 rounded-xl p-4">
              <p className="text-xs font-bold text-[#414141] uppercase tracking-wider mb-3">Filtrele</p>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/magaza"
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      !kategori
                        ? "bg-[#fef3e5] text-[#f88d58] font-semibold"
                        : "text-[#414141] hover:bg-[#fef3e5] hover:text-[#f88d58]"
                    }`}
                  >
                    Hepsi
                  </Link>
                </li>
                {categories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      href={`/magaza?kategori=${cat.slug}`}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        cat.slug === kategori
                          ? "bg-[#fef3e5] text-[#f88d58] font-semibold"
                          : "text-[#414141] hover:bg-[#fef3e5] hover:text-[#f88d58]"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sağ: Ürünler */}
          <div className="flex-1">
            {/* Mobil kategori filtreleri */}
            <div className="flex md:hidden flex-wrap gap-2 mb-4">
              <Link
                href="/magaza"
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  !kategori
                    ? "bg-[#f88d58] text-white"
                    : "bg-white border border-gray-200 hover:border-[#f88d58] hover:text-[#f88d58] text-[#414141]"
                }`}
              >
                Hepsi
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/magaza?kategori=${cat.slug}`}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                    cat.slug === kategori
                      ? "bg-[#f88d58] text-white"
                      : "bg-white border border-gray-200 hover:border-[#f88d58] hover:text-[#f88d58] text-[#414141]"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            {activeCategory && (
              <h1 className="text-xl font-bold text-[#414141] mb-1">{activeCategory.name}</h1>
            )}
            <p className="text-sm text-gray-400 mb-4">{filteredProducts.length} ürün</p>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-16 text-gray-400">
                <p>Bu kategoride henüz ürün bulunmamaktadır.</p>
                <Link href="/magaza" className="mt-4 inline-block text-[#f88d58] hover:underline text-sm">
                  Tüm ürünlere dön
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
