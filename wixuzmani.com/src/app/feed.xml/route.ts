import { SITE } from "@/lib/site";
import { BLOG_POSTS } from "@/lib/blog";

export const dynamic = "force-static";

export function GET() {
  const base = SITE.url;
  const now = new Date().toUTCString();

  const items = BLOG_POSTS.map((post) => {
    const pubDate = new Date(post.publishedAt).toUTCString();
    return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${base}/blog/${post.slug}</link>
      <guid isPermaLink="true">${base}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category><![CDATA[${post.category}]]></category>
    </item>`;
  }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE.name} · Blog</title>
    <link>${base}/blog</link>
    <description>Wix, dijital pazarlama ve web hizmetleri üzerine rehberler. Türkiye'deki küçük işletmeler için pratik içerikler.</description>
    <language>tr</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
    <copyright>© ${new Date().getFullYear()} ${SITE.name}</copyright>
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
