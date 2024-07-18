import HeroSection from "@/libs/components/HeroSection/HeroSection";
import NewArrival from "@/app/_components/NewArrival/NewArrival";
import FeaturedSales from "./_components/FeaturedSales/FeaturedSales";
import Objective from "./_components/Objective/Objective";
import Sale from "./_components/Sales/Sale";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSales />
      <NewArrival />
      <Sale />
      <Objective />
    </main>
  );
}
