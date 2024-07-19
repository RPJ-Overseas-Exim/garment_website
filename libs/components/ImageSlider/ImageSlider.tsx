"use client";
import Image from "next/image";
import type { sliderImages } from "../../utils/customTypes";
import "./ImageSlider.css";
import { useState, useEffect } from "react";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import Link from "next/link";

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
    setCurrentImageIndex(currentImageIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightButtonClick();
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [handleRightButtonClick]);

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

      <div className="slider__content-wrapper">
        <div className="slider__content">
          <p>T-Shirt / Tops</p>
          <h1>Monsoon Value Pack</h1>
          <h4>cool / colorful / comfy</h4>
          <Link className="shop-now--button" href="/">
            Shop Now
          </Link>
        </div>
      </div>

      <div className="progress-bar--outer">
        <div className="progress-bar--inner">
          {images.map((_, index) => {
            return (
              <button
                className={
                  `progress-bar__candle progress-bar-candle${index}` +
                  (currentImageIndex === index
                    ? " progress-bar__candle-active"
                    : "")
                }
                onClick={() => setCurrentImageIndex(index)}
                key={index}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
