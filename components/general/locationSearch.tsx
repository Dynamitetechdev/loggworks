import Image from "next/image";
import Categories from "./categories";
import {
  HomeIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import CategoryData from "./categoryData";

const LocationSearch = () => {
  const { categories } = CategoryData();
  const [openSearch, setOpenSearch] = useState(false);
  const [isInput, setIsInput] = useState(false);

  const handleOnChange = (e: any) => {
    if (e.target.value.length <= 0) {
      setOpenSearch(false);
      setIsInput(false);
    } else {
      setIsInput(true);
      setOpenSearch(true);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const closeBackDrop = (e: any) => {
    if (e.target.classList.contains("closeBackdrop" || "")) {
      setOpenSearch(false);
      console.log(e.target);
    }
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className="location_search max-md:mt-5 max-md:mb-4 w-full md:w-[420px] h-[44px] text-[16px] border border-grey rounded max-sm:max-w-[100%] max-sm:min-w-[100%] max-md:w-[420px] max-md:mx-auto">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative flex items-center w-full text-grey40 ">
          <div className="">
            <input
              type="text"
              id="default-search"
              className="w-full pl-2 text-[16px] text-gray-900 outline-none"
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
                className="                               
                w-full outline-none text-gray-900 md:pr-10 text-[16px]"
                placeholder="Location or postcode"
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            <button
              type="submit"
              className={`py-[9px] text-grey40 px-4 items-center ${
                isInput && "bg-green text-white"
              }`}
            >
              <MagnifyingGlassIcon width={20} height={24} />
            </button>
          </div>
        </div>

        {openSearch && (
          <div className="searchDetail max-md:h-screen max-md:absolute w-full left-0 px-3">
            <div className="md:relative ">
              <div
                className={`md:fixed absolute md:bg-modalDrop z-50 w-full top-[1px] md:top-[60px] left-0 h-full closeBackdrop ${
                  !isSticky && "max-md:bg-modalDrop"
                }`}
                onClick={closeBackDrop}
              >
                <div
                  className="w-full mx-auto text-grey40 closeBackdrop"
                  onClick={closeBackDrop}
                >
                  <div className="modal-content relative bg-white md:w-[420px] h-[369px] rounded py-4 shadow dark:bg-gray-700 px-4 md:px-4 md:left-[18%]">
                    <h1 className="text-[16px]">service categories</h1>
                    <div className="md:w-[380px] border-b border-categoriesColor mt-3 text-dark">
                      <div className="flex items-center overflow-x-hidden">
                        <ul className="max-md:mb-4 flex items-center md:px-3 transition-transform duration-300 hover:overflow-x-auto text-[14px]">
                          {categories.map((x, index) => (
                            <li
                              key={`nav--${index}`}
                              className="flex items-center md:my-2 py-2 px-3 border border-categoriesColor rounded-full hover:text-white hover:bg-[#000000] cursor-pointer mr-3 "
                              onMouseEnter={() => onHoverEnter(index)}
                              onMouseLeave={() => onHoverLeave(index)}
                            >
                              <span className="w-[14px]">
                                {hover[index] ? (
                                  <Image
                                    src={`/assets/icons/category/${x.hoverImg}-white.svg`}
                                    width={14}
                                    height={14}
                                    alt=""
                                  />
                                ) : (
                                  <Image
                                    src={`/assets/icons/category/${x.image}.svg`}
                                    width={14}
                                    height={14}
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
      </form>
    </div>
  );
};

export default LocationSearch;
