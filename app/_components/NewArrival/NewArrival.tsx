import "./NewArrival.css";
import Slider from "@/libs/components/Slider/Slider";
import type { sliderImages } from "@/libs/utils/customTypes";

export default function NewArrival() {
  const photos: sliderImages[] = [
    {
      url: "/assets/images/small slider/photo_4.webp",
      alt: "Full Sleeve",
    },
    {
      url: "/assets/images/small slider/photo_3.webp",
      alt: "Urban Shirts",
    },
    {
      url: "/assets/images/small slider/photo_2.webp",
      alt: "Active T-Shirts",
    },
    {
      url: "/assets/images/small slider/photo.webp",
      alt: "Knitted Joggers",
    },
  ];

  return (
    <section className="small-slider container">
      <h3 className="small-slider__title">
        <span className="small-slider__title__block"></span> New Arrival
      </h3>

      <Slider classname="small-slider__slides" photos={photos} />
    </section>
  );
}
