"use client";
import Image from "next/image";
import type { sliderImages } from "../utils/customTypes";
import "./ImageSlider.css";
import { useState } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";

export default function ImageSlider({ images }: { images: sliderImages[] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleLeftButtonClick = () => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
      return;
    }
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleRightButtonClick = () => {
    if (currentImageIndex === images.length - 1) {
      setCurrentImageIndex(0);
      return;
    }
    document
      .querySelector("progress-bar-candle-active" + currentImageIndex)
      ?.classList.remove("progress-bar__candle-active");
    setCurrentImageIndex(currentImageIndex + 1);
    document
      .querySelector("progress-bar-candle-active" + currentImageIndex)
      ?.classList.add("progress-bar__candle-active");
  };

  return (
    <div className="slider">
      <div className="slider__images flex overflow-hidden">
        {images.map((image, index) => {
          return (
            <div className="slider__image-container" key={index}>
              <Image
                src={image.url}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100%"
                className="slider__image"
                style={{
                  transform: `translateX(${-currentImageIndex * 100}%)`,
                  objectPosition: image.position,
                }}
              />
            </div>
          );
        })}
      </div>
      <div className="slider__content"></div>
      <div className="slider__buttons">
        <button
          className="slider__button slider__button--left"
          onClick={handleLeftButtonClick}
        >
          <RiArrowLeftWideFill />
        </button>
        <button
          className="slider__button slider__button--right"
          onClick={handleRightButtonClick}
        >
          <RiArrowRightWideFill />
        </button>
      </div>
      <div className="progress-bar--outer">
        <div className="progress-bar--inner">
          {images.map((_, index) => {
            return (
              <div
                className={`progress-bar__candle progress-bar-candle${index}`}
                key={index}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
