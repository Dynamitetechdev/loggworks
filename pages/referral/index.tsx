import { useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import Image from "next/image";
import NavHead from "../../components/postJobComponents/navHead";

const Referral = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-x-hidden">
        <NavHead
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          title="Refferal"
          type="notab"
        />
        <div className="post-job bg-white h-screen relative">
          <div className="h-[475px] text-green bg-[#FFEFD9] flex flex-col items-center">
            <h1 className="text-[40px] font-bold text-center my-5">
              Refer your <br /> friends and earn!
            </h1>

            <Image
              src={"/assets/images/gift.svg"}
              width={179}
              height={132}
              alt=""
            />

            <div className="flex items-center -ml-8 mt-3">
              <Image
                src={"/assets/icons/coin.svg"}
                width={16}
                height={16}
                alt=""
                className="mr-2"
              />
              <h1 className="text-dark font-bold text-[20px]">
                200 Loggpoints
              </h1>
            </div>
          </div>
          <div className="mx-auto rounded-lg w-11/12 md:w-6/12 px-6 md:px-10 pt-10 md:flex flex flex-col items-center  text-pTagGrey bg-white -mt-20">
            <h1 className="font-bold text-[20px] text-center text-dark mx-auto mb-3">
              Refer a business and earn 200 points
            </h1>

            <div className="flex flex-col items-center justify-center">
              <div className="md:flex items-center">
                <div className="flex items-start md:w-1/2 md:pr-2 max-sm:mb-3">
                  <Image
                    src={"/assets/icons/mark.svg"}
                    width={24}
                    height={24}
                    alt=""
                    className="mr-2"
                  />
                  <h1 className="text-[16px] ">
                    Send them your unique referral link
                  </h1>
                </div>
                <div className="flex items-start md:w-2/2 md:pl-4">
                  <Image
                    src={"/assets/icons/mark.svg"}
                    width={24}
                    height={24}
                    alt=""
                    className="mr-2"
                  />
                  <h1 className="text-[16px]">
                    You get 200 Points when they get their first boooking
                  </h1>
                </div>
              </div>

              <div className="my-5">
                <div className="pl-2 text-center rounded-lg border border-dashed border-green flex items-center w-[280px] bg-[#FFEFD9]">
                  <div className="w-8/12">
                    <h3 className="text-[14px]">Your referral code</h3>
                    <h1 className="font-bold text-[24px]">ABC123G</h1>
                  </div>

                  <div className="p-2 my-2 border-l border-dashed border-green">
                    <h1 className="text-green">Copy Code</h1>
                  </div>
                </div>
              </div>
              <div className="social">
                <p className="text-center">Share link referral via</p>
                <div className="flex items-center my-3">
                  <Image
                    src={"/assets/icons/socials/facebook.svg"}
                    width={32}
                    height={32}
                    alt=""
                  />
                  <Image
                    src={"/assets/icons/socials/twitter.svg"}
                    width={32}
                    height={32}
                    alt=""
                    className="mx-5"
                  />
                  <Image
                    src={"/assets/icons/socials/insta.svg"}
                    width={32}
                    height={32}
                    alt=""
                    className="mr-5"
                  />
                  <Image
                    src={"/assets/icons/socials/whatsapp.svg"}
                    width={32}
                    height={32}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
