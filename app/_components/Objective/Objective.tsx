import Link from "next/link"
import "./Objective.css";

export default function Objective() {
  return (
    <section className="container">
      <div className="objective-container">
        {/* Objective left section */}
        <div className="objective-content">
          <div className="objective">
            {/* objctive title */}
            <div className="objective__title">
              WE MADE YOUR EVERYDAY FASHION BETTER!
            </div>

            {/* objective description */}
            <div className="objective__description">
              In our journey to improve everyday fashion, euphoria presents
              EVERYDAY wear range - Comfortable & Affordable fashion 24/7
            </div>

            {/* objective button */}
            <Link className="objective__button" href="/shop">Shop Now</Link>
          </div>
        </div>

        {/* Objective right section */}
        <div className="right"></div>
      </div>
    </section>
  );
}
