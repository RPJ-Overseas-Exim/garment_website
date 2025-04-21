import Link from "next/link";
import "./featuredSales.css";

export default function FeaturedSales() {
  const featuredSalesCards = [
    {
      heading: "Low Prices",
      title: "High Coziness",
      discount: "30%",
      link: "/shop",
      image: "/assets/images/featuredSales_card1.webp",
    },
    {
      heading: "Beyoung Presents",
      title: "Breezy Summer Style",
      discount: "50%",
      link: "/shop",
      image: "/assets/images/featuredSales_card2.webp",
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
            <div className="card__content">
              <p className="featured-sales__heading">{card.heading}</p>
              <h3 className="card__title featured-sales__title">
                {card.title}
              </h3>
              <p className="card__discount">UPTO {card.discount} OFF</p>
              <Link href={card.link} className="sale__link">
                Explore Items
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
}
