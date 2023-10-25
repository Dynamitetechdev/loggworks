import { useState } from "react";
import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import SideBar from "../../../../components/general/sideBar";
import NavHead from "../../../../components/postJobComponents/navHead";
import Link from "next/link";

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

          <div className="px-6 md:px-9 pt-5 my-20 md:flex text-pTagGrey ">
            <div className="md:w-7/12 lp:w-7/12 lg:w-5/12 mx-auto">
              <div className="">
                <div className="my-4">
                  <div className="confirmed flex items-center">
                    <Image
                      src={"/assets/modal/starMark.svg"}
                      width={40}
                      height={40}
                      alt="brand_logo"
                      className="mr-2"
                    />
                    <div className="">
                      <h1 className="text-[20px] font-bold">
                        Your booking has been confirmed
                      </h1>
                      <p className="text-[14px]">
                        A confirmation mail has been sent to your email{" "}
                      </p>
                    </div>
                  </div>
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
                    <div className="flex items-center max-md:w-11/12 w-8/12 justify-between  min-md:text-[14px] max-sm:text-[14px] md:my-3 my-2 font-light">
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
                    <Link href={"/bookings"}>
                      <button
                        className="w-full h-[48px] bg-green  font-bold py-2 px-4 mb-2 rounded"
                        onClick={() => setPaymentComplete(true)}
                      >
                        Go to Bookings
                      </button>
                    </Link>
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

export default Payment;
