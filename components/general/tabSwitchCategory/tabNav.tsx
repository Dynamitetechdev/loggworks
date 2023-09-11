import { useEffect } from "react";

const TabNav: React.FC<{
  options: any;
  activeTab: string;
  handleActive: any;
  setSelectedOptions?: any;
}> = ({ options, activeTab, handleActive, setSelectedOptions }) => {
  return (
    <div className="tab">
      <ul className="flex items-center text-center bg-lightWhite h-[52px] p-1 rounded cursor-pointer">
        {options.map((x: any, i: number) => (
          <li
            className={`w-1/2 rounded  py-2.5 capitalize ${
              activeTab === x && "bg-white text-green font-bold"
            } `}
            key={i}
            onClick={() => {
              handleActive(x);
              setSelectedOptions(
                x.toLowerCase() === "bookings"
                  ? "current"
                  : x.toLowerCase() === "review" && "reviews"
              );
            }}
          >
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabNav;
