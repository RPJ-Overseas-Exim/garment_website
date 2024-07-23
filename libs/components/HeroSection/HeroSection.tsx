import ImageSlider from "../ImageSlider/ImageSlider";

export default function HeroSection() {
  const images = [
    {
      url: "/assets/images/slider-Image1.webp",
      alt: "Woman in yellow dress",
      position: "0 23%",
    },
    {
      url: "/assets/images/slider-Image2.webp",
      alt: "Woman with a lot of shopping bags",
      position: "center",
    },
    {
      url: "/assets/images/slider-Image3.webp",
      alt: "Man in a hoddie",
      position: "left",
    },
  ];
  return (
    <section id="hero" className="w-[100vw]">
      <ImageSlider images={images} />
    </section>
  );
}
