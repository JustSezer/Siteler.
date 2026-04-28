import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Bolu Et Lokantası Rehberi",
  description:
    "Bolu et kültürü, lokanta rehberleri, pişirme teknikleri ve yöresel lezzetler hakkında yazılar.",
  alternates: {
    canonical: "https://boluetlokantasi.com/blog",
  },
  openGraph: {
    title: "Blog | Bolu Et Lokantası Rehberi",
    description:
      "Bolu et kültürü, lokanta rehberleri, pişirme teknikleri ve yöresel lezzetler hakkında yazılar.",
    type: "website",
    locale: "tr_TR",
    url: "https://boluetlokantasi.com/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-28 pb-24 bg-background min-h-screen">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Page header */}
          <div className="mb-16 lg:mb-20">
            <div className="w-12 h-[2px] bg-primary mb-8" />
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-5">
              Blog
            </h1>
            <p className="text-foreground-muted text-lg max-w-lg">
              Bolu et kültürü, lokanta rehberleri ve yöresel lezzetler hakkında yazılar.
            </p>
          </div>

          {/* Featured post */}
          {posts.length > 0 && (
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group block mb-5"
            >
              <article className="rounded-2xl border border-border bg-accent p-8 lg:p-12 hover:border-primary/40 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                      Öne Çıkan
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-foreground-muted border border-border px-3 py-1.5 rounded-full">
                      {posts[0].category}
                    </span>
                  </div>
                  <span className="text-foreground-muted text-sm">
                    {new Date(posts[0].date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight max-w-3xl mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-foreground-muted leading-relaxed max-w-2xl mb-8">
                  {posts[0].description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-foreground-muted text-sm">{posts[0].readingTime} okuma</span>
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    Yazıyı Oku
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Rest of posts - line list style */}
          <div className="divide-y divide-border">
            {posts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex items-start gap-6 lg:gap-10 py-8 lg:py-10"
              >
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 text-xs text-foreground-muted mb-2">
                    <span className="text-primary font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span>&middot;</span>
                    <span>{post.readingTime} okuma</span>
                  </div>
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-1">
                    {post.title}
                  </h3>
                  <p className="text-foreground-muted text-sm line-clamp-1 hidden sm:block">
                    {post.description}
                  </p>
                </div>

                {/* Date + Arrow */}
                <div className="flex flex-col items-end gap-4 shrink-0">
                  <span className="text-foreground-muted text-xs whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <ArrowUpRight className="w-3.5 h-3.5 text-foreground-muted group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
