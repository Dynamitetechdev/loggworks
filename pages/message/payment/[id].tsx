import { useState } from "react";
import SideBar from "../../../components/general/sideBar";
import NavHead from "../../../components/postJobComponents/navHead";
import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import GeneralModal from "../../../components/general/generalModal";

const Payment = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [sortOption, setSortOption] = useState<string | null>(null);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const handleSelected = (option: string) => {
    console.log(option);
    setSortOption(option);
  };

  const card = "9754897";
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-hidden">
        <div className="post-job bg-white min-h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Payment"
            type="notab"
          />

          <div className="px-6 md:px-9 pt-5 md:flex text-pTagGrey ">
            <div className="md:w-7/12 lp:w-7/12 lg:w-5/12 mx-auto">
              <div className="">
                <div className="my-4">
                  <div className="card_content px-2 py-1 my-3 border-b border-grey80">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center mb-2 md:mb-3">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={40}
                          height={40}
                          alt="brand_logo"
                          className="mr-2"
                        />
                        <div>
                          <h4 className="font-bold text-[18px]">
                            Dyson Electricals
                          </h4>
                          <div className="dateTime text-[14px]">
                            <span>26/06/2021</span> | <span>6:32AM</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5>
                      Electrician required to fix a spoilt vaccum cleaner.
                      Please treat as urgent.
                    </h5>
                    <div className="flex items-center max-md:w-11/12 w-9/12 justify-between  min-md:text-[14px] max-sm:text-[14px] md:my-3 my-2 font-light ">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/icons/calendar.svg"}
                          width={24}
                          height={24}
                          alt=""
                        />
                        <p className="ml-1">09/06/2021</p>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={"/assets/icons/clock.svg"}
                          width={24}
                          height={24}
                          alt=""
                        />

                        <p className="ml-1">9:00AM</p>
                      </div>
                      <div className=" flex items-center">
                        <Image
                          src={"/assets/icons/timehalf.svg"}
                          width={24}
                          height={24}
                          alt=""
                        />

                        <p className="ml-1">5 days</p>
                      </div>
                    </div>
                    <div className=" flex items-center mb-3">
                      <MapPinIcon width={24} height={24} />
                      <p className="ml-1 font-light">
                        8 High Street, Chase Terrace, WS7 1LP
                      </p>
                    </div>
                  </div>

                  <div className="border-b border-grey80 mb-3">
                    <h1 className="text-[16px] font-bold">
                      Select a payment method
                    </h1>

                    <ul>
                      <li
                        className="flex items-center mb-4 capitalize "
                        onClick={() => {
                          handleSelected("creditCard");
                        }}
                      >
                        <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="form-checkbox rounded-full "
                            checked={sortOption === "creditCard"}
                          />
                        </label>
                        <p className="mx-3 text-[14px]">Credit or debit card</p>
                      </li>

                      {sortOption === "creditCard" && (
                        <>
                          <div className="card h-[51px]  px-4 text-dark rounded-lg flex flex-col justify-center  bg-[#FFEFD9]">
                            <div className="flex items-center justify-between">
                              <h1 className="text-[24px]">
                                **** **** ****
                                <span> {card.substring(4, -1)}</span>
                              </h1>
                              <div className="flex items-center">
                                <Image
                                  src={"/assets/icons/masterCard.svg"}
                                  width={36}
                                  height={24}
                                  alt=""
                                  className="pt-1"
                                />
                              </div>
                            </div>
                          </div>
                          <p className="underline text-right text-[14px] text-[#2FA500] mb-4 mt-2">
                            Select another payment method
                          </p>
                        </>
                      )}

                      <li
                        className="flex items-center mb-3 capitalize "
                        onClick={() => {
                          handleSelected("wallet");
                        }}
                      >
                        <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center">
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="form-checkbox rounded-full "
                            checked={sortOption === "wallet"}
                          />
                        </label>
                        <p className="mx-3 text-[14px]">Pay from Wallet</p>
                      </li>
                    </ul>
                  </div>

                  <div className="orderSummary mt-4">
                    <h1 className="text-[16px] font-bold">Order Summary</h1>
                    <ul>
                      <li className="my-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-light">Sub Total</h3>
                          <p className="font-bold">£650</p>
                        </div>
                      </li>
                      <li className="my-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-light">Sale Tax Rate</h3>
                          <p className="font-bold">18%</p>
                        </div>
                      </li>
                      <li className="my-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-light">Sales Tax</h3>
                          <p className="font-bold">£36</p>
                        </div>
                      </li>
                      <li className="my-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-light">Discount</h3>
                          <p className="font-bold">-£20</p>
                        </div>
                      </li>
                      <li className="my-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-light">Payment processing fee</h3>
                          <p className="font-bold">£5</p>
                        </div>
                      </li>
                      <li className="my-3">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold">Total Amount</h3>
                          <p className="font-bold text-green">£650</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="mt-7">
                    <button
                      className="w-full h-[48px] bg-green  font-bold py-2 px-4 mb-2 rounded"
                      onClick={() => setPaymentComplete(true)}
                    >
                      Pay Now
                    </button>
                    <div className="max-sm:my-4 my-2 flex items-center gap-4 before:h-px before:flex-1 before:bg-grey  before:content-[''] after:h-px after:flex-1 after:bg-grey  after:content-['']">
                      or
                    </div>
                    <button
                      className="w-full h-[48px] bg-[#FEC514] text-dark font-bold py-2 px-4 rounded flex items-center justify-center"
                      onClick={() => setPaymentComplete(true)}
                    >
                      <p className="mr-1"> Pay with</p>
                      <Image
                        src={"/assets/icons/paypal.svg"}
                        width={57}
                        height={14}
                        alt=""
                        className="mt-1"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {paymentComplete && (
        <GeneralModal
          message="Payment successful"
          optionalMsg="Your payment has been received"
          img="payment"
          setModalPopUp={setPaymentComplete}
          modalPop={paymentComplete}
        />
      )}
    </div>
  );
};

export default Payment;
