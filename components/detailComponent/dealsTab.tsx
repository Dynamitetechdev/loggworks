import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import StarReview from "../general/starReview";

const DealsTab: React.FC<{ data: any[]; selectedOption: any }> = ({
  data,
  selectedOption,
}) => {
  const [modalPop, setModalPopUp] = useState(false);
  const [star, setStar] = useState<any[]>(Array(4).fill(""));

  console.log("Data", data);
  return (
    <div className="my-4 grid grid-cols-2 gap-5">
      {data.map((x, i) => (
        <div className="card min-md:w-[181px] bg-white my-2 relative" key={i}>
          <div className="w-full h-[118px] relative">
            <Image
              src={"/assets/bg/te.jpg"}
              layout="fill"
              alt=""
              className="w-full rounded-t-lg object-center object-cover "
              objectFit="cover"
              objectPosition="center"
            />
          </div>

          <div className="card_content py-3 px-2">
            <div className="title">
              <div className="flex items-center">
                <Image
                  src={"/assets/images/client_test.png"}
                  width={20}
                  height={20}
                  alt="brand_logo "
                  className="mr-2 max-sm:hidden"
                />
                <h4 className="font-bold text-[14px]">Elite Carpenters</h4>
              </div>

              <div className="flex items-center my-1 max-sm:text-[9px] text-[12px]">
                <StarReview />
                <p className="mx-1">5.0</p>
                <p>(300k)</p>
              </div>
              <p className="max-sm:text-[12px] text-[12px]">Job category</p>
              <div className="mb-1 max-sm:text-[12px] text-[12px]">
                <p>Get 20% off 5 weeks booking</p>
                <p className="text-timerColor font-bold">Deadline</p>
              </div>
              <button className="w-full py-[4px] text-green text-[12px] max-sm:text-[10px] font-bold py-2 px-4 border-2 border-green rounded rounded items-center ">
                Get quote
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealsTab;
