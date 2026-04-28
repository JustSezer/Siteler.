"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";

const dishes = [
  {
    num: "01",
    name: "Bolu Kebabı",
    desc: "Kuzu etinin meşe közünde saatlerce yavaş pişirilmesiyle hazırlanan simge lezzet.",
    image: "/images/bolu-kebabi.webp",
    meta: "2-3 saat  ·  Usta İşi",
  },
  {
    num: "02",
    name: "Sac Kavurma",
    desc: "Demir sac üzerinde tereyağıyla yüksek ateşte kavrulmuş kuzu eti parçaları.",
    image: "/images/saç-kavurma.webp",
    meta: "45 dk  ·  Orta",
  },
  {
    num: "03",
    name: "Kuzu Tandır",
    desc: "Toprak tandırda 6-8 saat düşük ısıda pişirilen, ağızda dağılan kuzu but.",
    image: "/images/kuzu-tandır.webp",
    meta: "6-8 saat  ·  Usta İşi",
  },
  {
    num: "04",
    name: "Orman Kebabı",
    desc: "Kuzu eti, mantar ve sebzeler yağlı kağıtta fırında buharla pişirilir.",
    image: "/images/orman-kebabı.webp",
    meta: "1.5 saat  ·  Orta",
  },
  {
    num: "05",
    name: "Mangal Köfte",
    desc: "El yapımı baharatlı köftenin meşe kömüründe közlenmesiyle hazırlanır.",
    image: "/images/mangal-köfte.webp",
    meta: "30 dk  ·  Kolay",
  },
  {
    num: "06",
    name: "Dana Pirzola",
    desc: "Kalın kesim pirzola meşe kömüründe mühürlenip fırında dinlendirilir.",
    image: "/images/dana-pirzola.jpg",
    meta: "40 dk  ·  Orta",
  },
];

export default function MeatTypes() {
  return (
    <section id="yemekler" className="py-24 lg:py-32 bg-accent-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <SectionHeading
          title="Lezzetler"
          subtitle="Bolu mutfağının en sevilen et yemekleri"
          align="left"
        />

        {/* Horizontal line list */}
        <div className="divide-y divide-border">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group grid grid-cols-12 gap-4 lg:gap-8 py-8 lg:py-10 items-center cursor-default"
            >
              {/* Number */}
              <div className="col-span-2 lg:col-span-1">
                <span className="text-foreground-muted/30 font-serif text-2xl lg:text-3xl font-bold group-hover:text-primary transition-colors duration-500">
                  {dish.num}
                </span>
              </div>

              {/* Image - hidden on mobile */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="w-full aspect-[4/3] rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${dish.image}')` }}
                    role="img"
                    aria-label={dish.name}
                  />
                </div>
              </div>

              {/* Name */}
              <div className="col-span-6 lg:col-span-4">
                <h3 className="font-serif text-xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                  {dish.name}
                </h3>
                <p className="text-foreground-muted text-xs mt-1 lg:hidden">{dish.meta}</p>
              </div>

              {/* Description - hidden on mobile */}
              <div className="hidden lg:block lg:col-span-3">
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {dish.desc}
                </p>
              </div>

              {/* Meta + arrow */}
              <div className="col-span-4 lg:col-span-2 flex items-center justify-end gap-4">
                <span className="hidden lg:block text-foreground-muted text-xs whitespace-nowrap">
                  {dish.meta}
                </span>
                <motion.div
                  whileHover={{ rotate: 45 }}
                  className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted group-hover:text-white transition-colors duration-500" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
