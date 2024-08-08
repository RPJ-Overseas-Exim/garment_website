import db from "@/app/_serverDB/db/connDB";
import { Product } from "@/app/_serverDB/db/models";
import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";
import "./OneProduct.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

export default async function page({ params }: { params: { id: string } }) {
  const product = (
    await db.select().from(Product).where(eq(Product.id, params.id))
  )[0];
  if (!product) notFound();
  return (
    <section className="one-product">
      <article className="product-overview">
        <div className="product-overview__images">
          <Image
            src={product.images}
            alt={product.name}
            width={0}
            height={0}
            sizes="100%"
          />
        </div>
        <div className="product-overview__details">
          <div className="one-product-name-rating-wrapper">
            <h2 className="one-product__name">{product.name}</h2>

            <div className="one-product__rating">
              {[...Array.from({ length: 4 })].map((_, i) => {
                return <FaStar key={i} />;
              })}

              <FaStarHalf />
              <span>4.5</span>
            </div>
          </div>

          <div className="one-product__size">
            <h4>Size</h4>
            <div className="one-product__sizes">
              <button
                type="button"
                className={product.size === "M" ? "size-btn-active" : ""}
              >
                M
              </button>
              <button
                type="button"
                className={product.size === "L" ? "size-btn-active" : ""}
              >
                L
              </button>
              <button
                type="button"
                className={product.size === "XL" ? "size-btn-active" : ""}
              >
                XL
              </button>
            </div>
          </div>

          <div className="one-product__color">
            <h4>Size</h4>
            <div className="one-product__colors">
              <input type="radio" name="color" value="blue" data-color="blue" />
              <input type="radio" name="color" value="pink" data-color="blue" />
              <input type="radio" name="color" value="orange" data-color="orange" />
              <input type="radio" name="color" value="red" data-color="red/>
            </div>
          </div>

          <div className="one-product__add-to-cart"></div>
        </div>
      </article>
    </section>
  );
}
