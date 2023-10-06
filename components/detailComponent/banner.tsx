import Image from "next/image";

import React, { useState, useEffect } from "react";

import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slideImages = [
    "/assets/bg/te.jpg",
    "/assets/images/promotions/01.png",
    // "/assets/images/details/main.png",
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
  const [onWishlist, setOnwishList] = useState(false);
  return (
    <div className="banner">
      <div className="banner_img md:mt-5 relative flex flex-col items-center h-[228px] max-sm:h-[170px]">
        <div className="z-50 absolute right-4 top-3 flex">
          <div
            className="wishlist cursor-pointer rounded-full flex items-center justify-center"
            onClick={() => setOnwishList(!onWishlist)}
          >
            <Image
              src={
                onWishlist
                  ? "/assets/icons/wishlist_filled.svg"
                  : "/assets/icons/wishlist.svg"
              }
              width={20}
              height={20}
              alt=""
            />
          </div>

          <div className="option ml-3 relative">
            <div
              className="w-[32px] h-[32px] bg-[#2E2E2E] cursor-pointer rounded-full flex items-center justify-center text-white"
              // onClick={() => setClickOption(!clickOption)}
            >
              <EllipsisVerticalIcon width={20} height={20} />
            </div>

            {/* {clickOption && (
                        <div className="options absolute w-[189px] right-3 top-12 shadow shadow-b-10 z-10">
                          <ul className="bg-grey80 rounded-md">
                            <li
                              className="px-4 py-3 hover:bg-white hover:text-[red] rounded-md cursor-pointer"
                              onClick={() => setClickOption(!clickOption)}
                            >
                              Edit Job Post
                            </li>
                            <li
                              className="px-4 py-3 hover:bg-white hover:text-[red] rounded-md cursor-pointer"
                              onClick={() => setClickOption(!clickOption)}
                            >
                              Delete Job Post
                            </li>
                          </ul>
                        </div>
                      )} */}
          </div>
        </div>

        <div className="relative w-full h-[228px] overflow-hidden">
          <div
            className="transition-transform duration-500 ease-in-out transform"
            style={{
              transform: `translateX(-${activeSlide * 980}px)`,
            }}
          >
            {slideImages.map((image, index) => (
              <div
                key={index}
                className="w-full max-sm:h-[146px] max-h-[228px] h-[228px] absolute"
                style={{ left: `${index * 980}px` }}
              >
                <Image
                  src={image}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={`slide-${index}`}
                  className="object-center md:rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="banner_nav flex items-center md:-m-10 -m-28 z-50">
          {slideImages.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-[10px] h-[10px] md:w-3 md:h-3 mx-1 rounded-full ${
                activeSlide === index ? "bg-green" : "bg-grey80"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
