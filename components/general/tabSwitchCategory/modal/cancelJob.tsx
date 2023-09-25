import { EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const CancelJobModal: React.FC<{
  setcancelJobModalPopUp: any;
  cancelJobModalPopUp: boolean;
}> = ({ setcancelJobModalPopUp, cancelJobModalPopUp }) => {
  const [btnRed, setBtnRed] = useState(false);
  const handleonChange = (e: any) => {
    if (e.target.value != "") {
      setBtnRed(true);
    }
  };
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className=" w-full mx-auto flex items-center justify-center">
          <div className="relative md:w-[461px] w-full  shadow dark:bg-gray-700 ">
            <div className="container">
              <div className="bg-white max-sm:rounded-t-lg flex items-center justify-between py-4 px-8">
                <div className="flex items-center  ">
                  <h1 className="text-[20px] font-semibold">Cancel Job</h1>
                </div>
                <div
                  className="close cursor-pointer"
                  onClick={() => setcancelJobModalPopUp(!cancelJobModalPopUp)}
                >
                  <XMarkIcon width={24} height={24} />
                </div>
              </div>
              <div className="px-8 py-4 bg-white flex flex-col justify-between">
                <div className="writeReview">
                  <div className="x-3 mb-2 md:mb-0 w-full">
                    <label
                      className="capitalize tracking-wide text-md"
                      id="grid-first-name"
                    >
                      Reason
                    </label>
                    <textarea
                      className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[108px]"
                      id="grid-first-name text-[16px]"
                      placeholder=""
                      onChange={handleonChange}
                    />
                  </div>
                </div>
                <button
                  className={`relative  text-white w-full h-[48px] font-bold py-2 px-4 rounded ${
                    btnRed ? "bg-[#CA0904]" : "bg-green"
                  }`}
                >
                  Cancel Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelJobModal;
