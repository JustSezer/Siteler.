import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, ArrowUpRight } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getPostBySlug, getAllSlugs, getAllPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: `${post.title} | Bolu Et Lokantası Rehberi`,
    description: post.description,
    alternates: {
      canonical: `https://boluetlokantasi.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      locale: "tr_TR",
      siteName: "Bolu Et Lokantası Rehberi",
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

function markdownToHtml(content: string): string {
  let html = content;

  // Headers
  html = html.replace(
    /^#### (.+)$/gm,
    '<h4 class="text-lg font-bold text-foreground mt-6 mb-2">$1</h4>'
  );
  html = html.replace(
    /^### (.+)$/gm,
    '<h3 class="font-serif text-xl font-bold text-foreground mt-10 mb-3">$1</h3>'
  );
  html = html.replace(
    /^## (.+)$/gm,
    '<h2 class="font-serif text-2xl sm:text-3xl font-bold text-foreground mt-14 mb-5 pb-3 border-b border-border">$1</h2>'
  );

  // Bold
  html = html.replace(
    /\*\*(.+?)\*\*/g,
    '<strong class="font-semibold text-foreground">$1</strong>'
  );

  // Italic
  html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");

  // Links
  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_match: string, text: string, url: string) => {
      if (url.startsWith("http")) {
        return `<a href="${url}" class="text-primary underline underline-offset-4 hover:text-primary-light transition-colors" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      return `<a href="${url}" class="text-primary underline underline-offset-4 hover:text-primary-light transition-colors">${text}</a>`;
    }
  );

  // Unordered lists
  html = html.replace(
    /^- (.+)$/gm,
    '<li class="ml-6 list-disc text-foreground-muted leading-relaxed">$1</li>'
  );

  // Numbered lists
  html = html.replace(
    /^\d+\. (.+)$/gm,
    '<li class="ml-6 list-decimal text-foreground-muted leading-relaxed">$1</li>'
  );

  // Table
  html = html.replace(
    /\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g,
    (_, header, body) => {
      const ths = header
        .split("|")
        .filter((s: string) => s.trim())
        .map(
          (s: string) =>
            `<th class="text-left p-3 font-semibold text-foreground text-sm">${s.trim()}</th>`
        )
        .join("");
      const rows = body
        .trim()
        .split("\n")
        .map((row: string) => {
          const tds = row
            .split("|")
            .filter((s: string) => s.trim())
            .map(
              (s: string) =>
                `<td class="p-3 text-foreground-muted text-sm">${s.trim()}</td>`
            )
            .join("");
          return `<tr class="border-t border-border">${tds}</tr>`;
        })
        .join("");
      return `<div class="overflow-x-auto my-8"><table class="w-full text-sm border border-border rounded-xl overflow-hidden"><thead class="bg-accent"><tr>${ths}</tr></thead><tbody>${rows}</tbody></table></div>`;
    }
  );

  // Horizontal rules
  html = html.replace(/^---$/gm, '<hr class="my-10 border-border" />');

  // Paragraphs
  html = html
    .split("\n\n")
    .map((block) => {
      const trimmed = block.trim();
      if (!trimmed) return "";
      if (trimmed.startsWith("<")) return trimmed;
      if (trimmed.startsWith("#")) return trimmed;
      if (trimmed.includes('<li class="')) {
        const isOrdered = trimmed.includes("list-decimal");
        const tag = isOrdered ? "ol" : "ul";
        return `<${tag} class="my-5 space-y-2">${trimmed}</${tag}>`;
      }
      return `<p class="text-foreground-muted leading-[1.85] mb-5">${trimmed.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");

  return html;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const contentHtml = markdownToHtml(post.content);

  const relatedPosts = getAllPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Bolu Et Lokantası Rehberi",
      url: "https://boluetlokantasi.com",
    },
    mainEntityOfPage: `https://boluetlokantasi.com/blog/${slug}`,
  };

  return (
    <>
      <Header />
      <main className="bg-background">
        <article className="max-w-[720px] mx-auto px-6 lg:px-0 pt-32 pb-20">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-foreground-muted text-[13px] uppercase tracking-wider font-medium mb-10 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Blog
          </Link>

          {/* Category + Date */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="text-primary font-semibold text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-foreground-muted text-sm flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("tr-TR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-foreground-muted mb-10 pb-8 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime} okuma
            </span>
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </span>
          </div>

          {/* Content */}
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-14 pt-8 border-t border-border">
              <p className="text-foreground-muted text-[11px] uppercase tracking-[0.15em] font-medium mb-4">
                Etiketler
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-foreground-muted bg-accent px-3 py-1.5 rounded-full border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-24">
            <div className="border-t border-border pt-14">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-10">
                Diğer Yazılar
              </h2>
              <div className="divide-y divide-border">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    className="group flex items-start justify-between gap-6 py-7"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-2">
                        {rp.category}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug mb-1">
                        {rp.title}
                      </h3>
                      <p className="text-foreground-muted text-sm line-clamp-1 hidden sm:block">
                        {rp.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-4 shrink-0">
                      <span className="text-foreground-muted text-xs whitespace-nowrap">
                        {new Date(rp.date).toLocaleDateString("tr-TR", {
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
          </div>
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </main>
      <Footer />
    </>
  );
}
