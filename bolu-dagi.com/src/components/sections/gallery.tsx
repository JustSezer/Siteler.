"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const photos = [
  {
    src: "/images/abant-gölü.jpg",
    alt: "Abant Gölü orman ve dağ manzarası",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/yedigöller-milli-parkı.webp",
    alt: "Yedigöller Milli Parkı göl ve orman manzarası",
    span: "",
  },
  {
    src: "/images/kartalkaya-dağ-otelleri.jpg",
    alt: "Kartalkaya dağ otelleri ve kayak merkezi",
    span: "",
  },
  {
    src: "/images/gölcük-tabiat-parkı.jpg",
    alt: "Gölcük Tabiat Parkı doğa manzarası",
    span: "",
  },
  {
    src: "/images/mudurnu-tarihi.jpg",
    alt: "Mudurnu tarihi ilçe Osmanlı mimarisi",
    span: "",
  },
  {
    src: "/images/seben-gölü.jpg",
    alt: "Seben Gölü ve çevre yaylalar",
    span: "col-span-2",
  },
  {
    src: "/images/abant-gölü-konaklama.jpg",
    alt: "Abant Gölü kenarında konaklama tesisleri",
    span: "",
  },
  {
    src: "/images/bungalovlar.jpg",
    alt: "Orman içi dağ evleri ve bungalovlar",
    span: "",
  },
  {
    src: "/images/bolu-şehir-merkezi.jpg",
    alt: "Bolu şehir merkezi genel görünümü",
    span: "",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const navigatePhoto = (direction: number) => {
    if (selectedIndex === null) return;
    const newIndex =
      (selectedIndex + direction + photos.length) % photos.length;
    setSelectedIndex(newIndex);
  };

  return (
    <section id="galeri" className="py-24 lg:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Bolu Dagi Foto Galeri"
          subtitle="Bolu Dagi'nin dört mevsiminden kareler"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, i) => (
            <motion.button
              key={photo.src}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setSelectedIndex(i)}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${photo.span} aspect-[4/3]`}
              aria-label={`${photo.alt} - buyutmek için tikla`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${photo.src}')` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                <span className="text-white text-base font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  Görüntüle
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedIndex(null)}
            role="dialog"
            aria-label="Fotograf görüntüleyici"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
              aria-label="Kapat"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(-1);
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
              aria-label="Onceki fotograf"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto(1);
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-all z-10"
              aria-label="Sonraki fotograf"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full" style={{ aspectRatio: "16/9", maxHeight: "80vh" }}>
                <Image
                  src={photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
              </div>
              <p className="text-center text-white/60 text-sm mt-4">
                {photos[selectedIndex].alt} ({selectedIndex + 1}/{photos.length}
                )
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
