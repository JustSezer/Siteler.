import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/section-heading";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 4);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-accent-warm">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 lg:mb-20">
          <SectionHeading
            title="Blog"
            subtitle="Lezzet notları ve rehber yazılar"
            align="left"
          />
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors border-b border-foreground-muted/30 hover:border-foreground pb-0.5"
          >
            Tüm Yazılar
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              data-a11y-ui
              className={`group block no-underline ${i === 0 ? "sm:col-span-2" : ""}`}
            >
              <article className="h-full flex flex-col justify-between rounded-xl border border-border bg-background p-6 lg:p-8 hover:border-primary/40 hover:shadow-md transition-all duration-300">
                {/* Top row: category + date */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-foreground-muted text-xs whitespace-nowrap">
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug flex-1 ${
                    i === 0 ? "text-2xl lg:text-3xl" : "text-lg"
                  }`}
                >
                  {post.title}
                </h3>

                {i === 0 && (
                  <p className="text-foreground-muted text-sm mt-3 leading-relaxed line-clamp-2">
                    {post.description}
                  </p>
                )}

                {/* Bottom row: reading time + arrow */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
                  <span className="text-foreground-muted text-xs">{post.readingTime} okuma</span>
                  <div className="w-7 h-7 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                    <ArrowUpRight className="w-3 h-3 text-foreground-muted group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Mobile all posts link */}
        <div className="sm:hidden text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted hover:text-foreground text-sm font-medium transition-colors"
          >
            Tüm Yazıları Gör
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
