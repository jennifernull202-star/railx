// lib/seo/seoEngine.ts

export function buildMetadata({
  title,
  description,
  canonical,
  images = [],
  type = "website",
}: {
  title: string;
  description: string;
  canonical: string;
  images?: string[];
  type?: string;
}) {
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}

export function jsonLd(data: Record<string, any>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
