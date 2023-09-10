import Image from "next/image";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Modal from "./markAsComplete/modal";

const NotificationsTab: React.FC<{ data: any[]; selectedOption: any }> = ({
  data,
  selectedOption,
}) => {
  const [modalPop, setModalPopUp] = useState(false);
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return (
    <div className="my-4">
      {data
        .filter(
          (x) => x.category.toLowerCase() === selectedOption.toLowerCase()
        )
        .map((x, i) => (
          <div className="card_content px-2 py-1 my-3 mb-5 shadow" key={i}>
            <div className="">
              <div className="title flex items-start justify-between border-dashed border-b border-grey80">
                <div className="flex items-center mb-2 md:mb-2 ">
                  {x.category === "booking" && (
                    <h4 className="font-bold text-[16px]">
                      Booking:
                      <span className="font-light ml-1">{x.date}</span>
                    </h4>
                  )}
                  {x.category === "payment" && (
                    <h4 className="font-bold text-[16px]">
                      Payment:
                      <span className="font-light ml-1">{x.date}</span>
                    </h4>
                  )}
                  {x.category === "promotion" && (
                    <h4 className="font-bold text-[16px]">
                      Promotions:
                      <span className="font-light ml-1">{x.date}</span>
                    </h4>
                  )}
                  {x.category === "message" && (
                    <h4 className="font-bold text-[16px]">
                      Message:
                      <span className="font-light ml-1">{x.date}</span>
                    </h4>
                  )}
                </div>

                <div className="">
                  {x.category === "booking" && <h1>3 mins ago</h1>}

                  {x.category === "payment" && <h1>3 mins ago</h1>}

                  {x.category === "promotion" && <h1>3 mins ago</h1>}

                  {x.category === "message" && <h1>3 mins ago</h1>}
                </div>
              </div>

              <div className="content py-3">
                <h5 className="font-light pb-3">
                  {x.category === "booking" && x.data}
                  {x.category === "payment" && x.data}
                  {x.category === "promotion" && x.data}
                  {x.category === "message" && x.data}
                </h5>

                {x?.status === "completed" && (
                  <button
                    className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4"
                    onClick={() => setModalPopUp(!modalPop)}
                  >
                    Mark Job as Completed
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

      {modalPop && (
        <div className="">
          <Modal setModalPopUp={setModalPopUp} modalPop={modalPop} />
        </div>
      )}
    </div>
  );
};

export default NotificationsTab;
