import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import ModalPopup from "./modalPopup";
import Image from "next/image";

const PostJobForm: React.FC<{
  activeStep: number;
  setActiveStep: any;
}> = ({ activeStep, setActiveStep }) => {
  const [optionSelected, setOptionSelected] = useState<any>(null);

  const uploadItem = Array(4).fill("");
  console.log("dd", activeStep);
  const [formData, setFormData] = useState<any>({
    title: "",
    description: "",
    category: "",
  });
  const [modalPop, setModalPopUp] = useState(false);

  const handleOnChange = (event: any): void => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className="all-forms">
        {activeStep == 0 && (
          <form action="" onSubmit={handleSubmit} className="text-grey20">
            <div className="flex flex-wrap mb-6">
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                  id="grid-first-name"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
                />
              </div>
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  Provide a brief description of the job
                </label>
                <textarea
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[108px]"
                  id="grid-first-name"
                  placeholder=""
                />
              </div>
              <div
                className="x-3 my-2 md:mb-0 w-full"
                onClick={() => setModalPopUp(true)}
              >
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  Category
                </label>

                <div className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 flex items-center justify-between cursor-pointer">
                  <h1>
                    {optionSelected
                      ? `${optionSelected.title} (${optionSelected.options[0]})`
                      : " Choose a category"}
                  </h1>
                  <span>
                    <ChevronDownIcon width={24} height={24} />
                  </span>
                </div>
              </div>
            </div>

            <button
              className="bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Enter location & Date
            </button>
          </form>
        )}
        {/* {activeStep == 1 && (
          <form action="" onSubmit={handleSubmit} className="text-grey20">
            <div className="flex flex-wrap mb-6">
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  Address line 1
                </label>
                <input
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                  id="grid-first-name"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
                />
                <p className="text-[12px]">Street address, P.O. Box</p>
              </div>
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  Address line 2 (Optional)
                </label>
                <input
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                  id="grid-first-name"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
                />
                <p className="text-[12px]">
                  Apartment, suite, unit, building, floor.
                </p>
              </div>
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  City
                </label>
                <input
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                  id="grid-first-name"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
                />
              </div>

              <div className="w-full flex items-center justify-between">
                <div className="x-3 my-2 md:mb-0 w-6/12 pr-3">
                  <label
                    className="capitalize tracking-wide text-md"
                    id="grid-first-name"
                  >
                    State/Province/Region
                  </label>
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="x-3 my-2 md:mb-0 w-6/12 pl-3">
                  <label
                    className="capitalize tracking-wide text-md"
                    id="grid-first-name"
                  >
                    Zip/Postcode
                  </label>
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
            </div>

            <button
              className="bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Enter a budget
            </button>
          </form>
        )} */}
        {activeStep == 1 && (
          <form action="" onSubmit={handleSubmit} className="text-grey20">
            <div className="flex flex-wrap mb-6">
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  Where do you need the job done?
                </label>
                <input
                  className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                  id="grid-first-name"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleOnChange}
                />
                <p className="text-[12px]">
                  Street address, Postcode, P.O. Box
                </p>
              </div>
            </div>

            <button
              className="bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Enter a budget
            </button>
          </form>
        )}
        {activeStep == 2 && (
          <form action="" onSubmit={handleSubmit} className="text-grey20">
            <div className="flex flex-wrap mb-6">
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  From
                </label>
                <div className="relative">
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleOnChange}
                  />

                  <div className="absolute right-2 top-[20px]">
                    <Image
                      src={"/assets/icons/euro.svg"}
                      width={24}
                      height={24}
                      alt="euro"
                    />
                  </div>
                </div>
              </div>
              <div className="x-3 my-2 md:mb-0 w-full">
                <label
                  className="capitalize tracking-wide text-md"
                  id="grid-first-name"
                >
                  To
                </label>
                <div className="relative">
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="number"
                    name="title"
                    value={formData.title}
                    onChange={handleOnChange}
                  />

                  <div className="absolute right-2 top-[20px]">
                    <Image
                      src={"/assets/icons/euro.svg"}
                      width={24}
                      height={24}
                      alt="euro"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              className="bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep + 1)}
            >
              Upload Images
            </button>
          </form>
        )}
        {activeStep == 3 && (
          <form action="" onSubmit={handleSubmit} className="text-grey20">
            <h1 className="capitalize text-md font-semibold">
              Upload an image (Optional)
            </h1>
            <div className="max-sm:overflow-x-scroll max-sm:scrolling-touch max-sm:overflow-x-hidden md:hidden ">
              <div className="flex justify-between my-6  max-sm:w-[130%]">
                {uploadItem.map((_, i) => (
                  <div
                    key={i}
                    className="border border-dashed border-[#CCCCCC] rounded w-[101px] h-[108px] my-2 focus:outline-none bg-grey80  md:mb-0 relative "
                  >
                    <label className="text-gray-700  " id="grid-first-name">
                      <div className="absolute top-[37px] left-[37px]">
                        <PlusIcon width={24} height={24} />
                      </div>
                      <input
                        id="grid-first-name"
                        type="file"
                        name="title"
                        hidden
                      />

                      <div className="absolute w-[24px] h-[24px] rounded-full bg-[#7E57CF] flex justify-center items-center text-white -bottom-2 -right-3">
                        <PlusIcon width={16} height={16} />
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <p className="mb-4">
              Add supporting images to best showcase your job request
            </p>
            <button
              className="bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded"
              onClick={() => setActiveStep(activeStep)}
            >
              Post Job
            </button>
          </form>
        )}
      </div>

      {modalPop && (
        <ModalPopup
          modalPop={modalPop}
          setModalPopUp={setModalPopUp}
          optionSelected={optionSelected}
          setOptionSelected={setOptionSelected}
        />
      )}
    </>
  );
};

export default PostJobForm;
