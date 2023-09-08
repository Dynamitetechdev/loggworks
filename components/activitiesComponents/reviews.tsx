import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";

const Reviews: React.FC<{ setOpenReview: any; reviewsData: any[] }> = ({
  setOpenReview,
  reviewsData,
}) => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  console.log("reviewsData", reviewsData.length);
  return (
    <div className="relative">
      <div className="fixed modal-container z-50 w-full  bg-green top-0 right-0 h-full flex items-center justify-end">
        <div className="">
          <div className="relative md:w-[598px] max-sm:pt-0 bg-sideBarColor h-screen shadow dark:bg-gray-700 ">
            <div className="w-full flex items-center justify-between bg-white py-4 px-8">
              <h1 className="font-bold text-[20px]">Reviews</h1>
              <div
                className="close cursor-pointer"
                onClick={() => setOpenReview(false)}
              >
                <XMarkIcon width={24} height={24} />
              </div>
            </div>

            <div className="px-8 h-[850px] overflow-y-scroll">
              {reviewsData &&
                reviewsData.length > 0 &&
                reviewsData.map((x, i) => (
                  <div className="card_content px-2 py-1 my-3" key={i}>
                    <div className="">
                      <div className="title flex items-start justify-between">
                        <div className="flex items-center mb-3">
                          <Image
                            src={"/assets/images/client_test.png"}
                            width={40}
                            height={40}
                            alt="brand_logo"
                            className="mr-2"
                          />
                          <div>
                            <h4 className="font-bold text-[18px]">
                              Avigdor Branca
                            </h4>
                            <p>09 Jun 2021 | 9:30 AM</p>
                            <div className="text-[14px]">
                              <div className="stars flex items-center">
                                {star.map((_: any, i: number) => (
                                  <Image
                                    key={i}
                                    src={"/assets/icons/filledStar.svg"}
                                    height={16}
                                    width={16}
                                    alt="icon"
                                    className=""
                                  />
                                ))}
                                <Image
                                  src={"/assets/icons/emptyStar.svg"}
                                  height={16}
                                  width={16}
                                  alt="icon"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5 className="font-light pb-3">
                        I am enjoying these “computer” speakers. They are sinced
                        with my phone. I had Bose speakers and bought these as a
                        replacement. It took me awhile to get the Bluetooth to
                        work with my phone.
                      </h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
