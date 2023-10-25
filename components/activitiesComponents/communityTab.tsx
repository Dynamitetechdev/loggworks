import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Reviews from "./reviews";

const CommunityTabData: React.FC<{ data: any[] }> = ({ data }) => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  const [openReview, setOpenReview] = useState(false);
  const [openReviewIndex, setOpenReviewIndex] = useState<number | null>(null);
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
  return (
    <div className="my-4">
      {communitySampleData.map((x, i) => (
        <>
          <div className="card_content px-2 py-1 my-3 shadow" key={i}>
            <div className="title flex items-center justify-between mb-3">
              <div className="flex items-center">
                <Image
                  src={"/assets/bg/te.jpg"}
                  width={40}
                  height={40}
                  alt="brand_logo "
                  className="mr-2 max-sm:hidden rounded-full max-h-[40px] max-w-[40px]"
                />
                <div>
                  <h4 className="font-bold text-[18px]">{x.name}</h4>
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

              <p>3d</p>
            </div>
            <div className="max-w-[500px]">
              <h5>{x.content}</h5>
            </div>

              
            <div className="flex items-center justify-between my-2">
              <div className="flex items-center">
                <div className="flex items-center">
                  <Image
                    src={"/assets/icons/like.svg"}
                    width={24}
                    height={24}
                    alt="like"
                    className="mr-1"
                  />
                  <p className="text-[16px]">34</p>
                </div>
                <div
                  className="flex items-center ml-4 cursor-pointer"
                  onClick={() => {
                    setOpenReview(true),
                      setOpenReviewIndex(openReviewIndex === i ? null : i);
                  }}
                >
                  <Image
                    src={"/assets/icons/comment.svg"}
                    width={24}
                    height={24}
                    alt="comment"
                    className="mr-1"
                  />
                  <p className="text-[16px]">{x.reviews?.length}</p>
                </div>
              </div>
              <div className="right-3 top-3 cursor-pointer">
                <EllipsisVerticalIcon width={20} height={20} />
              </div>
            </div>
          </div>

          {openReview && openReviewIndex === i && (
            <Reviews setOpenReview={setOpenReview} reviewsData={x.reviews} />
          )}
        </>
      ))}
    </div>
  );
};

export default CommunityTabData;
