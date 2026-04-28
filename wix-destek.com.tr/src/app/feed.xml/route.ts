import { BLOG_POSTS } from "@/lib/blog";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const items = BLOG_POSTS.map((post) => {
    const url = `${SITE.url}/blog/${post.slug}`;
    const pubDate = new Date(post.publishedAt).toUTCString();
    return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <category>${post.category}</category>
    </item>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[${SITE.fullName} Blog]]></title>
    <link>${SITE.url}/blog</link>
    <description><![CDATA[${SITE.description}]]></description>
    <language>tr</language>
    <atom:link href="${SITE.url}/feed.xml" rel="self" type="application/rss+xml"/>
    <copyright>© ${new Date().getFullYear()} ${SITE.fullName}</copyright>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
