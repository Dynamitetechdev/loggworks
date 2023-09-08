import Image from "next/image";
import Categories from "./categories";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const LocationSearch = () => {
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
  const [openSearch, setOpenSearch] = useState(false);

  const handleOnChange = (e: any) => {
    if (e.target.value.length <= 0) {
      setOpenSearch(false);
    } else {
      setOpenSearch(true);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="location_search max-md:mt-5 max-md:mb-4 w-full md:w-[420px] h-[44px] text-[16px] border border-grey rounded">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative flex items-center w-full text-grey40">
          <div className="">
            <input
              type="text"
              id="default-search"
              className="w-full pl-2 text-sm text-gray-900 outline-none"
              placeholder="Electrician"
              onChange={(e) => handleOnChange(e)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="col-span-6 relative border-l border-grey flex items-center py-[3px]">
              <div className="mx-[6px]">
                <MapPinIcon width={20} height={24} />
              </div>
              <input
                type="text"
                id="default-search"
                className="w-full outline-none text-sm text-gray-900 md:pr-10"
                placeholder="Location or postcode"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <button
              type="submit"
              className=" py-[9px] text-grey40 px-4 items-center bg-none hover:bg-green hover:text-white"
            >
              <MagnifyingGlassIcon width={20} height={24} />
            </button>
          </div>
        </div>
      </form>

      {openSearch && (
        <div className="searchDetail">
          <div className="relative">
            <div className="fixed modal-container z-50 w-full bg-green top-[130px] md:top-[60px] left-0 h-full">
              <div className="w-full mx-auto text-grey40">
                <div className="relative bg-white w-full md:w-[420px] h-[369px] rounded py-4 shadow dark:bg-gray-700 px-4 md:px-4 md:left-[18%]">
                  <h1 className="text-[16px]">service categories</h1>
                  <div className="md:w-[380px] border-b border-categoriesColor mt-3 text-dark">
                    <div className="flex items-center overflow-x-hidden">
                      <ul className="max-md:mb-4 flex items-center md:px-3 transition-transform duration-300 overflow-x-scroll scrolling-touch text-[14px]">
                        {categories.map((x, index) => (
                          <li
                            key={`nav--${index}`}
                            className="flex items-center md:my-2 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3 "
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

                  <ul className="text-[16px] mt-7">
                    <li className="mb-2">suggestions</li>
                    <li>suggestions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
