import { useState } from "react";
import CardPlain from "../general/cards/cardPlain";

const Explore = () => {
  const [explore, setExplore] = useState<any[]>(Array(6).fill(""));
  return (
    <div className="explore md:mx-4 mx-3">
      <h1 className="text-2xl font-semibold my-3 max-sm:text-[18px]">
        Explore popular services
      </h1>
      <div className="grid-cols-9 gap-5 flex overflow-x-scroll scrolling-touch ">
        {explore.map((_, i) => (
          <div
            className="md:col-span-3 flex-shrink-0 max-sm:w-[177px] max-w-[228px]"
            key={i}
          >
            <CardPlain />
          </div>
        ))}
      </div>
      <div className="md:hidden flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden">
        {explore.map((_, i) => (
          <div className=" w-[177px] max-w-[228px] mr-5" key={i}>
            <CardPlain />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
