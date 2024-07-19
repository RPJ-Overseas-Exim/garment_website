import type { sliderImages } from "@/libs/utils/customTypes";
import "./Categories.css";
import Card from "@/libs/components/SmallSlider/Card";
import Link from "next/link";

export default function Categoies() {
  const menImages: sliderImages[] = [
    {
      url: "/assets/images/categories/men/activewears.webp",
      alt: "Active Wears",
    },
    {
      url: "/assets/images/categories/men/boxers.webp",
      alt: "Boxers",
    },
    {
      url: "/assets/images/categories/men/hoodies.webp",
      alt: "Hoodies",
    },
    {
      url: "/assets/images/categories/men/jeans.webp",
      alt: "Jeans",
    },
    {
      url: "/assets/images/categories/men/plain_tshirts.webp",
      alt: "Plain Tshirts",
    },
    {
      url: "/assets/images/categories/men/polo_tshirts.webp",
      alt: "Polo Tshirts",
    },
    {
      url: "/assets/images/categories/men/printed_tshirts.webp",
      alt: "Printed Tshirts",
    },
    {
      url: "/assets/images/categories/men/shirts.webp",
      alt: "Shirts",
    },
    {
      url: "/assets/images/categories/men/boxers.webp",
      alt: "Tank Tops",
    },
  ];
  const womenImages: sliderImages[] = [
    {
      url: "/assets/images/categories/women/boxers.webp",
      alt: "Boxers",
    },
    {
      url: "/assets/images/categories/women/hoodies.webp",
      alt: "Hoodies",
    },
    {
      url: "/assets/images/categories/women/tshirt.webp",
      alt: "Tshirts",
    },
    {
      url: "/assets/images/categories/women/coat_and_parkars.webp",
      alt: "Coats",
    },
  ];

  return (
    <section className="categories-container container">
      <div className="men-section">
        {/* category title section*/}
        <h3 className="categories-container__title">
          <span className="small-slider__title__block"></span> Men Categories
        </h3>

        {/* Cards section */}
        <div className="card-container">
          {/* Card mapping section */}
          {menImages.map((image: sliderImages, index: number) => (
            <Link
              key={`c${image.url}-${index}`}
              className="card-container__card"
              href={""}
            >
              <Card url={image.url} alt={image.alt} />
            </Link>
          ))}
        </div>
      </div>

      <div className="women-section">
        {/* category title section*/}
        <h3 className="categories-container__title">
          <span className="small-slider__title__block"></span> Women Categories
        </h3>

        {/* Cards section */}
        <div className="card-container">
          {/* Card mapping section */}
          {womenImages.map((image: sliderImages, index: number) => (
            <Link
              key={`w${image.url}-${index}`}
              className="card-container__card"
              href={""}
            >
              <Card url={image.url} alt={image.alt} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
