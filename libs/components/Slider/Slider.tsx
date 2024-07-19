import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { sliderImages } from "@/libs/utils/customTypes";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export default function Slider({
  classname,
  photos,
}: {
  classname: string;
  photos: sliderImages[];
}) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[85%]"
    >
      {/* element which contain the slides */}
      <CarouselContent className={classname}>
        {/* map the element or photos to a slide */}
        {photos.map((photo) => (
          <CarouselItem
            key={`p${photo.url}`}
            className={`sm:basis-1/2 lg:basis-1/3`}
          >
            <Link
              href={"#"}
              className="w-[100%] h-[100%] small-carousel__slide"
            >
              <Image
                className="small-carousel__image"
                src={photo.url}
                alt={photo.alt}
                width={0}
                height={0}
                sizes="100%"
              />
              <span className="small-carousel__text">{photo.alt}</span>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
