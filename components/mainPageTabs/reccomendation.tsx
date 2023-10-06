import { useState } from "react";
import CardSmall from "../general/cards/cardSmall";

const Recommendations = () => {
  const [reccomendation, setReccomendation] = useState<any[]>(
    Array(6).fill("")
  );
  return (
    <div className=" reccomendation mx-3 md:mx-4">
      <h1 className="text-2xl max-sm:text-[18px] font-semibold my-3">
        Recommendations
      </h1>
      <div className="gap-5 flex overflow-x-scroll scrolling-touch ">
        {reccomendation.map((_, i) => (
          <div
            className="md:col-span-3 flex-shrink-0 max-sm:w-[177px] max-w-[228px]"
            key={i}
          >
            <CardSmall reccomend={true} />
          </div>
        ))}
      </div>
      <div className="md:hidden flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden">
        {reccomendation.map((_, i) => (
          <div
            className="md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px] mr-5"
            key={i}
          >
            <CardSmall reccomend={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
