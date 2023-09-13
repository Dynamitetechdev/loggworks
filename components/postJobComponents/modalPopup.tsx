import {
  ChevronDownIcon,
  ChevronUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { useEffect, useState } from "react";

const ModalPopup: React.FC<{
  modalPop: boolean;
  setModalPopUp: (e: any) => any;
  setOptionSelected: any;
  optionSelected: any;
}> = ({ modalPop, setModalPopUp, optionSelected, setOptionSelected }) => {
  const optionSampleData: any = [
    {
      id: "1",
      title: "Catering",
      options: ["Domestic appliance repair", "Appliance repair"],
    },
    {
      id: "2",
      title: "Childcare",
      options: ["Domestic appliance repair", "Appliance repair"],
    },
    {
      id: "3",
      title: "Entertainment",
      options: ["Domestic appliance repair", "Appliance repair"],
    },
    {
      id: "4",
      title: "Mobile Mechanic",
      options: ["Domestic appliance repair", "Appliance repair"],
    },
    {
      id: "4",
      title: "Mobile Mechanic",
      options: ["Domestic appliance repair", "Appliance repair"],
    },
    {
      id: "4",
      title: "Mobile Mechanic",
      options: ["Domestic appliance repair", "Appliance repair"],
    },
  ];

  const [optionToggle, setOptionToggle] = useState(
    Array(optionSampleData.length).fill(false)
  );

  const handleToggle = (e: any, index: number) => {
    const newToggle = [...optionToggle];
    newToggle[index] = !newToggle[index];
    setOptionToggle(newToggle);
  };

  const [selectedOption, setSelectedOption] = useState();

  const [searchValue, setSearchValue] = useState("");

  const handleSelected = (index: number, optionIndex: number) => {
    setOptionSelected(optionSampleData[optionIndex]);
  };

  console.log("Checking", optionSelected);

  return (
    <div className="relative">
      {" "}
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center justify-center">
        <div className=" w-full max-w-2xl  mx-auto ">
          <div className="bg-white  md:w-[511px] md:h-[630px] h-screen rounded-md shadow dark:bg-gray-700 md:px-8 px-6 py-6">
            <div className="flex items-start justify-between   dark:border-gray-600">
              <h3 className="text-xl font-semibold text-dark">Categories</h3>
              <div
                className="close cursor-pointer"
                onClick={() => setModalPopUp(false)}
              >
                <XMarkIcon width={24} height={24} />
              </div>
            </div>

            <form action="" className="">
              <div className="search">
                <input
                  type="text"
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-5 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                  placeholder="Search"
                  onChange={(e) => setSearchValue(e.target.value)}
                  value={searchValue}
                />
              </div>

              <div className="flex flex-col h-[660px] justify-between">
                <div className="max-h-[660px] overflow-y-scroll">
                  {optionSampleData
                    .filter((x: any) =>
                      x.title.toLowerCase().includes(searchValue)
                    )
                    .map((option: any, index: number) => (
                      <>
                        <div className=" py-4 cursor-pointer">
                          <div
                            className="option_head flex items-center justify-between"
                            onClick={(e) => handleToggle(e, index)}
                          >
                            <div className="flex items-center ">
                              <Image
                                src={"/assets/icons/catering.svg"}
                                width={24}
                                height={24}
                                alt=""
                                className="mr-3"
                              />
                              <p>{option.title}</p>
                            </div>
                            {optionToggle[index] ? (
                              <ChevronUpIcon width={24} height={24} />
                            ) : (
                              <ChevronDownIcon width={24} height={24} />
                            )}
                          </div>

                          {optionToggle[index] && (
                            <div className="option ml-5 mt-4">
                              <ul>
                                {option.options.map((x: any, i: number) => (
                                  <li
                                    className="flex items-center mb-3 "
                                    key={i}
                                    onClick={() => handleSelected(index, i)}
                                  >
                                    <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className="form-checkbox rounded-full "
                                      />
                                    </label>
                                    <p className="mx-3">{x}</p>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </>
                    ))}
                </div>

                <button
                  className="relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded "
                  onClick={() => setModalPopUp(!modalPop)}
                >
                  Select Category
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopup;
