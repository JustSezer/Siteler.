"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { categories, LOGO_URL } from "@/data/products";
import { Menu, X, ChevronDown, Search, User, ShoppingCart } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="w-full">
      <nav className="bg-[#fefaf5] sticky top-0 z-50">

        {/* Üst satır: Logo | Arama | Üye Girişi */}
        <div className="max-w-[1280px] mx-auto px-5">
          <div className="hidden md:grid grid-cols-3 items-center py-2">
            {/* Sol: Logo */}
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src={LOGO_URL}
                  alt="Birincioğlu Ticaret"
                  width={200}
                  height={114}
                  className="w-[120px]"
                  priority
                />
              </Link>
            </div>

            {/* Orta: Arama kutusu */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-sm">
                <input
                  type="text"
                  placeholder="Ürün ara..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-gray-200 rounded-full px-5 py-3.5 text-sm text-[#414141] placeholder-gray-400 focus:outline-none focus:border-[#F88D58] transition-colors"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F88D58] transition-colors">
                  <Search size={16} />
                </button>
              </div>
            </div>

            {/* Sağ: Üye Girişi + Sepet */}
            <div className="flex justify-end items-center gap-2">
              <button className="flex items-center gap-2 border border-gray-200 hover:border-[#F88D58] text-[#414141] hover:text-[#F88D58] transition-colors text-sm font-medium px-4 py-2 rounded-full">
                <User size={16} />
                Üye Girişi
              </button>
              <button className="flex items-center justify-center border border-gray-200 hover:border-[#F88D58] text-[#414141] hover:text-[#F88D58] transition-colors p-2 rounded-full">
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>

          {/* Mobil üst satır */}
          <div className="md:hidden flex items-center justify-between h-14">
            <Link href="/">
              <Image
                src={LOGO_URL}
                alt="Birincioğlu Ticaret"
                width={200}
                height={114}
                className="h-14 w-auto object-contain"
                priority
                unoptimized
              />
            </Link>
            <div className="flex items-center gap-3">
              <button className="text-[#414141] relative" aria-label="Sepet">
                <ShoppingCart size={24} />
              </button>
              <button
                className="text-[#414141]"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menü"
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil arama — header altında sabit */}
        <div className="md:hidden border-t border-gray-100 px-4 py-2 bg-[#fefaf5]">
          <div className="relative">
            <input
              type="text"
              placeholder="Ürün ara..."
              className="w-full border border-gray-200 rounded-full px-4 py-2 text-sm text-[#414141] placeholder-gray-400 focus:outline-none focus:border-[#F88D58] transition-colors"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#F88D58] transition-colors">
              <Search size={16} />
            </button>
          </div>
        </div>

        {/* Alt satır: Navigasyon */}
        <div className="hidden md:block border-t border-gray-100 bg-[#fefaf5]">
          <div className="max-w-[1280px] mx-auto px-5">
            <nav aria-label="Ana navigasyon" className="flex items-center justify-center gap-1 h-10">
              <Link href="/" className="px-3 py-1.5 text-base text-[#414141] hover:text-[#F88D58] font-medium transition-colors">
                Anasayfa
              </Link>

              <div className="relative">
                <Link
                  href="/magaza"
                  className="flex items-center gap-1 px-3 py-1.5 text-base text-[#414141] hover:text-[#F88D58] font-medium transition-colors"
                  onMouseEnter={() => setStoreOpen(true)}
                  onMouseLeave={() => setStoreOpen(false)}
                >
                  Mağaza <ChevronDown size={14} />
                </Link>
                {storeOpen && (
                  <div
                    className="absolute top-full left-0 w-52 bg-[#fefaf5] shadow-lg border border-gray-100 rounded-lg py-1 z-50"
                    onMouseEnter={() => setStoreOpen(true)}
                    onMouseLeave={() => setStoreOpen(false)}
                  >
                    <Link href="/kedi-kumu" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Kedi Kumu</Link>
                    <Link href="/kedi-mamasi" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Kedi Maması</Link>
                    <Link href="/kopek-mamasi" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Köpek Maması</Link>
                    <Link href="/pelet-yakacak" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Pelet Çeşitleri</Link>
                    <Link href="/organik-gubre" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Organik Gübre</Link>
                    <Link href="/gubre" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Gübre Çeşitleri</Link>
                    <Link href="/yakacak-cesitleri" className="block px-4 py-2 text-base text-[#414141] hover:bg-[#fef3e5] hover:text-[#F88D58] transition-colors">Yakacak Çeşitleri</Link>
                  </div>
                )}
              </div>

              <Link href="/hakkimizda" className="px-3 py-1.5 text-base text-[#414141] hover:text-[#F88D58] font-medium transition-colors">
                Hakkımızda
              </Link>
              <Link href="/iletisim" className="px-3 py-1.5 text-base text-[#414141] hover:text-[#F88D58] font-medium transition-colors">
                İletişim
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobil menü */}
        {mobileOpen && (
          <div className="md:hidden bg-[#fefaf5] border-t border-gray-100 px-5 pb-4">
            <button
              className="w-full flex items-center justify-between py-3 text-[#414141] font-medium border-b border-gray-50 text-sm"
              onClick={() => setStoreOpen(!storeOpen)}
            >
              Mağaza <ChevronDown size={14} className={storeOpen ? "rotate-180 transition-transform" : "transition-transform"} />
            </button>
            {storeOpen && (
              <div className="pl-3 pb-1 border-b border-gray-50">
                {[
                  { href: "/kedi-kumu", name: "Kedi Kumu" },
                  { href: "/kedi-mamasi", name: "Kedi Maması" },
                  { href: "/kopek-mamasi", name: "Köpek Maması" },
                  { href: "/pelet-yakacak", name: "Pelet Çeşitleri" },
                  { href: "/organik-gubre", name: "Organik Gübre" },
                  { href: "/gubre", name: "Gübre Çeşitleri" },
                  { href: "/yakacak-cesitleri", name: "Yakacak Çeşitleri" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-2 py-2 text-sm text-[#414141]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
            <Link href="/hakkimizda" className="block py-3 text-[#414141] font-medium border-b border-gray-50 text-sm" onClick={() => setMobileOpen(false)}>
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="block py-3 text-[#414141] font-medium border-b border-gray-50 text-sm" onClick={() => setMobileOpen(false)}>
              İletişim
            </Link>
            <button className="flex items-center gap-2 mt-3 text-[#414141] text-sm font-medium">
              <User size={16} /> Üye Girişi
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}
