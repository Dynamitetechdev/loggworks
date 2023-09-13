import NavHead from "../../components/postJobComponents/navHead";
import SideBar from "../../components/general/sideBar";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Banner from "../../components/detailComponent/banner";
import Image from "next/image";
import ShareModal from "../../components/detailComponent/shareModal";
import TabNav from "../../components/general/tabSwitchCategory/tabNav";
import ProfileTab from "../../components/detailComponent/profileTab";
import SwitchMiniNav from "../../components/general/tabSwitchCategory/switchMiniNav";
import DealsTab from "../../components/detailComponent/dealsTab";

const Detail = () => {
  const notificationData = [
    {
      name: "Dyson Electricals",
      category: "booking",
      booking: true,
      date: "Sun 01 July at 7:20pm",
      data: "You have an upcoming Booking with Smith’s constructions on 1st Oct 2021; 9:00pm",
    },
    {
      name: "Dyson Electricals",
      category: "booking",
      status: "completed",
      booking: true,
      date: "Sun 01 July at 7:20pm",
      data: "You have an upcoming Booking with Smith’s constructions on 1st Oct 2021; 9:00pm",
    },
    {
      name: "Dyson Electricals",
      category: "payment",
      booking: true,
      date: "Sun 01 July at 7:20pm",
      data: "Payment of £450 to Smith’s constructions is successful",
    },
    {
      name: "Dyson Electricals",
      category: "promotion",
      booking: true,
      date: "Sun 01 July at 7:20pm",
      data: "Smith’s constructions  is currently running an offer. Tap to find out more.",
    },
    {
      name: "Dyson Electricals",
      category: "message",
      booking: true,
      date: "Sun 01 July at 7:20pm",
      data: "Payment of £450 to Smith’s constructions is successful",
    },
  ];
  const router = useRouter();
  const communityData = [];
  const { category, name } = router.query;
  const [activeStep, setActiveStep] = useState(0);

  const [modalPop, setModalPopUp] = useState(false);
  const [selectedOption, setSelectedOptions] = useState();
  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number>(0);

  const [activeTab, setTab] = useState<string>("profile");
  const detailSectionData = {
    tabSwitch: ["profile", "promotion"],
    promotion: {
      options: ["dealOfTheDay", "Offers"],
      notificationData,
    },
  };
  const handleSelectSwitch = (index: number, option: any) => {
    setActiveSwitchIndex(index);
    setSelectedOptions(option);
  };
  const handleActive = (tab: string) => {
    setTab(tab);
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="md:grid md:grid-cols-12 px-6 max-sm:px-0 mb-20">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title={name}
            type="notab"
          />

          <div className=" md:px-9 md:pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto relative">
              <Banner />
              <div className="px-6">
                <div className="border-b pb-3 border-grey80">
                  <div className="header flex items-start justify-between">
                    <div className="flex items-start">
                      <Image
                        src={"/assets/images/client_test.png"}
                        width={56}
                        height={56}
                        alt="brand_logo min-w-[40px] max-h-[40px]"
                        className="mr-2"
                      />
                      <div className="">
                        <div className="flex items-center">
                          <h1 className="text-[20px] mr-1 font-bold">{name}</h1>
                          <Image
                            src={"/assets/images/details/verified.svg"}
                            width={16}
                            height={16}
                            alt="brand_logo min-w-[40px] max-h-[40px]"
                            className="mr-2"
                          />
                        </div>

                        <div className="text-[14px]">
                          <p className="">Appliance repair</p>
                          <p>Member since 2014</p>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <Image
                        src={"/assets/images/details/badge.svg"}
                        width={26}
                        height={43}
                        alt="brand_logo min-w-[40px] max-h-[40px]"
                        className="mr-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="rating flex items-center text-dark justify-around">
                  <div className="py-4">
                    <h1 className="text-4xl font-bold">4.3</h1>
                    <p className="">Ratings</p>
                  </div>
                  <div className="py-4">
                    <h1 className="text-4xl font-bold">12</h1>
                    <p className="">Reviews</p>
                  </div>
                  <div className="py-4">
                    <h1 className="text-4xl font-bold">23</h1>
                    <p className="">Jobs</p>
                  </div>
                </div>

                <div
                  className={`${
                    isSticky ? "getquote max-sm:w-[400px] md:ml-[9%]" : ""
                  } flex mb-7 justify-center`}
                >
                  <button className="w-[420px] h-[44px] bg-green font-bold py-2 px-4 rounded">
                    Get quote
                  </button>
                  <button
                    className="w-[122px] h-[44px] border flex text-green border-green font-bold py-2 px-4 items-center rounded justify-center ml-4"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    <h3 className="max-sm:hidden">Share</h3>
                    <Image
                      src={"/assets/icons/share.svg"}
                      width={24}
                      height={24}
                      alt="brand_logo"
                      className="mr-2"
                    />
                  </button>
                </div>

                <div className="nav">
                  <TabNav
                    options={detailSectionData.tabSwitch}
                    activeTab={activeTab}
                    handleActive={handleActive}
                    setSelectedOptions={setSelectedOptions}
                  />
                  {activeTab === "promotion" && (
                    <SwitchMiniNav
                      switchOptions={
                        activeTab === "promotion" &&
                        detailSectionData.promotion.options
                      }
                      activeSwitchIndex={activeSwitchIndex}
                      handleSelectSwitch={handleSelectSwitch}
                    />
                  )}
                </div>
                {activeTab === "profile" && <ProfileTab />}

                {activeTab === "promotion" && (
                  <DealsTab
                    data={detailSectionData.promotion.notificationData}
                    selectedOption={selectedOption || "dealOfTheDay"}
                  />
                )}
                {modalPop && (
                  <ShareModal
                    setModalPopUp={setModalPopUp}
                    modalPop={modalPop}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
