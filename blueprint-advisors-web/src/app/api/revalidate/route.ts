import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const secret = request.headers.get("x-sanity-secret");

  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await request.json().catch(() => ({}));
  const tags: string[] = body.tags || ["siteSettings", "homePage", "aboutPage", "servicesPage", "service", "post", "testimonial", "blogPage", "contactPage", "bookSessionPage", "testimonialsPage"];

  tags.forEach((tag) => revalidateTag(tag, "max"));

  return NextResponse.json({ revalidated: true, tags });
}
