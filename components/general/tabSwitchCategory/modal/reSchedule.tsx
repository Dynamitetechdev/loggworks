import { EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const RescheduleModal: React.FC<{
  setreScheduleModalPopUp: any;
  ReScheduleModalPopUp: boolean;
}> = ({ setreScheduleModalPopUp, ReScheduleModalPopUp }) => {
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className=" w-full mx-auto flex items-center justify-center">
          <div className="relative md:w-[461px] w-full  shadow dark:bg-gray-700 ">
            <div className="container">
              <div className="bg-white max-sm:rounded-t-lg flex items-center justify-between py-4 px-8">
                <div className="flex items-center  ">
                  <h1 className="text-[20px] font-semibold">Reschedule job</h1>
                </div>
                <div
                  className="close cursor-pointer"
                  onClick={() => setreScheduleModalPopUp(!ReScheduleModalPopUp)}
                >
                  <XMarkIcon width={24} height={24} />
                </div>
              </div>
              <div className="px-8 py-4 bg-white flex flex-col justify-between">
                <div className="password mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-1 text-left"
                    id="username"
                  >
                    <span>New Job Date</span>
                  </label>
                  <div className="relative">
                    <input
                      className="border border-grey rounded w-full py-2 px-3 text-gray-700 h-[48px] bg-lightWhite"
                      id="username"
                      type="text"
                      name="password"
                    />

                    <div className="absolute top-[13px] right-2">
                      <Image
                        src={"/assets/icons/calendar.svg"}
                        width={20}
                        height={20}
                        alt=""
                      />
                    </div>
                  </div>
                </div>

                <div className="writeReview">
                  <div className="x-3 my-2 md:mb-0 w-full">
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
                    />
                  </div>
                </div>
                <button className="relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded ">
                  Reschedule job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RescheduleModal;
