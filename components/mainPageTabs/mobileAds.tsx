import { useState } from "react";
import CardSmall from "../general/cards/cardSmall";

const MobileAds = () => {
  const [promotions, setPromotion] = useState<any[]>(Array(6).fill(""));
  return (
    <div className="md:hidden promotion bg-sideBarColor py-2 px-3 relative ">
      <div className="">
        <div className="head flex items-center py-3">
          <div className="ad bg-yellow py-1 px-2 rounded-md mr-3 text-white">
            Ads
          </div>
          <h1 className="text-1xl">Promotions</h1>
        </div>

        <div className=" all_promotions">
          {
            <div className="max-md:flex-shrink-0">
              <CardSmall />
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default MobileAds;
