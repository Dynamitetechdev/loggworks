import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

const ReviewTabData: React.FC<{ data: any[]; selectedOption: any }> = ({
  data,
  selectedOption,
}) => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return (
    <div className="my-4 max-w-[550px]">
      {data
        .filter(
          (x) => x.category.toLowerCase() === selectedOption.toLowerCase()
        )
        .map((x, i) => (
          <div
            className="card_content px-2 py-1 my-3 border-b border-grey80"
            key={i}
          >
            <div className="title flex items-start justify-between">
              <div className="flex items-center mb-2 md:mb-2">
                <Image
                  src={"/assets/bg/te.jpg"}
                  width={40}
                  height={40}
                  alt="brand_logo "
                  className="mr-2 max-sm:hidden rounded-full max-h-[40px] max-w-[40px]"
                />
                <div>
                  {x.category === "reviews" && (
                    <h4 className="font-bold text-[18px]">{x.title}</h4>
                  )}
                  {x.category === "question & answers" && (
                    <h4 className="font-bold text-[18px]">{x.name}</h4>
                  )}
                  {x.category === "comments" && (
                    <h4 className="font-normal text-[18px]">
                      Replying
                      <span className="font-bold text-green ml-1">
                        {x.repliedTo}
                      </span>
                    </h4>
                  )}
                  {x.category === "reviews" && (
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
                  )}
                </div>
              </div>

              <div className="">
                {x.category === "reviews" && <h1>1d</h1>}
                {(x.category === "question & answers" ||
                  x.category === "comments") && <h1>3 mins ago</h1>}
              </div>
            </div>

            {x.category === "reviews" && (
              <div className="">
                <div className="grid grid-cols-9 gap-0 mb-2">
                  {Array(x.image)
                    .fill("")
                    .map((x, i) => (
                      <div className="others" key={i}>
                        <Image
                          src={"/assets/bg/te.jpg"}
                          width={48}
                          height={48}
                          alt=""
                          className="mr-2 max-sm:hidden rounded-md max-h-[48px] max-w-[48px]"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}

            <h5 className="font-light pb-3 max-sm:text-[16px]">
              {x.category === "reviews" && x.reviewText}
              {x.category === "question & answers" && x.question}
              {x.category === "comments" && x.reply}
            </h5>

            {x.category === "question & answers" && (
              <h5 className="p-2 border border-grey80 rounded my-2 max-sm:text-[16px]">
                {x.answer}
              </h5>
            )}
          </div>
        ))}
    </div>
  );
};

export default ReviewTabData;
