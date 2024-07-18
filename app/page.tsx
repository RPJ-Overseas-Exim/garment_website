import HeroSection from "@/libs/components/HeroSection/HeroSection";
import NewArrival from "@/libs/components/NewArrival/NewArrival";
import FeaturedSales from "./_components/FeaturedSales/FeaturedSales";
import Footer from "@/libs/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSales />
      <NewArrival />
    </main>
  );
}
