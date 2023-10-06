import Image from "next/image";
import Link from "next/link";
import {
  ChevronRightIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import { useState } from "react";

const Account = () => {
  const progress = 100 - 50;
  const accountNav = [
    {
      title: "Logg cash",
      icon: "wallet",
      route: "/logg-cash",
    },
    {
      title: "payment",
      icon: "payment",
      route: "/payment-card",
    },
    {
      title: "Referrals",
      icon: "referral",
      route: "/referral",
    },
  ];
  const settingNav = [
    {
      title: "Personal",
      icon: "personal",
      route: "/dashboard-personal",
    },
    {
      title: "Security",
      icon: "security",
      route: "/security",
    },
    {
      title: "Notifications",
      icon: "notifications",
      route: "/notifications",
    },
    {
      title: "Help",
      icon: "help",
      route: "/help",
    },
    {
      title: "Connect social accounts",
      icon: "help",
      route: "/connect-social",
    },
  ];
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="post-job bg-white relative max-sm:mb-16">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Account"
            type="plain"
          />
          <div className="px-6 md:px-9 md:flex text-pTagGrey pb-36">
            <div className="md:w-5/12 bg-[#fafafa] mx-auto">
              <div className="main md:col-span-10">
                <div className="relative">
                  <div className="w-bg-lightWhite z-5">
                    <div className="admin_info mb-3 px-3 py-6 bg-white flex flex-col items-center">
                      <div className="admin_image">
                        <Image
                          src={"/assets/bg/te.jpg"}
                          width={32}
                          height={32}
                          alt="brand_logo "
                          className="mr-2 max-sm:hidden rounded-full max-h-[32px] max-w-[32px]"
                        />
                      </div>
                      <h1 className="text-[14px] font-bold mb-1 mt-3">
                        Crosby O&lsquo;Dennehy
                      </h1>
                      <p className="text-[12px]">
                        Aristidedossouyovo@gmail.com
                      </p>
                    </div>
                    <div className="admin_info px-3 py-6 bg-white mx-t">
                      <h1 className="text-left font-bold">Log points</h1>
                      <div className="flex flex-col items-center my-2">
                        <div className="progress-circle w-[118px] h-[118px] bg-green rounded-full flex items-center justify-center">
                          <div
                            className={`progress-circle__circle bg-white w-[98px] rounded-full h-[98px] flex flex-col items-center justify-center `}
                          >
                            <h1 className="text-[20px] font-bold ">
                              {progress}
                            </h1>
                            <p className="text-[12px]">Points</p>
                          </div>
                        </div>
                        <div className="progress-circle__text text-[12px] py-3 px-2 -mt-[25px] bg-white">
                          of 5000
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-[12px]">
                          How to earn points and level up
                        </p>
                        <Link href="/how-to-earn">
                          <ExclamationCircleIcon width={20} height={20} />
                        </Link>
                      </div>
                    </div>
                    <div className="account mb py-3 text-[12px]">
                      <h1 className="text-left font-bold uppercase px-3 pb-2">
                        Account
                      </h1>
                      <ul className=" bg-white px-2">
                        {accountNav.map((x, i) => (
                          <Link href={x.route} key={i}>
                            <li className="flex items-center justify-between py-[12px]">
                              <div className="flex items-center">
                                <Image
                                  src={`/assets/icons/${x.icon}.svg`}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                                <p className="ml-2 capitalize">{x.title}</p>
                              </div>

                              <ChevronRightIcon width={20} height={20} />
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className="account text-[12px]">
                      <h1 className="text-left font-bold uppercase px-3 pb-2">
                        Settings
                      </h1>
                      <ul className=" bg-white px-3">
                        {settingNav.map((x, i) => (
                          <Link href={x.route} key={i}>
                            <li className="flex items-center justify-between py-[12px] ">
                              <div className="flex items-center">
                                <Image
                                  src={`/assets/icons/${x.icon}.svg`}
                                  width={20}
                                  height={20}
                                  alt=""
                                />
                                <p className="ml-2 capitalize">{x.title}</p>
                              </div>

                              <ChevronRightIcon width={20} height={20} />
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </div>

                    <div className="logout flex items-center justify-center py-4 cursor-pointer">
                      <Image
                        src={"/assets/icons/logout.svg"}
                        width={20}
                        height={20}
                        alt=""
                      />
                      <p className="ml-2">Logout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
