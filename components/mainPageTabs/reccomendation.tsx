import { useState } from "react";
import CardSmall from "../general/cards/cardSmall";

const Recommendations = () => {
  const [reccomendation, setReccomendation] = useState<any[]>(
    Array(6).fill("")
  );
  return (
    <div className=" reccomendation mx-3 md:mx-10">
      <h1 className="text-2xl max-sm:text-[18px] font-bold my-3">
        Recommendations
      </h1>
      <div className="md:grid grid-cols-9  gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden">
        {reccomendation.map((_, i) => (
          <div
            className="md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px]"
            key={i}
          >
            <CardSmall reccomend={true} />
          </div>
        ))}
      </div>
      <div className="md:hidden grid grid-cols-9  gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden">
        {reccomendation.map((_, i) => (
          <div
            className="md:col-span-3 max-md:flex-shrink-0 max-sm:w-[177px]"
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
