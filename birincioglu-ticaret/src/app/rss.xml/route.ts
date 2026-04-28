import { products } from "@/data/products";

const BASE_URL = "https://www.birinciogluticaret.com";

export async function GET() {
  const items = products
    .map(
      (product) => `
    <item>
      <title><![CDATA[${product.name}]]></title>
      <link>${BASE_URL}/magaza/${product.category}#${product.slug}</link>
      <guid>${BASE_URL}/magaza/${product.category}#${product.slug}</guid>
      <description><![CDATA[${product.description} — ${product.weight} — ₺${product.price.toLocaleString("tr-TR")}${product.freeShipping ? " (Ücretsiz Kargo)" : ""}]]></description>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <price>${product.price}</price>
    </item>`
    )
    .join("");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Birincioğlu Ticaret Ürünleri</title>
    <link>${BASE_URL}</link>
    <description>Birincioğlu Ticaret — Kömür, pelet, gübre ve evcil hayvan ürünleri. En uygun fiyat en üst kalite.</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
