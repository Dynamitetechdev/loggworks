import { useState } from "react";
import CardMedium from "../general/cards/cardMedium";

const Offers = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [offers, setOffers] = useState<any[]>(Array(6).fill(""));
  const handleSlideChange = (index: any) => {
    setActiveSlide(index);
  };
  return (
    <div className="Offers max-sm:py-3 px-3 md:mx-10">
      <h1 className="text-2xl font-bold my-3 max-sm:text-[18px]">Offers</h1>
      <div className="md:grid grid-cols-9 gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch ">
        {offers.map((_, i) => (
          <div
            className="md:col-span-3 max-md:flex-shrink-0 max-sm:w-[200px]"
            key={i}
          >
            <CardMedium />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
