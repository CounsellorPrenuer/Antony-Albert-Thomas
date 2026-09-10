import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBlogPage, getPosts } from "@/sanity/lib/content";

export const metadata = {
  title: "Blog | Blueprint Advisors",
  description: "Career strategy and guidance articles from Blueprint Advisors.",
};

export default async function BlogPage() {
  const [page, posts] = await Promise.all([getBlogPage(), getPosts()]);

  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <SectionHeading title={page.title} subtitle={page.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.length > 0 ? (
            posts.map((post: any) => (
              <BlogCard
                key={post._id}
                title={post.title}
                slug={post.slug}
                excerpt={post.excerpt}
                date={post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : undefined}
                author={post.author}
              />
            ))
          ) : (
            <p className="text-sm text-slate-600">No posts yet. Add posts in Sanity Studio.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
