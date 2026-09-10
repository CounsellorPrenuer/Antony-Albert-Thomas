import { QueryParams } from "next-sanity";
import { sanityClient } from "@/sanity/lib/client";

type SanityFetchOptions = {
  query: string;
  params?: QueryParams;
  tags?: string[];
};

export async function sanityFetch<T>({ query, params = {}, tags = [] }: SanityFetchOptions): Promise<T> {
  return sanityClient.fetch<T>(query, params, {
    next: {
      tags,
      revalidate: 60,
    },
  });
}
