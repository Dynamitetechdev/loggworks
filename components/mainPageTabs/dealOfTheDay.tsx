import { useState } from "react";
import CardLarge from "../general/cards/cardLarge";

const DealOfTheDay = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [deals, setDeals] = useState<any[]>(Array(6).fill(""));
  const handleSlideChange = (index: any) => {
    setActiveSlide(index);
  };
  return (
    <div className="deals px-3 max-sm:py-3 md:mx-10">
      <h1 className="text-2xl font-bold">Deal of the day</h1>
      <div className="deals md:grid grid-cols-8 gap-4 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden ">
        {deals.map((_, i) => (
          <div className="max-md:flex-shrink-0 md:col-span-4" key={i}>
            <CardLarge />
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

export default DealOfTheDay;
