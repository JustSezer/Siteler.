import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import SectionHeading from "@/components/ui/section-heading";

export default function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Son Yazilar"
          subtitle="Bolu Dagi hakkında en güncel rehber yazilar"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <article className="bg-card rounded-2xl shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-500 h-full flex flex-col p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold px-3 py-1 rounded-full bg-primary/10">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-base text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      day: "numeric",
                      month: "long",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readingTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed flex-1 line-clamp-3">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-4 group-hover:gap-2 transition-all duration-300">
                  Devamini Oku
                  <ArrowRight className="w-4 h-4" />
                </span>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
          >
            Tum Yazilari Gor
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
