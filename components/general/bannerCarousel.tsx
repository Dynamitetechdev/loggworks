import React, { useState, useEffect } from "react";
import Image from "next/image";

const BannerCarousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideImages = [
    "/assets/images/banner/01.png",
    "/assets/images/promotions/01.png",
    "/assets/images/client_test.png",
  ];

  const handleSlideChange = (index) => {
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
    <div className="banner">
      <div className="banner_img mt-5 relative flex flex-col items-center">
        <div className="relative w-[980px] h-[390px] overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out transform "
            style={{ transform: `translateX(-${activeSlide * 980}px)` }}
          >
            {slideImages.map((image, index) => (
              <div
                key={index}
                className="w-[980px] h-[390px] absolute "
                style={{ left: `${index * 980}px` }}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={`slide-${index}`}
                  className="object-center object-cover rounded-lg"
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
              className={`w-3 h-3 mx-1 rounded-full ${
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
