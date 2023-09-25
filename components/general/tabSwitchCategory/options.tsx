import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Option: React.FC<{
  setcancelJobModalPopUp: any;
  setreScheduleModalPopUp: any;
}> = ({ setcancelJobModalPopUp, setreScheduleModalPopUp }) => {
  const [clickOption, setClickOption] = useState(false);
  return (
    <div className="option relative">
      <div
        className="absolute right-3 cursor-pointer "
        onClick={() => setClickOption(!clickOption)}
      >
        <EllipsisVerticalIcon width={24} height={24} />
      </div>

      {clickOption && (
        <div className="options absolute w-[189px] right-3 top-8 shadow shadow-b-10 z-10">
          <ul className="bg-white shadow rounded-md">
            <li
              className="px-4 py-3 hover:text-[red] rounded-md cursor-pointer"
              onClick={() => {
                setClickOption(!clickOption), setreScheduleModalPopUp(true);
              }}
            >
              Reschedule Booking
            </li>
            <li
              className="px-4 py-3 hover:text-[red] rounded-md cursor-pointer"
              onClick={() => {
                setClickOption(!clickOption), setcancelJobModalPopUp(true);
              }}
            >
              Cancel Booking
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Option;
