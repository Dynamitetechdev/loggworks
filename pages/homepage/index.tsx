import Image from "next/image";
import SideBar from "../../components/general/sideBar";
import LocationSearch from "../../components/general/locationSearch";
import { useEffect, useRef, useState } from "react";
import Categories from "../../components/general/categories";
import BannerCarousel from "../../components/general/bannerCarousel";
import CardLarge from "../../components/general/cards/cardLarge";
import CardSmall from "../../components/general/cards/cardSmall";
import CardMedium from "../../components/general/cards/cardMedium";
import CardPlain from "../../components/general/cards/cardPlain";
import Header from "../../components/general/nav/header";

const HomePage = () => {
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

  useEffect(() => {}, []);
  return (
    <div className="">
      <SideBar />
      <div className="main md:ml-[280px]">
        <Header />

        <div className=" content_body h-screen md:grid md:grid-cols-12 md:pt-14 ">
          <div className="main col-span-9 bg-white relative md:mb-16">
            <Categories />

            <BannerCarousel />
            <div className="deals mx-3 md:mx-10">
              <h1 className="text-2xl font-bold">Deal of the day</h1>
              <div className="deals md:grid grid-cols-8 gap-10 max-sm:flex max-sm:overflow-x-scroll max-sm:scrolling-touch max-sm:overflow-x-hidden ">
                {deals.map((_, i) => (
                  <div className="max-sm:flex-shrink-0 md:col-span-4" key={i}>
                    <CardLarge />
                  </div>
                ))}
              </div>

              <div className="md:hidden">
                <div className="banner_nav flex items-center my-5 justify-center">
                  {deals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideChange(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 mx-1 rounded-full ${
                        activeSlide === index ? "bg-green" : "bg-grey80"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>

            <div className="Offers mx-3 md:mx-10">
              <h1 className="text-2xl font-bold my-3">Offers</h1>
              <div className="md:grid grid-cols-9 gap-5 max-sm:flex max-sm:overflow-x-scroll max-sm:scrolling-touch">
                {offers.map((_, i) => (
                  <div className="md:col-span-3 max-sm:flex-shrink-0" key={i}>
                    <CardMedium />
                  </div>
                ))}
              </div>
            </div>
            <div className=" reccomendation mx-3 md:mx-10">
              <h1 className="text-2xl font-bold my-3">Recommendations</h1>
              <div className="md:grid grid-cols-9  gap-5 max-sm:flex max-sm:overflow-x-scroll max-sm:scrolling-touch max-sm:overflow-x-hidden">
                {reccomendation.map((_, i) => (
                  <div className="md:col-span-3 max-sm:flex-shrink-0" key={i}>
                    <CardSmall reccomend={true} />
                  </div>
                ))}
              </div>
            </div>

            <div className="max-sm:hidden explore mx-10">
              <h1 className="text-2xl font-bold my-3">Offers</h1>
              <div className="grid grid-cols-9  gap-5">
                {explore.map((_, i) => (
                  <div className="col-span-3" key={i}>
                    <CardPlain />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="promotion  md:z-20 py-2 px-3 md:col-span-3 relative ">
            <div className="md:fixed">
              <div className="head flex items-center py-3">
                <h1 className="text-2xl">Promotions</h1>

                <div className="ad bg-green py-2 px-3 rounded-md mx-3 text-white">
                  Ads
                </div>
              </div>

              <div className="all_promotions  md:overflow-y-scroll md:h-[calc(100vh-4rem)] max-sm:flex max-sm:overflow-x-scroll max-sm:scrolling-touch max-sm:overflow-x-hidden">
                {promotions.map((_, i) => (
                  <div className="max-sm:flex-shrink-0 max-sm:mb-16" key={i}>
                    <CardSmall />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
