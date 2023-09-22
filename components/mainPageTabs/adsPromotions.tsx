import { useState } from "react";
import CardSmall from "../general/cards/cardSmall";

const AdsPromotions = () => {
  const [promotions, setPromotion] = useState<any[]>(Array(6).fill(""));
  return (
    <div className="max-md:hidden promotion bg-[#FEFEFE] md:z-20 py-2 px-3 md:col-span-3 relative ">
      <div className="md:fixed">
        <div className="head flex items-center py-3">
          <h1 className="text-[18px]">Promotions</h1>

          <div className="ad bg-[#E2B801] text-[12px] py-1 px-2 rounded-md mx-3 text-white">
            Ads
          </div>
        </div>

        <div className="all_promotions  md:overflow-y-scroll md:h-[calc(100vh-4rem)] max-md:flex scrolling-touch overflow-x-hidden">
          {promotions.map((_, i) => (
            <div className="max-md:flex-shrink-0 max-md:mb-16" key={i}>
              <CardSmall />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsPromotions;
