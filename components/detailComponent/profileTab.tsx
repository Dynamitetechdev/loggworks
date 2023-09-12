import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Reviews from "../activitiesComponents/reviews";

const ProfileTab = () => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  const [openReview, setOpenReview] = useState(false);
  const [openReviewIndex, setOpenReviewIndex] = useState<number | null>(null);
  const [comments, setComments] = useState(2);
  const communitySampleData = [
    {
      name: "Sheri Warner",
      content:
        "You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:",
      likes: "78",
      reviews: Array(20).fill(""),
    },
    {
      name: "Dynamite Warner",
      content:
        "You've heard this before — the rate of technological change is accelerating. It's unpredictable and unprecedented. As the World Economic Forum acknowledged in its Future of Jobs report, we’re entering a fourth industrial revolution:",
      likes: "78",
      reviews: Array(1).fill(""),
    },
  ];
  const categories = [
    {
      title: "Electrotechnical",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "Security and fire alarm",
      image: "home",
      activeImage: "home-green",
    },
  ];
  return (
    <div className="my-4 text-dark">
      <div className="map h-[142px] bg-green"></div>
      <div className="flex items-center justify-between text-[14px]">
        <div className="flex items-center ">
          <MapPinIcon width={24} height={24} />
          <p>12 Gibson Close, Waterbeach, CB25 9HY</p>
        </div>
        <p>8 miles</p>
      </div>

      <div className=" my-4">
        <h1 className="font-bold text-[18px] mb-3">Service Description</h1>
        <p className="text-[16px]">
          Dyson Electricals is a firm that performs specialized construction
          work related to the design, installation, and maintenance of
          electrical systems. ... Electricians may work for an electrical
          contractor, or directly for individuals or companies.
        </p>
      </div>

      <div className="mb-3">
        <h1 className="font-bold text-[18px] mb-1">Skill and Price Tags</h1>
        <div className="flex items-center ">
          <div className="flex items-center">
            <p className="px-3 py-1 my-2 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3">
              Electrotechnical
            </p>
            <p className="px-3 py-1 my-2 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer">
              £50/hr
            </p>
          </div>
          <div className="flex items-center">
            <p className="px-3 py-1 my-2 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3">
              Electrotechnical
            </p>
            <p className="px-3 py-1 my-2 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer">
              £50/hr
            </p>
          </div>
        </div>
      </div>

      <div className="review">
        <h1 className="font-bold text-[18px] mb-1">Reviews</h1>
        <div className="flex items-center">
          <div className="flex text-green">
            {Array(4)
              .fill("")
              .map((x, i) => (
                <StarIcon
                  width={20}
                  height={20}
                  key={i}
                  className="fill-green"
                />
              ))}{" "}
            <StarIcon width={20} height={20} className="" />
          </div>
          <p className="ml-3">
            <span className="font-bold text-green">4.6 </span>(56 Reviews)
          </p>
        </div>

        <div className="text-[14px]">
          <div className="flex my-2 items-center justify-between">
            <p>5 Stars</p>
            <div className="bar w-[453px] h-[10px] bg-grey80 relative">
              <div className="absolute w-[200px] h-[10px] bg-green"></div>
            </div>
            <p>(16)</p>
          </div>
          <div className="flex my-2 items-center justify-between">
            <p>4 Stars</p>
            <div className="bar w-[453px] h-[10px] bg-grey80 relative">
              <div className="absolute w-[200px] h-[10px] bg-green"></div>
            </div>
            <p>(16)</p>
          </div>
          <div className="flex my-2 items-center justify-between">
            <p>3 Stars</p>
            <div className="bar w-[453px] h-[10px] bg-grey80 relative">
              <div className="absolute w-[200px] h-[10px] bg-green"></div>
            </div>
            <p>(16)</p>
          </div>
          <div className="flex my-2 items-center justify-between">
            <p>2 Stars</p>
            <div className="bar w-[453px] h-[10px] bg-grey80 relative">
              <div className="absolute w-[200px] h-[10px] bg-green"></div>
            </div>
            <p>(16)</p>
          </div>
          <div className="flex my-2 items-center justify-between">
            <p>1 Stars</p>
            <div className="bar w-[453px] h-[10px] bg-grey80 relative">
              <div className="absolute w-[200px] h-[10px] bg-green"></div>
            </div>
            <p>(16)</p>
          </div>
        </div>
      </div>

      <div className="comments mb-8">
        {Array(comments)
          .fill("")
          .map((x, i) => (
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
                      <h4 className="font-bold text-[18px]">Avigdor Branca</h4>
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
                  I am enjoying these “computer” speakers. They are sinced with
                  my phone. I had Bose speakers and bought these as a
                  replacement. It took me awhile to get the Bluetooth to work
                  with my phone.
                </h5>
              </div>
            </div>
          ))}

        <h3
          className="text-green underline text-center cursor-pointer"
          onClick={() => setComments(comments + 4)}
        >
          See all
        </h3>
      </div>

      <div className="Verification">
        <h1 className="font-bold text-[20px] mb-3">Verification Status</h1>
        <div className="grid grid-cols-4 gap-10 px-4">
          <div className="license w-[86px]">
            <Image
              src={"/assets/verification/license.svg"}
              width={56}
              height={57}
              alt="brand_logo"
              className="mr-2"
            />
            <p className="text-[12px] mt-2">License and certification</p>
          </div>
          <div className="license w-[86px]">
            <Image
              src={"/assets/verification/network.svg"}
              width={56}
              height={57}
              alt="brand_logo"
              className="mr-2"
            />
            <p className="text-[12px] mt-2">Network</p>
          </div>
          <div className="license w-[86px]">
            <Image
              src={"/assets/verification/reference.svg"}
              width={56}
              height={57}
              alt="brand_logo"
              className="mr-2"
            />
            <p className="text-[12px] mt-2">References</p>
          </div>
          <div className="license w-[86px]">
            <Image
              src={"/assets/verification/id.svg"}
              width={56}
              height={57}
              alt="brand_logo"
              className="mr-2"
            />
            <p className="text-[12px] mt-2">License and certification</p>
          </div>
          <div className="license w-[86px]">
            <Image
              src={"/assets/verification/college.svg"}
              width={56}
              height={57}
              alt="brand_logo"
              className="mr-2"
            />
            <p className="text-[12px] mt-2">License and certification</p>
          </div>
          <div className="license w-[86px]">
            <Image
              src={"/assets/verification/office.svg"}
              width={56}
              height={57}
              alt="brand_logo"
              className="mr-2"
            />
            <p className="text-[12px] mt-2">License and certification</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
