import React, { useRef, useEffect } from "react";
import ClipboardJS from "clipboard";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ShareModal: React.FC<{
  setModalPopUp?: any;
  modalPop?: boolean;
}> = ({ setModalPopUp, modalPop }) => {
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className=" w-full max-w-2xl  mx-auto flex items-center justify-center">
          <div className="relative bg-white md:w-[461px] h-[261px] md:rounded-md rounded-lg shadow dark:bg-gray-700 px-8 py-6 flex flex-col  items-center md:justify-between">
            <div className="bg-white flex w-full items-center justify-between mb-2">
              <h1 className="text-[20px] font-bold">Share</h1>

              <div
                className="max-sm:hidden close cursor-pointer"
                onClick={() => setModalPopUp(!modalPop)}
              >
                <XMarkIcon width={24} height={24} />
              </div>
            </div>

            <div className="social flex items-center w-full justify-around">
              <Image
                src={"/assets/icons/socials/facebook.svg"}
                width={32}
                height={32}
                alt="brand_logo min-w-[40px] max-h-[40px]"
                className="mr-2"
              />
              <Image
                src={"/assets/icons/socials/twitter.svg"}
                width={32}
                height={32}
                alt="brand_logo min-w-[40px] max-h-[40px]"
                className="mr-2"
              />
              <Image
                src={"/assets/icons/socials/insta.svg"}
                width={32}
                height={32}
                alt="brand_logo min-w-[40px] max-h-[40px]"
                className="mr-2"
              />
              <Image
                src={"/assets/icons/socials/whatsapp.svg"}
                width={32}
                height={32}
                alt="brand_logo min-w-[40px] max-h-[40px]"
                className="mr-2"
              />
            </div>

            <div className="flex w-full  bg-[#F6F6F6] text-[16px] justify-between items-center">
              {/* the target */}
              <p id="copy-target" className="px-4">
                Loggworks.com/Dyson-Electricals
              </p>
              <button
                id="copy-button"
                data-te-clipboard-init
                data-te-clipboard-target="#copy-target"
                data-te-ripple-init
                data-te-ripple-color="light"
                className="bg-[#ECECEC] py-3 px-5 text-dark"
              >
                copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
