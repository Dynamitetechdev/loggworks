import React, { useState, useEffect } from "react";
import Image from "next/image";

const BannerCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideImages = [
    "/assets/images/banner/01.png",
    "/assets/images/banner/01.png",
    // "/assets/images/promotions/01.png",
    // "/assets/images/client_test.png",
  ];

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slideImages.length;
      setActiveSlide(nextSlide);
    }, 3000); // Change slide every 2 seconds

    return () => {
      clearInterval(interval);
    };
  }, [activeSlide, slideImages.length]);

  return (
    <div className="banner md:mx-6 mx-3 my-2 md:mt-24">
      <div className="banner_img md:mt-5 relative flex flex-col items-center">
        <div className="relative w-full max-sm:h-[146px] h-[292px] overflow-hidden md:rounded-lg rounded-md">
          <div
            className="transition-transform duration-500 ease-in-out transform"
            style={{ transform: `translateX(-${activeSlide * 980}px)` }}
          >
            {slideImages.map((image, index) => (
              <div
                key={index}
                className="w-full max-sm:h-[146px] h-[292px] absolute"
                style={{ left: `${index * 980}px` }}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={`slide-${index}`}
                  className="object-center object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        <div className="banner_nav flex items-center my-5">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${
                activeSlide === index ? "bg-green" : "bg-grey80"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCarousel;
