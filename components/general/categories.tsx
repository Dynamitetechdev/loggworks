import Image from "next/image";
import { DragControls, motion, useDragControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { HomeIcon } from "@heroicons/react/24/outline";
const Categories = () => {
  const categories = [
    {
      title: "Health, wellness & beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
    {
      title: "beauty",
      image: "home",
      activeImage: "home-green",
    },
  ];

  const slide: any = useRef();
  const [width, setWidth] = useState(0);
  const controls = useDragControls();
  useEffect(() => {
    setWidth(slide.current.scrollWidth - slide.current.offsetWidth);
    // console.log(slide.current);
  }, []);
  return (
    <div className="categories border-b my-2 border-categoriesColor w-full">
      <div className="flex items-center overflow-x-hidden" ref={slide}>
        <motion.ul
          className="flex items-center px-7 w-[auto] transition-transform duration-300"
          drag="x"
          dragControls={controls}
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          {categories.map((x, index) => (
            <li
              key={`nav--${index}`}
              className="flex items-center my-4 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3 "
            >
              <span className="w-[14px]">
                <HomeIcon />
              </span>
              <p className="capitalize text-[14px] ml-1 whitespace-nowrap">
                {x.title}
              </p>
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Categories;
