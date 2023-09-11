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
  return (
    <div className="md:fixed bg-white md:z-10 top-12 categories border-b md:my-2 border-categoriesColor md:w-[1050px]">
      <div className="flex items-center max-md:overflow-x-auto md:hover:overflow-auto md:hover:overflow-x-scroll">
        <ul className="max-md:mb-4 flex items-center md:px-7 max-md:px-3 transition-transform duration-300">
          {categories.map((x, index) => (
            <li
              key={`nav--${index}`}
              className="flex items-center md:my-4 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3 "
            >
              <span className="w-[14px]">
                <HomeIcon />
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
