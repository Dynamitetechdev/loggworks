import { useState } from "react";
import SideBar from "../../components/general/sideBar";
import Header from "../../components/general/nav/header";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";
import { PlusIcon } from "@heroicons/react/24/outline";

const PaymentCard = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <Header />
        <div className="post-job bg-white h-screen relative md:mt-16">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Payment"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto ">
              <div className="">
                <div className="card h-[104px] px-4 text-dark bg-[#FFEFD9] rounded flex flex-col justify-center">
                  <div className="flex items-center my-2">
                    <p>Crosby O’Dennehy</p>

                    <p className="text-[8px] text-white bg-green py-1 px-3 rounded-xl ml-5">
                      DEFAULT
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-[24px]">
                      **** **** **** <span>2546</span>
                    </h1>
                    <div className="flex items-center">
                      <Image
                        src={"/assets/icons/masterCard.svg"}
                        width={36}
                        height={24}
                        alt=""
                        className="pt-1"
                      />
                      <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="form-checkbox rounded-full "
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <button className="w-full h-[48px] border-2 text-green border-green font-bold my-4 py-2 px-4 rounded flex items-center justify-center">
                  <PlusIcon width={20} height={20} />
                  <span className="ml-2">Add another card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCard;
