import Link from "next/link";

export default function CategoryCard({ category }: { category: { id: string; label: string } }) {
  return (
    <Link
      href={`/marketplace/${category.id}`}
      className="border border-gray-200 bg-white rounded-lg p-6 hover:shadow-md transition"
    >
      <div className="text-xl font-semibold text-railBlue">
        {category.label}
      </div>
    </Link>
  );
}
