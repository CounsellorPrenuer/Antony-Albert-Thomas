import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { Container } from "@/components/ui/Container";
import { SanityImage } from "@/components/ui/SanityImage";
import { getPostBySlug, getPosts } from "@/sanity/lib/content";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found | Blueprint Advisors" };
  }

  return {
    title: `${post.seoTitle || post.title} | Blueprint Advisors`,
    description: post.seoDescription || post.excerpt || "Career guidance article by Blueprint Advisors.",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="bg-white py-16 sm:py-20">
      <Container className="max-w-4xl">
        <p className="text-sm text-slate-500">{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : ""}</p>
        <h1 className="mt-2 text-4xl font-semibold text-[#001F3F]">{post.title}</h1>
        {post.excerpt && <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>}
        <div className="mt-8 h-80 overflow-hidden rounded-3xl">
          <SanityImage image={post.coverImage} alt={post.title} className="h-80" />
        </div>
        <div className="prose prose-slate mt-8 max-w-none">
          <PortableText value={(post.body || []) as never} />
        </div>
      </Container>
    </article>
  );
}
