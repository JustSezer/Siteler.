import type { MetadataRoute } from "next";

const BASE_URL = "https://bakacakkofte.com";

const blogPosts: { slug: string; date: string }[] = [
  { slug: "food-truck-franchise-nasil-kurulur", date: "2025-01-15" },
  { slug: "kofte-food-truck-karlik-stratejileri", date: "2025-02-22" },
  { slug: "franchise-bayi-deneyimi", date: "2025-03-10" },
  { slug: "food-truck-lokasyon-secimi", date: "2025-04-02" },
  { slug: "kofte-tarihce-bakacak", date: "2025-04-20" },
  { slug: "food-truck-muhasebe-ipuclari", date: "2025-05-05" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date("2025-05-01"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/hakkimizda`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date("2025-05-05"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/iletisim`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/basvuru`,
      lastModified: new Date("2025-04-01"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
