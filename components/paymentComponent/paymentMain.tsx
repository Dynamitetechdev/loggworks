import { useState } from "react";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import Image from "next/image";
import { EllipsisVerticalIcon, PlusIcon } from "@heroicons/react/24/outline";
import AddMainCradModal from "./addNewCardModal";

const PaymentMain = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [addCardModal, setAddCardModal] = useState<boolean>(false);
  const [sampleCards, setSampleCards] = useState<any[]>([]);

  const [defaultCard, setDefaultCard] = useState(-1);

  const handleDefaultCard = (index: number) => {
    setDefaultCard(index);
  };

  console.log("All Cards", sampleCards);

  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Payment"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-10 md:flex text-pTagGrey ">
            <div className="md:w-5/12 mx-auto ">
              <div className="">
                {sampleCards.map((card, index) => (
                  <div
                    className={`card h-[104px] px-4 text-dark rounded-lg flex flex-col justify-center mb-4 ${
                      index % 2 !== 0 ? "bg-[#FAFAFA]" : "bg-[#FFEFD9]"
                    }`}
                    key={index}
                  >
                    <div className="flex items-center justify-between my-2">
                      <div className="flex items-center ">
                        <p className="">{card.nameOnCard}</p>

                        {defaultCard === index && (
                          <p className="text-[8px] text-white bg-green py-1 px-3 rounded-xl ml-5">
                            DEFAULT
                          </p>
                        )}
                      </div>

                      <div className="right-3 top-3 cursor-pointer">
                        <EllipsisVerticalIcon width={20} height={20} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <h1 className="text-[24px]">
                        **** **** ****{" "}
                        <span>{card.cardNumber.substring(5, -1)}</span>
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
                            className="form-checkbox rounded-full"
                            checked={index === defaultCard}
                            onChange={() => handleDefaultCard(index)}
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
                {sampleCards.length <= 0 && (
                  <h1 className="text-center font-bold text-2xl">
                    No Payment Card Yet
                  </h1>
                )}
                <button
                  className="w-full h-[48px] border-2 text-green border-green font-bold my-4 py-2 px-4 rounded flex items-center justify-center"
                  onClick={() => setAddCardModal(true)}
                >
                  <PlusIcon width={20} height={20} />
                  <span className="ml-2">Add another card</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {addCardModal && (
        <AddMainCradModal
          setAddCardModal={setAddCardModal}
          addCardModal={addCardModal}
          setSampleCard={setSampleCards}
        />
      )}
    </div>
  );
};

export default PaymentMain;
