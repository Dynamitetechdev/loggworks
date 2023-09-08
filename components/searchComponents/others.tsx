import Image from "next/image";
import { useState } from "react";
import CardSmall from "../general/cards/cardSmall";

const OthersResults = () => {
  const [reccomendation, setReccomendation] = useState<any[]>(
    Array(6).fill("")
  );
  return (
    <div className=" reccomendation mb-5">
      <div className="md:grid grid-cols-9  gap-5 max-md:flex max-md:overflow-x-scroll max-md:scrolling-touch max-md:overflow-x-hidden">
        {reccomendation.map((_, i) => (
          <div className="md:col-span-3 max-md:flex-shrink-0 shadow" key={i}>
            <CardSmall reccomend={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OthersResults;
