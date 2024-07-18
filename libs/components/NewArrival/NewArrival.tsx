import "./NewArrival.css";
import Slider from "@/libs/components/Slider/Slider";
import { sliderImages } from "@/libs/utils/customTypes";

export default function NewArrival() {
  const photos: sliderImages[] = [
    {
      url: "/assets/images/small slider/photo.svg",
      alt: "Full Sleeve",
    },
    {
      url: "/assets/images/small slider/photo2.svg",
      alt: "Urban Shirts",
    },
    {
      url: "/assets/images/small slider/photo3.svg",
      alt: "Active T-Shirts",
    },
    {
      url: "/assets/images/small slider/photo4.svg",
      alt: "Knitted Joggers",
    },
  ];

  return (
    <div className="small-slider container">
      <h3 className="small-slider__title">
        <span className="small-slider__title__block"></span> New Arrival
      </h3>

      <Slider classname="small-slider__slides" photos={photos} />
    </div>
  );
}
