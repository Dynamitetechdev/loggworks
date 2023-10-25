import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const GeneralModal: React.FC<{
  img: string;
  message: string;
  setModalPopUp?: any;
  modalPop?: boolean;
  optionalMsg?: string;
}> = ({ message, setModalPopUp, modalPop, img, optionalMsg }) => {
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className=" w-full max-w-2xl  mx-auto flex items-center justify-center">
          <div className="relative bg-white md:w-[511px] w-full h-[374px] md:rounded-md rounded-lg shadow dark:bg-gray-700 md:px-8 px-6 py-6 flex flex-col items-center justify-between">
            <div
              className="max-sm:hidden close cursor-pointer absolute right-6 top-5"
              onClick={() => setModalPopUp(false)}
            >
              <XMarkIcon width={24} height={24} />
            </div>
            <Image
              src={`/assets/modal/${img}.svg`}
              width={80}
              height={80}
              alt=""
              className="md:-mb-20 mt-10"
            />
            <h1 className="font-semibold text-2xl max-sm:my-5 max-sm:mb-16">
              {message}
            </h1>

            <p className="-mt-20 text-[#4B4B4B]">{optionalMsg}</p>
            <button
              className="relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded "
              onClick={() => setModalPopUp(!modalPop)}
            >
              {message.includes('failed') ? "Try Again" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralModal;
