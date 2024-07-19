import Image from "next/image";
import type { sliderImages } from "@/libs/utils/customTypes";
import "./Card.css";

export default function Card({ url, alt }: sliderImages) {
  return (
    <div className="small-card">
      <Image
        src={url}
        alt={alt}
        width={0}
        height={0}
        sizes="100%"
        className="small-card__image"
      />
      <span className="small-card__title">{alt}</span>
    </div>
  );
}
