import Image from "next/image";
import StarReview from "../starReview";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import WishListButton from "../wishlist";
import Link from "next/link";

const CardLarge = () => {
  return (
    <div className="card max-w-lg min-md:w-[374px] bg-white rounded-lg my-5 shadow relative max-w-[358px]">
      <WishListButton />

      <Link href={"/sampleCategory/Elite Carpenters/"}>
        <div className="max-w-[358px] w-[358px] h-[118px] relative">
          <Image
            src={"/assets/bg/te.jpg"}
            layout="fill"
            alt=""
            className="w-full rounded-t-lg object-center object-cover "
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </Link>

      <div className="card_content md:p-3 p-2 text-[12px]">
        <div className="title flex items-center justify-between">
          <Link href={"/sampleCategory/Elite Carpenters/"}>
            <div className="flex items-center">
              <Image
                src={"/assets/bg/te.jpg"}
                width={24}
                height={24}
                alt="brand_logo "
                className="mr-2 rounded-full max-h-[24px] max-w-[24px]"
              />
              <h4 className="font-bold text-[14px]">Elite Carpenters</h4>
            </div>
          </Link>
          <div className="flex items-center my-1">
            <StarReview />
            <p className="mx-1">5.0</p>
            <p>(300k)</p>
          </div>
        </div>

        <div className="job_category">
          <h1 className="my-3">Job category</h1>

          <ul className="flex mb-2">
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
            Ends in: <span className="ml-1">04h:34m:40s</span>{" "}
          </h5>
        </div>
        <Link href={"/message"}>
          <button className="w-full py-[4px] text-green text-[14px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
            Request Quote
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardLarge;
