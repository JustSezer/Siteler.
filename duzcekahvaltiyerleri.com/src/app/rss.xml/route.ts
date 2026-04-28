import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://duzcekahvaltiyerleri.com";

export async function GET() {
  const posts = getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${BASE_URL}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.description}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      ${post.image ? `<enclosure url="${post.image}" type="image/jpeg" />` : ""}
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Düzce Kahvaltı Yerleri</title>
    <link>${BASE_URL}</link>
    <description>Düzce'nin en iyi kahvaltı mekanları, serpme kahvaltı yerleri ve köy kahvaltısı adresleri.</description>
    <language>tr</language>
    <managingEditor>merhaba@duzcekahvaltiyerleri.com</managingEditor>
    <webMaster>merhaba@duzcekahvaltiyerleri.com</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=144&q=80</url>
      <title>Düzce Kahvaltı Yerleri</title>
      <link>${BASE_URL}</link>
    </image>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
