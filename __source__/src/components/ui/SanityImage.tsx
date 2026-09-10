import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type SanityImageProps = {
  image: unknown;
  alt: string;
  className?: string;
};

export function SanityImage({ image, alt, className = "" }: SanityImageProps) {
  if (!image) {
    return <div className={`rounded-2xl bg-slate-100 ${className}`} />;
  }

  if (typeof image === 'string') {
    return (
      <img
        src={image}
        alt={alt}
        className={`h-full w-full rounded-2xl object-cover ${className}`}
      />
    );
  }

  const src = urlFor(image).width(1200).height(800).fit("crop").url();

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={`h-full w-full rounded-2xl object-cover ${className}`}
    />
  );
}
