import Link from "next/link";
import "./Sale.css";

export default function Sale() {
  const saleCards = [
    {
      title: "Hawaiian Shirts",
      subTitle: "Dress up in summer vibe",
      discount: "50%",
      link: "/",
      image: "/assets/images/sale/image_1.webp",
      align: "start",
    },
    {
      title: "Printed T Shirts",
      subTitle: "New Designs Every Week",
      discount: "40%",
      link: "/",
      image: "/assets/images/sale/image_2.webp",
      align: "end",
    },
    {
      title: "Cargo Joggers",
      subTitle: "Move with Style and Comfort",
      discount: "50%",
      link: "/",
      image: "/assets/images/sale/image_3.webp",
      align: "end",
    },
    {
      title: "Urban Shirts",
      subTitle: "Live in Comfort",
      discount: "60%",
      link: "/",
      image: "/assets/images/sale/image_4.webp",
      align: "end",
    },
    {
      title: "Oversized T-Shirts",
      subTitle: "Street Style icon",
      discount: "60%",
      link: "/",
      image: "/assets/images/sale/image_5.webp",
      align: "end",
    },
  ];

  const gridAreas = ["a", "b", "c", "d", "e"];

  return (
    <section className="container" id="sale">
      <h3 className="small-slider__title">
        <span className="small-slider__title__block"></span> Big Sale
      </h3>

      <div className="sale">
        {saleCards.map((card, index) => {
          return (
            <div
              className={"card sale--card"}
              key={index}
              style={{
                backgroundImage: `url(${card.image})`,
                gridArea: gridAreas?.[index],
                alignItems: card.align,
              }}
            >
              <div
                className={`card__content ${
                  card.align === "end" ? "text-right" : ""
                }`}
              >
                <h3 className="card__title sale__title">{card.title}</h3>
                <p className="sale__subTitle">{card.subTitle}</p>
                <p className="card__discount">UPTO {card.discount} OFF</p>
                <Link href={card.link} className="sale__link">
                  Explore Items
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
