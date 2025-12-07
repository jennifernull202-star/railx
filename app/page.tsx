import Hero from "@/components/home/Hero";
import HomeSearch from "@/components/home/HomeSearch";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedListings from "@/components/home/FeaturedListings";
import FeaturedAds from "@/components/home/FeaturedAds";
import Container from "@/components/global/Container";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeSearch />
      <CategoryGrid />
      <FeaturedAds />
      <FeaturedListings />
    </>
  );
}
