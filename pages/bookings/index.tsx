import { useEffect, useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import TabNav from "../../components/general/tabSwitchCategory/tabNav";
import SwitchMiniNav from "../../components/general/tabSwitchCategory/switchMiniNav";
import BookingTabData from "../../components/general/tabSwitchCategory/bookingTabData";
import ReviewTabData from "../../components/general/tabSwitchCategory/reviewTab";

const Bookings = () => {
  const bookingData = [
    {
      title: "RNS products",
      status: "current",
      completed: false,
    },
    {
      title: "Daya & Sons",
      status: "upcoming",
    },
    {
      title: "Dyson Electricals",
      status: "past",
      completed: true,
      review: "",
    },
    {
      title: "Dyson Electricals",
      status: "past",
      completed: false,
      review: "",
    },
    {
      title: "RNS products",
      status: "current",
      completed: true,
    },
    {
      title: "RNS products",
      status: "current",
      completed: true,
    },
  ];
  const reviewData = [
    {
      title: "Dyson Electricals",
      category: "reviews",
      reviewText:
        "You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution",
      image: [""],
    },
    {
      title: "Dyson Electrica",
      category: "reviews",
      reviewText:
        "You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:",
      image: [""],
    },
    {
      name: "Theresa Webb",
      category: "question & answers",
      question:
        "How do you handle the buying of spare electrical parts for work?",
      answer:
        "You either provide the money or you get it your self. Either way works",
    },
    {
      name: "Theresa Webb",
      category: "question & answers",
      question:
        "How do you handle the buying of spare electrical parts for work?",
      answer:
        "You either provide the money or you get it your self. Either way works",
    },
    {
      name: "Dyson Electricals",
      category: "comments",
      repliedTo: "Devon Lane",
      reply:
        "You either provide the money or you get it your self. Either way works",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const [activeTab, setTab] = useState<string>("bookings");
  const [activeSwitchIndex, setActiveSwitchIndex] = useState<number>(0);
  const [selectedOption, setSelectedOptions] = useState();

  const handleActive = (tab: string) => {
    setTab(tab);
  };

  const handleSelectSwitch = (index: number, option: any) => {
    setActiveSwitchIndex(index);
    setSelectedOptions(option);
  };

  const bookingSectionData = {
    tabSwitch: ["bookings", "review"],
    booking: {
      options: ["current", "upcoming", "past"],
      bookingData,
    },
    review: {
      options: ["Reviews", "Question & Answers", "Comments"],
      reviewData,
    },
  };

  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white min-h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Bookings"
          />
          <div className="px-6 md:px-9 pt-5 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <TabNav
                options={bookingSectionData.tabSwitch}
                activeTab={activeTab}
                handleActive={handleActive}
                setSelectedOptions={setSelectedOptions}
              />

              <div className="">
                <SwitchMiniNav
                  switchOptions={
                    activeTab === "bookings"
                      ? bookingSectionData.booking.options
                      : bookingSectionData.review.options
                  }
                  activeSwitchIndex={activeSwitchIndex}
                  handleSelectSwitch={handleSelectSwitch}
                />
              </div>
              {activeTab === "bookings" && (
                <BookingTabData
                  data={bookingSectionData.booking.bookingData}
                  selectedOption={selectedOption || "current"}
                />
              )}

              {activeTab === "review" && (
                <ReviewTabData
                  data={bookingSectionData.review.reviewData}
                  selectedOption={selectedOption || "reviews"}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
