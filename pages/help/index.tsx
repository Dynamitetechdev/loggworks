import { useState } from "react";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import {
  ChatBubbleLeftEllipsisIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";

const Help = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Help"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-5 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto">
              <div className="Frequently mb-10">
                <h1 className="font-bold mb-3">Frequently Asked Questions</h1>
                <button
                  className="bg-green text-white
                   w-full h-[48px] font-bold py-2 px-4 rounded flex items-center justify-center"
                >
                  <span>
                    <ChatBubbleOvalLeftEllipsisIcon width={20} height={20} />
                  </span>
                  <p className="ml-2">Visit FAQ Page</p>
                </button>
              </div>
              <div className="Contact mb-3">
                <h1 className="font-bold ">Contact Us</h1>
                <p className="mb-3">Can’t find your answers in FAQ’S</p>
                <button
                  className="bg-green text-white
                   w-full h-[48px] font-bold py-2 px-4 rounded flex items-center justify-center mb-4"
                >
                  <span>
                    <ChatBubbleOvalLeftEllipsisIcon width={20} height={20} />
                  </span>
                  <p className="ml-2">Chat Us</p>
                </button>

                <button
                  className="border-2 border-green text-green
                   w-full h-[48px] font-bold py-2 px-4 rounded mb-4"
                >
                  <p className="ml-2">Chat Us</p>
                </button>
                <button
                  className="border-2 border-green text-green
                   w-full h-[48px] font-bold py-2 px-4 rounded mb-4"
                >
                  <p className="ml-2">Tweet Us</p>
                </button>
                <button
                  className="border-2 border-green text-green
                   w-full h-[48px] font-bold py-2 px-4 rounded mb-4"
                >
                  <p className="ml-2">Call Us</p>
                </button>
              </div>

              <div className="Suggestions">
                <h1 className="font-bold ">Suggestions</h1>

                <form action="">
                  <div className="x-3 my-2 md:mb-0 w-full">
                    <label
                      className="capitalize tracking-wide text-md"
                      id="grid-first-name"
                    >
                      Help us improve our app
                    </label>
                    <textarea
                      className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[136px]"
                      id="grid-first-name"
                      placeholder="Your suggestions will help us to best serve you better."
                    />
                  </div>

                  <button
                    className="bg-green text-white
                   w-full h-[48px] font-bold py-2 px-4 rounded"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
