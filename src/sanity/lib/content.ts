type Testimonial = (typeof defaultTestimonials)[number];
type BlogPage = typeof defaultBlogPage;
type ContactPage = typeof defaultContactPage;
type BookPage = typeof defaultBookPage;

type ServicesPage = { title: string; subtitle: string };
type TestimonialsPage = { title: string; subtitle: string };

type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: unknown;
  author?: string;
  publishedAt?: string;
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

export async function getSiteSettings() {
  const data = await sanityFetch<SiteSettings | null>({ query: siteSettingsQuery, tags: ["siteSettings"] }).catch(() => null);
  return data || defaultSiteSettings;
}

export async function getHomePage() {
  const data = await sanityFetch<HomePage | null>({ query: homePageQuery, tags: ["homePage"] }).catch(() => null);
  return data || defaultHomePage;
}

export async function getAboutPage() {
  const data = await sanityFetch<AboutPage | null>({ query: aboutPageQuery, tags: ["aboutPage"] }).catch(() => null);
  return data || defaultAboutPage;
}

export async function getServicesPage() {
  const data = await sanityFetch<ServicesPage | null>({ query: servicesPageQuery, tags: ["servicesPage"] }).catch(() => null);
  return data || { title: "", subtitle: "" };
}

export async function getServices() {
  const data = await sanityFetch<Service[]>({ query: allServicesQuery, tags: ["service"] }).catch(() => []);
  return data?.length ? data : defaultServices;
}

export async function getTestimonialsPage() {
  const data = await sanityFetch<TestimonialsPage | null>({ query: testimonialsPageQuery, tags: ["testimonialsPage"] }).catch(
    () => null
  );
  return data || { title: "", subtitle: "" };
}

export async function getTestimonials() {
  const data = await sanityFetch<Testimonial[]>({ query: allTestimonialsQuery, tags: ["testimonial"] }).catch(() => []);
  return data?.length ? data : defaultTestimonials;
}

export async function getFeaturedTestimonials() {
  const data = await sanityFetch<Testimonial[]>({ query: featuredTestimonialsQuery, tags: ["testimonial"] }).catch(() => []);
  return data?.length ? data : defaultTestimonials;
}

export async function getBlogPage() {
  const data = await sanityFetch<BlogPage | null>({ query: blogPageQuery, tags: ["blogPage"] }).catch(() => null);
  return data || defaultBlogPage;
}

export async function getPosts() {
  return sanityFetch<Post[]>({ query: allPostsQuery, tags: ["post"] }).catch(() => []);
}

export async function getRecentPosts() {
  return sanityFetch<Post[]>({ query: recentPostsQuery, tags: ["post"] }).catch(() => []);
}

export async function getPostBySlug(slug: string) {
  return sanityFetch<Post | null>({ query: postBySlugQuery, params: { slug }, tags: ["post"] }).catch(() => null);
}

export async function getContactPage() {
  const data = await sanityFetch<ContactPage | null>({ query: contactPageQuery, tags: ["contactPage"] }).catch(() => null);
  return data || defaultContactPage;
}

export async function getBookPage() {
  const data = await sanityFetch<BookPage | null>({ query: bookingPageQuery, tags: ["bookSessionPage"] }).catch(() => null);
  return data || defaultBookPage;
}

export async function getPackages() {
  return sanityFetch<any[]>({ query: allPackagesQuery, tags: ["package"] }).catch(() => []);
}
