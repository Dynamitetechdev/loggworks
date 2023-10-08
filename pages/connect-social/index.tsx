import { useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";

const ConnectSocial = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-x-hidden">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Connect social accounts"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <div className="mb-8">
                <div className="flex items-center font-bold mb-5">
                  <div className="social w-[44px] h-[44px] border rounded-lg border-grey flex items-center justify-center mr-3">
                    <Image
                      src={"/assets/icons/socials/fb_black.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <p>Connect Facebook</p>
                </div>
                <div className="">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    id="firstname"
                  >
                    <span>Facebook profile link</span>
                  </label>
                  <div className="relative">
                    <input
                      className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px] bg-[#FAFAFA]"
                      id="firstname"
                      type="text"
                      name="firstname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center font-bold mb-5">
                  <div className="social w-[44px] h-[44px] border rounded-lg border-grey flex items-center justify-center mr-3">
                    <Image
                      src={"/assets/icons/socials/insta_black.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <p>Connect Instagram</p>
                </div>
                <div className="">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    id="firstname"
                  >
                    <span>Instagram Username</span>
                  </label>
                  <div className="relative">
                    <input
                      className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px] bg-[#FAFAFA]"
                      id="firstname"
                      type="text"
                      name="firstname"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-center font-bold mb-5">
                  <div className="social w-[44px] h-[44px] border rounded-lg border-grey flex items-center justify-center mr-3">
                    <Image
                      src={"/assets/icons/socials/twitter_black.svg"}
                      width={24}
                      height={24}
                      alt=""
                    />
                  </div>
                  <p>Connect Twitter</p>
                </div>
                <div className="">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    id="firstname"
                  >
                    <span>Twitter Username</span>
                  </label>
                  <div className="relative">
                    <input
                      className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px] bg-[#FAFAFA]"
                      id="firstname"
                      type="text"
                      name="firstname"
                      required
                    />
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

export default ConnectSocial;
