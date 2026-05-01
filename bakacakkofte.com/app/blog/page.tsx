import type { Metadata } from "next";
import BlogWithFilter from "@/components/sections/BlogWithFilter";

export const metadata: Metadata = {
  title: "Food Truck & Franchise Rehberi | Bakacak Köfte Blog",
  description: "Food truck bayilik, franchise girişimciliği ve köfte sektörü hakkında güncel rehberler. Karavan Köfte blog — bilgi, deneyim ve strateji.",
  alternates: {
    canonical: "https://bakacakkofte.com/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--color-black) 0%, #1a0505 100%)",
          color: "white",
          padding: "8rem 0 6rem",
        }}
      >
        <div className="container-site">
          <span className="tag-red" style={{ marginBottom: "1rem" }}>Blog</span>
          {/* H1 — birincil: food truck franchise rehberi blog */}
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "1rem" }}>
            Food Truck Franchise Rehberi:{" "}
            <span style={{ color: "var(--color-red)" }}>Bilgi, Deneyim, İlham</span>
          </h1>
          <p style={{ color: "#AAA", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: "520px" }}>
            Karavan Köfte blog — food truck girişimciliği, bayilik süreci, köfte sektörü ve bayi hikayeleri.
          </p>
        </div>
      </section>

      <BlogWithFilter />
    </>
  );
}
