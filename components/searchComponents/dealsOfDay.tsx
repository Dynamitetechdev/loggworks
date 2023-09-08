import Image from "next/image";
import WishListButton from "../general/wishlist";
import { useState } from "react";
import StarReview from "../general/starReview";

const DealsOfTheDay = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [deals, setDeals] = useState<any[]>(Array(4).fill(""));
  const handleSlideChange = (index: any) => {
    setActiveSlide(index);
  };
  return (
    <div className="deals max-sm:py-3">
      <h1 className="text-[20px] font-bold">Deals and offers</h1>
      <div className="deals md:grid grid-cols-8 gap-4 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden ">
        {deals.map((_, i) => (
          <div className="max-md:flex-shrink-0 md:col-span-4" key={i}>
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

              <div className="card_content md:p-3 p-2 text-[12px]">
                <div className="title flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src={"/assets/images/client_test.png"}
                      width={24}
                      height={24}
                      alt="brand_logo "
                      className="mr-2"
                    />
                    <h4 className="font-bold text-[14px]">Elite Carpenters</h4>
                  </div>
                  <div className="flex items-center my-1 min-md:text-[14px]">
                    <StarReview />
                    <p className="mx-1">5.0</p>
                    <p>(300k)</p>
                  </div>
                </div>

                <div className="job_category ">
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
                  <h5 className="text-green">
                    Ends in: <span className="ml-2">04:34:40</span>{" "}
                  </h5>
                </div>
                <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <div className="banner_nav flex items-center my-5 justify-center">
          {deals.map((_, index) => (
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

export default DealsOfTheDay;
