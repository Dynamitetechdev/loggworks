import Image from "next/image";
import { DragControls, motion, useDragControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { EyeIcon, HomeIcon } from "@heroicons/react/24/outline";
import CategoryData from "./categoryData";
const Categories = () => {
  const { categories } = CategoryData();
  const [hover, setHover] = useState(Array(categories.length).fill(false));

  const onHoverEnter = (index: number) => {
    const newArr = [...hover];
    newArr[index] = true;
    setHover(newArr);
  };

  const onHoverLeave = (index: number) => {
    const newArr = [...hover];
    newArr[index] = false;
    setHover(newArr);
  };

  return (
    <div className="md:fixed bg-white md:z-10 top-12 categories border-b md:my-2 border-categoriesColor md:w-8/12 cat-scroll md:pr-38">
      <div className="flex items-center max-md:overflow-x-auto md:hover:overflow-auto md:overflow-x-scroll">
        <ul className="max-md:mb-4 flex items-center md:px-7 max-md:px-3 transition-transform duration-300 mr-36">
          {categories.map((x, index) => (
            <li
              key={`nav--${index}`}
              className="flex items-center md:my-4 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3"
              onMouseEnter={() => onHoverEnter(index)}
              onMouseLeave={() => onHoverLeave(index)}
            >
              <span className="w-[24px]">
                {hover[index] ? (
                  <Image
                    src={`/assets/icons/category/${x.hoverImg}-white.svg`}
                    width={24}
                    height={24}
                    alt=""
                  />
                ) : (
                  <Image
                    src={`/assets/icons/category/${x.image}.svg`}
                    width={24}
                    height={24}
                    alt=""
                  />
                )}
              </span>
              <p className="capitalize text-[14px] ml-1 whitespace-nowrap">
                {x.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
