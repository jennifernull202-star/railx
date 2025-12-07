import Link from "next/link";

interface BreadcrumbProps {
  category: string;
  subcategory?: string;
  title: string;
}

export default function ListingBreadcrumb({ category, subcategory, title }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-gray-600 mb-6">
      <Link href="/" className="hover:text-railBlue">Home</Link>
      <span className="mx-2">&gt;</span>
      <Link href={`/marketplace/${category}`} className="hover:text-railBlue capitalize">
        {category}
      </Link>
      {subcategory && (
        <>
          <span className="mx-2">&gt;</span>
          <span className="capitalize">{subcategory}</span>
        </>
      )}
      <span className="mx-2">&gt;</span>
      <span className="text-gray-900 truncate max-w-md inline-block align-bottom">
        {title}
      </span>
    </nav>
  );
}
