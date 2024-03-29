import { PlusIcon, StarIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const Modal: React.FC<{
  setModalPopUp: any;
  modalPop: boolean;
}> = ({ setModalPopUp, modalPop }) => {
  const [uploadedImages, setUploadedImages] = useState<any>(
    Array(5).fill({ imageUrl: "" })
  );

  const handleImageChange = (e: any, index: number): void => {
    const files = e.target.files;
    const imageUrl = URL.createObjectURL(files[0]);

    setUploadedImages((prev: any) => {
      const prevImages = [...prev];
      prevImages[index] = { imageUrl };
      return prevImages;
    });
    console.log(imageUrl);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [reviewAlert, setReviewAlert] = useState({
    noReviewText: true,
    rateValue: false
  })
  const count = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];
  const [select, setSelect] = useState(-1);

  const [rate, setRate] = useState(Array(5).fill(false));
  const [rateIndex, setRateIndex] = useState(-1);
  const handleRate = (index: number) => {
    setRateIndex(index);
    const newArr = rate.map((_, i) => i <= index);
    setRate(newArr);
  };

  const checkReviewText = (e: any) => {
    const isReviewTextValid = e.target.value.length > 3;
    setReviewAlert((prev: any) => ({
      ...prev,
      noReviewText: !isReviewTextValid
    }));
  }
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full bg-green md:p-4 top-0 left-0 h-full flex items-center max-sm:items-end justify-center">
        <div className=" w-full mx-auto flex items-center justify-center">
          <div className="relative bg-grey80 md:w-[461px] rounded-lg shadow dark:bg-gray-700 ">
            {activeIndex === 0 && (
              <form className="container">
                <div className="bg-white flex items-center justify-between mb-2 py-4 px-8">
                  <div className="flex items-center  ">
                    <Image
                      src={`/assets/modal/starMark.svg`}
                      width={32}
                      height={32}
                      alt=""
                      className=""
                    />
                    <h1 className="text-[20px] font-semibold">
                      Job marked complete
                    </h1>
                  </div>
                  <div
                    className="close cursor-pointer"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    <XMarkIcon width={24} height={24} />
                  </div>
                </div>
                <div className="px-8 py-4 bg-white flex flex-col justify-between">
                  <div className="">
                    <h1 className="md:text-[16px] text-[20px] font-semibold">
                      Leave a Review
                    </h1>
                    <p className="text-[16px]">
                      Reviews help service professionals serve you better
                    </p>
                  </div>
                  <div className="rate flex items-center py-3">
                    {rate.map((x, i) => (
                      <div className="mr-2" key={i}>
                        {x ? (
                          <StarIcon
                            width={24}
                            height={24}
                            onClick={() => handleRate(i)}
                            fill="green"
                            className="text-[green]"
                          />
                        ) : (
                          <StarIcon
                            width={24}
                            height={24}
                            onClick={() => handleRate(i)}
                          />
                        )}
                      </div>
                    ))}
                    
                    <h2 className="mx-4">{rateIndex + 1}.0</h2>
                  </div>

                  <div className="upload">
                    <div className="flex justify-between my-6 max-sm:w-[130%]">
                      {uploadedImages.map((x: any, i: number) => (
                        <div className="max-sm:w-[54px] h-[54px]" key={i}>
                          {x.imageUrl ? (
                            <div className="rounded w-[57px] h-[68px] my-2 focus:outline-none bg-grey80  md:mb-0 relative ">
                              <div className="" id="grid-first-name">
                                <Image
                                  src={x.imageUrl}
                                  width={54}
                                  height={67}
                                  alt=""
                                  objectFit="cover"
                                  objectPosition="center"
                                  className="object-center object-cover min-h-[68px] max-h-[68px]"
                                />
                                <div className="absolute w-[24px] h-[24px] rounded-full bg-[#FF5F40] flex justify-center items-center text-white -bottom-2 -right-3">
                                  <XMarkIcon width={16} height={16} />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="border border-dashed border-[#CCCCCC] rounded w-[57px] h-[68px] my-2 focus:outline-none bg-grey80  md:mb-0 relative ">
                              <label
                                className="text-gray-700  "
                                id="grid-first-name"
                              >
                                <div className="absolute top-[20px] left-[17px]">
                                  <PlusIcon width={24} height={24} />
                                </div>
                                <input
                                  id="grid-first-name"
                                  type="file"
                                  name="title"
                                  onChange={(e) => handleImageChange(e, i)}
                                  hidden
                                />

                                <div className="absolute w-[24px] h-[24px] rounded-full bg-[#7E57CF] flex justify-center items-center text-white -bottom-2 -right-3">
                                  <PlusIcon width={16} height={16} />
                                </div>
                              </label>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="writeReview">
                    <div className="x-3 my-2 md:mb-0 w-full">
                      <label
                        className="capitalize tracking-wide text-md"
                        id="grid-first-name"
                      >
                        Write a review
                      </label>
                      {
                        
                        reviewAlert.noReviewText && <p className="text-sm mt-2">The Review text should be up to 3 character</p> 
                      }
                      <textarea
                        className="appearance-none w-full text-gray-700 border border-red-500 rounded p-4 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80 h-[108px]"
                        id="grid-first-name text-[16px]"
                        required={true}
                        placeholder=""
                        onChange={e => checkReviewText(e)}
                      />
                    </div>
                  </div>
                  <button
                    className={`relative  text-white w-full h-[48px] font-bold py-2 px-4 rounded ${reviewAlert.noReviewText ? "bg-grey" : "bg-green"}`}
                    disabled ={reviewAlert.noReviewText}
                    onClick={() => setActiveIndex(activeIndex + 1)}
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
            {activeIndex === 1 && (
              <div className="h-[605px] max-sm:w-[410px] max-sm:rounded">
                <div className="bg-white flex items-center justify-between mb-2 py-4 px-8">
                  <div className="flex items-center ">
                    <Image
                      src={`/assets/modal/starMark.svg`}
                      width={32}
                      height={32}
                      alt=""
                      className=""
                    />
                    <h1 className="text-[20px] font-bold">
                      Job marked complete
                    </h1>
                  </div>
                  <div
                    className="max-sm:hidden close cursor-pointer"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    <XMarkIcon width={24} height={24} />
                  </div>
                </div>

                <div className="px-8 py-4 bg-white flex flex-col justify-between">
                  <div className="flex flex-col items-center">
                    <h1 className="font-bold">
                      How likely would you recommend me?
                    </h1>
                    <div className="flex my-4 cursor-pointer">
                      <ul className="flex flex-col text-center w-[36px] border rounded">
                        {count.map((x, i) => (
                          <li
                            className={`py-[7px] text-[14px] border-b hover:bg-green hover:text-white ${
                              select === i && "bg-green text-white"
                            }`}
                            key={i}
                            onClick={() => setSelect(i)}
                          >
                            {x}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col justify-between py-2 ml-3 font-bold">
                        <p>Extremely likely</p>
                        <p>Least likely</p>
                      </div>
                    </div>
                  </div>
                  <button
                    className={`relative  text-white w-full h-[48px] font-bold py-2 px-4 rounded ${select < 0 ? "bg-grey" : "bg-green"}`}
                    onClick={() => setActiveIndex(activeIndex + 1)}
                    disabled={select < 0}
                  >
                    Submit
                  </button>
                  
                  
                </div>
              </div>
            )}
            {activeIndex === 2 && (
              <div className="container">
                <div className="bg-white w-[410px] md:w-[511px] h-[404px] md:rounded-md rounded-lg shadow dark:bg-gray-700 md:px-8 px-6 py-6 flex flex-col items-center md:justify-between">
                  <div
                    className="max-sm:hidden close cursor-pointer absolute right-6 top-5"
                    onClick={() => setModalPopUp(false)}
                  >
                    <XMarkIcon width={24} height={24} />
                  </div>
                  <Image
                    src={`/assets/modal/starMark.svg`}
                    width={80}
                    height={80}
                    alt=""
                    className="md:-mb-20 mt-10"
                  />
                  <h1 className="font-semibold text-2xl max-sm:my-5 max-sm:mb-16">
                    Review submitted!
                  </h1>

                  <button
                    className="relative bg-green text-white w-full h-[48px] font-bold py-2 px-4 rounded "
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    Close
                  </button>
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
