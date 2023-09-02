import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Option = () => {
  const [clickOption, setClickOption] = useState(false);
  return (
    <div className="option relative">
      <div
        className="w-[32px] h-[32px] bg-grey80 absolute right-3 top-3 cursor-pointer rounded-full flex items-center justify-center"
        onClick={() => setClickOption(!clickOption)}
      >
        <EllipsisVerticalIcon width={20} height={20} />
      </div>

      {clickOption && (
        <div className="options absolute w-[189px] right-3 top-12 shadow shadow-b-10 z-10">
          <ul className="bg-grey80 rounded-md">
            <li
              className="px-4 py-3 hover:bg-white hover:text-[red] rounded-md cursor-pointer"
              onClick={() => setClickOption(!clickOption)}
            >
              Edit Job Post
            </li>
            <li
              className="px-4 py-3 hover:bg-white hover:text-[red] rounded-md cursor-pointer"
              onClick={() => setClickOption(!clickOption)}
            >
              Delete Job Post
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Option;
