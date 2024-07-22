import dynamic from "next/dynamic";
import HeroSection from "@/libs/components/HeroSection/HeroSection";
const NewArrival = dynamic(
  () => import("@/app/_components/NewArrival/NewArrival")
);
const FeaturedSales = dynamic(
  () => import("./_components/FeaturedSales/FeaturedSales")
);
const Objective = dynamic(() => import("./_components/Objective/Objective"));
const Sale = dynamic(() => import("./_components/Sales/Sale"));
const Categories = dynamic(() => import("./_components/Categories/Categories"));

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedSales />
      <NewArrival />
      <Sale />
      <Objective />
      <Categories />
    </main>
  );
}
