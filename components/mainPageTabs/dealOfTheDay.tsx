import { useState } from "react";
import CardLarge from "../general/cards/cardLarge";
import { motion } from "framer-motion";
const DealOfTheDay = () => {
  const [deals, setDeals] = useState<any[]>(Array(6).fill(""));
  return (
    <>
      <motion.div className=" deals px-3 max-sm:py-3 md:mx-4 overflow-hidden">
        <h1 className="text-2xl font-semibold max-sm:text-[18px]">
          Deal of the day
        </h1>
        {/* mobile */}
        <div
          id="deals-container"
          className="deals gap-4 flex overflow-x-scroll scrolling-touch overflow-x-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {deals.map((_, i) => (
            <div className="flex-shrink-0 md:col-span-4 cursor-pointer" key={i}>
              <CardLarge />
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default DealOfTheDay;
