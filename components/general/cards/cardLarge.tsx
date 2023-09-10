import Image from "next/image";
import StarReview from "../starReview";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import WishListButton from "../wishlist";

const CardLarge = () => {
  return (
    <div className="card max-w-lg min-md:w-[374px] bg-white rounded-lg my-5 shadow relative">
      <WishListButton />

      <div className="">
        <Image
          src={"/assets/images/promotions/01.png"}
          width={380}
          height={140}
          alt="object-fit"
          className="min-w-[374px]"
        />
      </div>

      <div className="card_content md:p-3 p-2">
        <div className="title flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={"/assets/images/client_test.png"}
              width={24}
              height={24}
              alt="brand_logo "
              className="mr-2"
            />
            <h4 className="font-bold">Elite Carpenters</h4>
          </div>
          <div className="flex items-center my-1 min-md:text-[14px]">
            <StarReview />
            <p className="mx-1">5.0</p>
            <p>(300k)</p>
          </div>
        </div>

        <div className="job_category min-md:text-[14px]">
          <h1>Job category</h1>

          <ul className="flex my-3 ">
            <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
              Power contractors
            </li>
            <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
              Generator installation
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-between mb-3 min-md:text-[14px]">
          <h5>Get 20% off 5 weeks booking</h5>{" "}
          <h5 className="text-timerColor font-bold">
            Ends in: <span className="ml-2">04:34:40</span>{" "}
          </h5>
        </div>
        <button className="w-full py-[4px] text-green text-[14px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
          Request Quote
        </button>
      </div>
    </div>
  );
};

export default CardLarge;
