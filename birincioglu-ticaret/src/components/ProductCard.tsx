import Image from "next/image";
import { Product } from "@/data/products";

type Props = {
  product: Product;
};

const WA_NUMBER = "905424136532";

export default function ProductCard({ product }: Props) {
  const message = encodeURIComponent(`Merhaba, "${product.name}" ürünü hakkında bilgi almak istiyorum.`);
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${message}`;

  return (
    <a
      id={product.slug}
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#fefaf5] rounded-lg overflow-hidden flex flex-col cursor-pointer"
    >
      <div className="relative bg-[#fefaf5] w-full" style={{ paddingBottom: "100%" }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-3 absolute inset-0"
          unoptimized
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </div>
      <div className="p-3">
        <h3 className="font-medium text-[#414141] text-sm leading-snug line-clamp-2">
          {product.name}
        </h3>
      </div>
    </a>
  );
}
