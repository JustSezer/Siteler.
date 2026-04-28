import { getAllPosts, markdownToHtml } from "@/lib/blog";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = getAllPosts().slice(0, 20);

  const items = posts
    .map((post) => {
      const url = `${site.url}/blog/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();
      const html = markdownToHtml(post.content);
      const categories = [post.category, ...post.tags]
        .filter(Boolean)
        .map((c) => `<category>${escapeXml(c)}</category>`)
        .join("\n      ");

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.description)}</description>
      <content:encoded><![CDATA[${html}]]></content:encoded>
      <pubDate>${pubDate}</pubDate>
      ${categories}
      <author>editor@et-mangal.com (${escapeXml(post.author)})</author>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(site.fullName)}</title>
    <link>${site.url}</link>
    <description>${escapeXml(site.description)}</description>
    <language>tr</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml" />
    <copyright>© ${new Date().getFullYear()} ${escapeXml(site.name)}</copyright>
    <ttl>60</ttl>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
