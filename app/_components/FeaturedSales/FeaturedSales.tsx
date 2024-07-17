import Link from "next/link";
import "./featuredSales.css";

export default function FeaturedSales() {
  const featuredSalesCards = [
    {
      heading: "Low Prices",
      title: "High Coziness",
      discount: "30%",
      link: "/",
      image: "/assets/images/slider-Image1.jpg",
    },
    {
      heading: "beyound presents",
      title: "Breezy Summer Style",
      discount: "50%",
      link: "/",
      image: "/assets/images/slider-Image2.jpg",
    },
  ];
  return (
    <section id="featured-sales" className="container cards featured-sales">
      {featuredSalesCards.map((card, index) => {
        return (
          <div
            className="card featured-sales--card"
            style={{ backgroundImage: `url(${card.image})` }}
            key={index}
          >
            <p className="featured-salees__heading">{card.heading}</p>
            <h3 className="card__title">{card.title}</h3>
            <p className="card__discount">UPTO {card.discount} OFF</p>
            <Link href={card.link} className="featured-sales__link">
              Explore Items
            </Link>
          </div>
        );
      })}
    </section>
  );
}
