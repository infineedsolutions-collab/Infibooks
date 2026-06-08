import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import CtaBand from "@/components/CtaBand";
import { posts, getPost, formatDate, coverImage } from "@/lib/blog";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function ResourcePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/resources/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article>
        <header className="relative overflow-hidden bg-white pt-20 dark:bg-[#0B0F1A]">
          {/* cover image behind the header */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={coverImage(post.slug)} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/80 to-white/55 dark:from-[#0B0F1A]/92 dark:via-[#0B0F1A]/82 dark:to-[#0B0F1A]/55" />
          <div className="container-x relative max-w-3xl py-16">
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-[#6B7589]">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <Icon name="arrow" className="h-3.5 w-3.5 text-slate-300" />
              <Link href="/resources" className="hover:text-brand-700">Resources</Link>
            </nav>
            <span className="mt-6 inline-block rounded-full border border-brand-200 bg-brand-50 dark:bg-[#3D7BFF]/10 px-3 py-1 text-xs font-semibold text-brand-700 dark:text-[#5B91FF]">
              {post.category}
            </span>
            <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-charcoal dark:text-[#F4F6FB] text-balance sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500 dark:text-[#6B7589]">
              <span className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white">
                  {post.author.charAt(0)}
                </span>
                {post.author}
              </span>
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="container-x max-w-3xl py-14">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-[#A6B0C3]">
            {post.body.map((block, i) =>
              block.startsWith("## ") ? (
                <h2 key={i} className="!mt-10 font-display text-2xl font-bold text-charcoal dark:text-[#F4F6FB]">
                  {block.replace("## ", "")}
                </h2>
              ) : (
                <p key={i}>{block}</p>
              )
            )}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/70 dark:border-white/10 pt-8">
            <Link href="/resources" className="btn-secondary">
              <Icon name="arrow" className="h-4 w-4 rotate-180" />
              Back to resources
            </Link>
            <Link href="/contact" className="btn-primary">
              Get expert help
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200/70 dark:border-white/10 bg-ivory dark:bg-[#0B0F1A] py-20">
        <div className="container-x">
          <h2 className="font-display text-2xl font-extrabold text-charcoal dark:text-[#F4F6FB]">Keep reading</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/resources/${p.slug}`} className="card-hover group flex h-full flex-col">
                <span className="text-xs font-semibold text-brand-600 dark:text-[#5B91FF]">{p.category}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-charcoal dark:text-[#F4F6FB] transition-colors group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-[#A6B0C3]">{p.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 dark:text-[#5B91FF]">
                  Read
                  <Icon name="arrow" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
