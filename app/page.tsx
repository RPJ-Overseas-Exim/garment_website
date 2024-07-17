import HeroSection from "@/libs/components/HeroSection/HeroSection";
import NewArrival from "@/libs/components/NewArrival/NewArrival";
import FeaturedSales from "./_components/FeaturedSales/FeaturedSales";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <NewArrival />
      <FeaturedSales />
    </main>
  );
}
