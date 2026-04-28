import { getAllPosts } from "@/lib/blog";

const BASE = "https://etmangalbolu.com";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function GET() {
  const posts = getAllPosts().slice(0, 20);

  const items = posts
    .map((p) => {
      const url = `${BASE}/blog/${p.slug}`;
      const pubDate = new Date(p.date).toUTCString();
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escape(p.description)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>${escape(p.category)}</category>
      <author>editor@etmangalbolu.com (${escape(p.author)})</author>
    </item>`;
    })
    .join("\n");

  const lastBuildDate =
    posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Bolu Mangal Rehberi</title>
    <link>${BASE}</link>
    <description>Bolu mangal kültürü, et seçimi, pişirme teknikleri ve saha gözlemleri.</description>
    <language>tr</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${BASE}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${BASE}/og-image.jpg</url>
      <title>Bolu Mangal Rehberi</title>
      <link>${BASE}</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
