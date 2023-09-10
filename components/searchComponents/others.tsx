import Image from "next/image";
import { useState } from "react";
import CardSmall from "../general/cards/cardSmall";

const OthersResults = () => {
  const [reccomendation, setReccomendation] = useState<any[]>(
    Array(6).fill("")
  );
  return (
    <div className=" reccomendation my-5">
      <div className="grid grid-cols-9 max-sm:grid-cols-10  gap-5">
        {reccomendation.map((_, i) => (
          <div className="col-span-3 max-sm:col-span-5 shadow" key={i}>
            <CardSmall reccomend={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OthersResults;
