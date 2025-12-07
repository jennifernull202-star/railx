import Link from "next/link";
import {
  WrenchScrewdriverIcon,
  TruckIcon,
  CubeIcon,
  HomeModernIcon,
  BuildingOfficeIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const categories = [
  {
    name: "Equipment",
    href: "/marketplace/equipment",
    icon: TruckIcon,
    description: "Hi-rail trucks, rail cars, locomotives",
  },
  {
    name: "Tools",
    href: "/marketplace/tools",
    icon: WrenchScrewdriverIcon,
    description: "Hand tools, power tools, specialty equipment",
  },
  {
    name: "Materials",
    href: "/marketplace/materials",
    icon: CubeIcon,
    description: "Track materials, ties, rail, fasteners",
  },
  {
    name: "Rentals",
    href: "/marketplace/rentals",
    icon: Cog6ToothIcon,
    description: "Equipment rentals, temporary solutions",
  },
  {
    name: "Services",
    href: "/marketplace/services",
    icon: WrenchScrewdriverIcon,
    description: "Contractors, maintenance, inspections",
  },
  {
    name: "Real Estate",
    href: "/marketplace/real-estate",
    icon: BuildingOfficeIcon,
    description: "Rail-served property, warehouses, land",
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Browse by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need across our comprehensive marketplace categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-6 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition">
                  <category.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
