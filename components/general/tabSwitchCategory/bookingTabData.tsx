import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const BookingTabData: React.FC<{ data: any[]; selectedOption: any }> = ({
  data,
  selectedOption,
}) => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return (
    <div className="my-4">
      {data
        .filter((x) => x.status.toLowerCase() === selectedOption.toLowerCase())
        .map((x, i) => (
          <div className="card_content px-2 py-1 my-3 shadow" key={i}>
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
                  <h4 className="font-bold text-[18px]">{x.title}</h4>
                  <div className="dateTime text-[14px]">
                    <span>26/06/2021</span> | <span>6:32AM</span>
                  </div>
                </div>
              </div>
            </div>
            <h5>
              Electrician required to fix a spoilt vaccum cleaner. Please treat
              as urgent.
            </h5>
            <div className="flex items-center w-11/12 md:w-7/12 justify-between min-md:text-[14px] my-3 font-light ">
              <div className="flex items-center">
                <CalendarIcon width={24} height={24} />
                <p className="ml-1">09/06/2021</p>
              </div>
              <div className="flex items-center">
                <ClockIcon width={24} height={24} />
                <p className="ml-1">9:00AM</p>
              </div>
              <div className=" flex items-center">
                <ClockIcon width={24} height={24} />
                <p className="ml-1">5 days</p>
              </div>
            </div>
            <div className=" flex items-center mb-3">
              <MapPinIcon width={24} height={24} />
              <p className="ml-1 font-light">
                8 High Street, Chase Terrace, WS7 1LP
              </p>
            </div>

            {selectedOption === "past" && x.completed && (
              <div className="flex items-center justify-between mb-3">
                <p className="bg-[#EDF9E6] text-[#2FA500] text-center text-[8px] p-1 rounded-lg uppercase">
                  completed
                </p>
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
            {selectedOption === "past" && !x.completed && (
              <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                Leave a Review
              </button>
            )}

            {selectedOption === "current" && (
              <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                Mark Job as Completed
              </button>
            )}
          </div>
        ))}
    </div>
  );
};

export default BookingTabData;
