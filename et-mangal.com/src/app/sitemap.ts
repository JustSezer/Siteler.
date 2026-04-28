import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${site.url}/mangal-rehberi`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/et-cesitleri`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/tarifler`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${site.url}/sss`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/iletisim`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
    { url: `${site.url}/gizlilik`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/cerez-politikasi`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
    { url: `${site.url}/erisilebilirlik`, lastModified: now, changeFrequency: "yearly", priority: 0.1 },
  ];

  const posts = getAllPosts().map((post) => ({
    url: `${site.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...posts];
}
