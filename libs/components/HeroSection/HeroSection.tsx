import ImageSlider from "../ImageSlider/ImageSlider";

export default function HeroSection() {
  const images = [
    {
      url: "/assets/images/slider-Image1.jpg",
      alt: "Woman in yellow dress",
      position: "0 23%",
    },
    {
      url: "/assets/images/slider-Image2.jpg",
      alt: "Woman with a lot of shopping bags",
      position: "center",
    },
  ];
  return (
    <section id="hero">
      <ImageSlider images={images} />
    </section>
  );
}
