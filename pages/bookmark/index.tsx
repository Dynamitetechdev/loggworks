import { useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import CardMedium from "../../components/general/cards/cardMedium";

const Bookmark = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [offers, setOffers] = useState<any[]>(Array(3).fill(""));
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Bookmarks"
            type="notab-size"
          />

          <div className="px-4 md:px-9 pt-5 md:flex text-pTagGrey pb-36">
            <div className="md:w-9/12 mx-auto">
              <div className="Offers max-sm:py-3 px-3 md:mx-10">
                <div className="md:grid grid-cols-9 gap-5 ">
                  {offers.map((_, i) => (
                    <div className="md:col-span-3" key={i}>
                      <CardMedium />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
