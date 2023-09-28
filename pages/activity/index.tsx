import { useEffect, useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import TabNav from "../../components/general/tabSwitchCategory/tabNav";
import SwitchMiniNav from "../../components/general/tabSwitchCategory/switchMiniNav";
import BookingTabData from "../../components/general/tabSwitchCategory/bookingTabData";
import ReviewTabData from "../../components/general/tabSwitchCategory/reviewTab";
import NotificationsTab from "../../components/activitiesComponents/notificationsTab";
import CommunityTabData from "../../components/activitiesComponents/communityTab";

const Notifications = () => {
  const communityData = [
    {
      title: "RNS products",
      status: "current",
    },
  ];
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
  const [activeStep, setActiveStep] = useState(0);

  const [activeTab, setTab] = useState<string>("notifications");
  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number>(0);
  const [selectedOption, setSelectedOptions] = useState();

  const handleActive = (tab: string) => {
    setTab(tab);
  };

  const handleSelectSwitch = (index: number, option: any) => {
    setActiveSwitchIndex(index);
    setSelectedOptions(option);
  };

  const activitiesSectionData = {
    tabSwitch: ["notifications", "community"],
    notifications: {
      options: ["booking", "Payment", "Promotion", "Message"],
      notificationData,
    },
  };

  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="post-job bg-white min-h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Activities"
            type="plain"
          />
          <div className="px-6 md:px-6 lg:px-8 pt-5 md:flex text-pTagGrey ">
            <div className="md:w-8/12 lp:w-7/12 lg:w-5/12 mx-auto lp:text-[14px] lg:text-[16px]">
              <TabNav
                options={activitiesSectionData.tabSwitch}
                activeTab={activeTab}
                handleActive={handleActive}
                setSelectedOptions={setSelectedOptions}
              />

              {activeTab === "notifications" && (
                <SwitchMiniNav
                  switchOptions={
                    activeTab === "notifications" &&
                    activitiesSectionData.notifications.options
                  }
                  activeSwitchIndex={activeSwitchIndex}
                  handleSelectSwitch={handleSelectSwitch}
                />
              )}

              {activeTab === "notifications" && (
                <NotificationsTab
                  data={activitiesSectionData.notifications.notificationData}
                  selectedOption={selectedOption || "booking"}
                />
              )}
              {activeTab === "community" && (
                <CommunityTabData data={communityData} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
