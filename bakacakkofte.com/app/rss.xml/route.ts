import { NextResponse } from "next/server";

const BASE_URL = "https://bakacakkofte.com";
const SITE_TITLE = "Bakacak Köfte — Food Truck Franchise Blogu";
const SITE_DESC =
  "Food truck franchise, girişimcilik, lezzet ve bayilik hikayeleri. Bakacak Köfte resmi blogu.";
const SITE_AUTHOR = "Bakacak Köfte";

const posts = [
  {
    slug: "food-truck-franchise-nasil-kurulur",
    title: "Food Truck Franchise Nasıl Kurulur? 2025 Kapsamlı Rehber",
    excerpt:
      "Food truck işine girmeden önce bilmeniz gereken tüm adımlar, maliyetler ve dikkat edilmesi gerekenler.",
    date: "2025-01-15",
    category: "Franchise",
  },
  {
    slug: "kofte-food-truck-karlik-stratejileri",
    title: "Kış Mevsiminde Food Truck Satışlarını Artırmanın 8 Yolu",
    excerpt:
      "Soğuk havalarda müşteri çekmenin sırları. Etkinlik planlaması, menü uyarlaması ve konum stratejileri.",
    date: "2025-02-22",
    category: "Strateji",
  },
  {
    slug: "franchise-bayi-deneyimi",
    title: "Ankara'dan Bir Bayinin 6 Aylık Yolculuğu",
    excerpt:
      "Mehmet'in sıfırdan başladığı yolculuğu, karşılaştığı zorluklar ve öğrendikleri.",
    date: "2025-03-10",
    category: "Bayi Hikayeleri",
  },
  {
    slug: "food-truck-lokasyon-secimi",
    title: "Doğru Lokasyon = Başarılı Food Truck: 5 Altın Kural",
    excerpt:
      "Nereden çalışacağınız, ne kadar kazanacağınızı belirler. Doğru konum seçiminin kriterleri.",
    date: "2025-04-02",
    category: "Strateji",
  },
  {
    slug: "kofte-tarihce-bakacak",
    title: "Bakacak Köftesinin 30 Yıllık Hikayesi",
    excerpt: "Bolu Dağı'nın efsane lezzetinin perde arkası.",
    date: "2025-04-20",
    category: "Hikaye",
  },
  {
    slug: "food-truck-muhasebe-ipuclari",
    title: "Food Truck İşletmesinde Muhasebe: Başlangıç Rehberi",
    excerpt: "Gider takibi, kâr hesabı ve vergi yükümlülükleri.",
    date: "2025-05-05",
    category: "İşletme",
  },
];

export async function GET() {
  const lastBuildDate = new Date(
    Math.max(...posts.map((p) => new Date(p.date).getTime()))
  ).toUTCString();

  const items = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author><![CDATA[${SITE_AUTHOR}]]></author>
    </item>`
    )
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title><![CDATA[${SITE_TITLE}]]></title>
    <link>${BASE_URL}</link>
    <description><![CDATA[${SITE_DESC}]]></description>
    <language>tr</language>
    <copyright>Copyright ${new Date().getFullYear()} Bakacak Köfte</copyright>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <managingEditor>bayilik@bakacakkofte.com (${SITE_AUTHOR})</managingEditor>
    <webMaster>bayilik@bakacakkofte.com (${SITE_AUTHOR})</webMaster>
    <ttl>60</ttl>
    <image>
      <url>${BASE_URL}/logo.jpg</url>
      <title><![CDATA[${SITE_TITLE}]]></title>
      <link>${BASE_URL}</link>
    </image>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
