import { EllipsisVerticalIcon, PlusIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const Modal: React.FC<{
  setModalPopUp: any;
  modalPop: boolean;
}> = ({ setModalPopUp, modalPop }) => {
  let depositLoading = false
  const [activeIndex, setActiveIndex] = useState(0);
  const [sampleCards, setSampleCards] = useState<any[]>([
    {
      nameOnCard: "Dynamite Magician",
      cardNumber: "2345"
    },
    {
      nameOnCard: "Anglic Jones",
      cardNumber: "9685"
    },
  ]);

  const [defaultCard, setDefaultCard] = useState(-1);

  const handleDefaultCard = (index: number) => {
    setDefaultCard(index);
  };

  const [reviewAlert, setReviewAlert] = useState({
    noReviewText: true,
    rateValue: false
  })

  const [select, setSelect] = useState(-1);

  const [rate, setRate] = useState(Array(5).fill(false));
  const [rateIndex, setRateIndex] = useState(-1);
  const handleRate = (index: number) => {
    setRateIndex(index);
    const newArr = rate.map((_, i) => i <= index);
    setRate(newArr);
  };

  const inputAmount = (e: any) => {
    const isReviewTextValid = e.target.value > 0;
    setReviewAlert((prev: any) => ({
      ...prev,
      noReviewText: !isReviewTextValid
    }));
  }

  const [formData, setFormData] = useState<any>({
    nameOnCard: "",
    cardNumber: "",
    expiryDate: "",
    CVV: "",
  });
  const handleOnChange = (event: any): void => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (e: any): void => {
    e.preventDefault();
    setFormData({
      nameOnCard: "",
      cardNumber: "",
      expiryDate: "",
      CVV: "",
    });
  };
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className=" w-full mx-auto flex items-center justify-center">
          <div className="relative bg-white md:w-[461px] rounded-lg shadow dark:bg-gray-700 ">
            {activeIndex === 0 && (
              <form className="container">
                <div className="flex items-center justify-between mb-2 py-4 px-8">
                  <div className="flex items-center  ">
                    <h3 className="text-2xl font-semibold">
                      Deposit
                    </h3>
                  </div>
                  <div
                    className="close cursor-pointer"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    <XMarkIcon width={24} height={24} />
                  </div>
                </div>
                <div className="px-8 py-4 flex flex-col justify-between">

                  <div className="deposit">
                    <div className="x-3 my-2 md:mb-0 w-full">
                      <label
                        className="capitalize tracking-wide text-md "
                        id="grid-first-name"
                      >
                        Enter amount
                      </label>
                      <input type="tel" className="appearance-none w-full text-gray-700 border border-red-500 rounded px-4 py-2 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 text-center text-[36px] mb-7 mt-3" onChange={e => inputAmount(e)} placeholder="00.00"/>
                    </div>
                  </div>

                  <div className="payment_card mb-16">
                    <label
                      className="capitalize tracking-wide text-md "
                      id="grid-first-name"
                    >
                      Payment method
                    </label>
                    <div
                      className="card h-[104px] px-4 text-dark rounded-lg flex flex-col justify-center bg-[#F0FFEB] border border-[#ECECEC] mb-5 mt-3"
                    >
                      <div className="flex items-center justify-between my-2">
                        <div className="flex items-center ">
                          <p className="">Crosby O’Dennehy</p>
                          <p className="text-[8px] text-white bg-green py-1 px-3 rounded-xl ml-2">
                            DEFAULT
                          </p>
                        </div>

                        <div className="right-3 top-3 cursor-pointer">
                          <EllipsisVerticalIcon width={20} height={20} />
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <h1 className="text-[24px]">
                          **** **** ****{" "}
                          <span>{2546}</span>
                        </h1>
                        <div className="flex items-center">
                          <Image
                            src={"/assets/icons/masterCard.svg"}
                            width={36}
                            height={24}
                            alt=""
                            className="pt-1"
                          />
                          <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center ml-2">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="form-checkbox rounded-full"
                              checked={true}

                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    <p className="underline text-green text-1xl text-right cursor-pointer" onClick={() => setActiveIndex(activeIndex + 1)}>Change payment method</p>
                  </div>

                  <button
                    className={`relative mb-3 text-white w-full h-[48px] font-bold py-2 px-4 rounded ${reviewAlert.noReviewText ? "bg-grey" : "bg-green"}`}
                    disabled ={reviewAlert.noReviewText}
                    onClick={() => {
                      depositLoading = true
                    }}
                  >
                    {depositLoading ? "Processing payment..." : "Make deposit"}
                  </button>
                </div>
              </form>
            )}
            {activeIndex === 1 && (
              <div className="h-[605px] max-sm:w-[410px] max-sm:rounded">
                <div className="flex items-center justify-between mb-2 py-4 px-8">
                  <div className="flex items-center ">
                    <h1 className="text-2xl font-bold">
                      Payment methods
                    </h1>
                  </div>
                  <div
                    className="max-sm:hidden close cursor-pointer"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    <XMarkIcon width={24} height={24} />
                  </div>
                </div>

                <div className="px-8 py-4 flex flex-col justify-between">
                  <div className="">
                    {sampleCards.map((card, index) => (
                      <div
                        className={`card h-[104px] px-4 text-dark rounded-lg mb-5 flex flex-col justify-center mb-4 ${index % 2 !== 0 ? "bg-[#FAFAFA]" : "bg-[#FFEFD9]"
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
                  </div>
                  <p className="underline text-green text-1xl text-right cursor-pointer" onClick={() => setActiveIndex(activeIndex + 1)}>Add another card</p>
                  <div className="mt-28">
                    <button
                      className={`relative  text-white w-full h-[48px] font-bold py-2 px-4 rounded ${defaultCard < 0 ? "bg-grey" : "bg-green"}`}
                      disabled={defaultCard < 0}
                    >
                      Select payment method
                    </button>
                    <p className="underline text-dark text-1xl text-center cursor-pointer mt-4" onClick={() => setActiveIndex(activeIndex - 1)}>Back</p>
                  </div>
                </div>
              </div>
            )}
            {activeIndex === 2 && (
              <div className="h-[605px] max-sm:w-[410px] max-sm:rounded">
                <div className="flex items-center justify-between mb-2 py-4 px-8">
                  <div className="flex items-center ">
                    <h1 className="text-2xl font-bold">
                      Payment methods
                    </h1>
                  </div>
                  <div
                    className="max-sm:hidden close cursor-pointer"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    <XMarkIcon width={24} height={24} />
                  </div>
                </div>

                <div className="px-8 py-4 flex flex-col justify-between">
                  <form action="" onSubmit={handleSubmit} className="text-grey20">
                    <div className="flex flex-wrap mb-6">
                      <div className="x-3 my-2 md:mb-0 w-full">
                        <label
                          className="capitalize tracking-wide text-md"
                          id="grid-first-name"
                        >
                          Name on Card
                        </label>
                        <input
                          className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                          id="grid-first-name"
                          type="text"
                          name="nameOnCard"
                          value={formData.nameOnCard}
                          onChange={handleOnChange}
                          placeholder="Name on Card"
                          required
                        />
                      </div>

                      <div className="x-3 my-2 md:mb-0 w-full">
                        <label
                          className="capitalize tracking-wide text-md"
                          id="grid-first-name"
                        >
                          Card Number
                        </label>
                        <input
                          className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                          id="grid-first-name"
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleOnChange}
                          placeholder="Card Number"
                          required
                        />
                      </div>

                      <div className="w-full flex items-center justify-between">
                        <div className="x-3 my-2 md:mb-0 w-6/12 pr-3">
                          <label
                            className="capitalize tracking-wide text-md"
                            id="grid-first-name"
                          >
                            Expiry date
                          </label>
                          <input
                            className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                            id="grid-first-name"
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleOnChange}
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div className="x-3 my-2 md:mb-0 w-6/12 pl-3">
                          <label
                            className="capitalize tracking-wide text-md"
                            id="grid-first-name"
                          >
                            CVV
                          </label>
                          <input
                            className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                            id="grid-first-name"
                            type="text"
                            name="CVV"
                            value={formData.CVV}
                            onChange={handleOnChange}
                            placeholder="CVV"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-5">
                      <button
                        className={`relative  text-white w-full h-[48px] font-bold py-2 px-4 rounded bg-green`}
                      >
                        Save Card
                      </button>
                      <p className="underline text-dark text-1xl text-center cursor-pointer mt-4" onClick={() => setActiveIndex(activeIndex - 1)}>Back</p>
                    </div>
                  </form>
                  
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
