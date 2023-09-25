import { useState } from "react";
import Categories from "../general/categories";
import BannerCarousel from "../general/bannerCarousel";
import CardLarge from "../general/cards/cardLarge";
import CardMedium from "../general/cards/cardMedium";
import CardSmall from "../general/cards/cardSmall";
import CardPlain from "../general/cards/cardPlain";
import DealOfTheDay from "../mainPageTabs/dealOfTheDay";
import Offers from "../mainPageTabs/offers";
import Recommendations from "../mainPageTabs/reccomendation";
import Explore from "../mainPageTabs/explore";
import AdsPromotions from "../mainPageTabs/adsPromotions";
import MobileAds from "../mainPageTabs/mobileAds";

const HomeTab = () => {
  const [deals, setDeals] = useState<any[]>(Array(6).fill(""));
  const [promotions, setPromotion] = useState<any[]>(Array(6).fill(""));
  const [reccomendation, setReccomendation] = useState<any[]>(
    Array(6).fill("")
  );
  const [offers, setOffers] = useState<any[]>(Array(6).fill(""));
  const [explore, setExplore] = useState<any[]>(Array(6).fill(""));
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: any) => {
    setActiveSlide(index);
  };
  return (
    <div className="content_body max-sm:block h-screen md:grid md:grid-cols-12 md:pt-14 pr-10">
      <div
        className="main col-span-9 bg-white relative md:mb-16 md:-ml-0 "
        id="main"
      >
        <Categories />
        <div className="md:max-w-[840px] md:mx-auto">
          <BannerCarousel />

          {/* Deals of the day */}
          <DealOfTheDay />

          {/* Ads */}
          <MobileAds />

          {/* Offers */}
          <Offers />

          {/* Ads */}
          <MobileAds />

          {/* Recommendations */}
          <Recommendations />

          {/* Ads */}
          <MobileAds />

          <Explore />

          {/* Ads */}
          <div className="pb-36">
            <MobileAds />
          </div>
        </div>
      </div>

      <AdsPromotions />
    </div>
  );
};

export default HomeTab;
