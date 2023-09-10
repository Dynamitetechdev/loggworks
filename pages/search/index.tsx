import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import Header from "../../components/general/nav/header";
import SideBar from "../../components/general/sideBar";
import NavHead from "../../components/postJobComponents/navHead";
import { useRouter } from "next/router";
import Promotions from "../../components/searchComponents/promotion";
import DealsOfTheDay from "../../components/searchComponents/dealsOfDay";
import OthersResults from "../../components/searchComponents/others";
import { useEffect, useState } from "react";
const Search = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  const filterOptions = [
    {
      name: "star rating",
      options: [5, 4, 3, 2, 1],
    },
    {
      name: "distance",
      options: [10, 20, 60, 80, 100],
    },
    {
      name: "tradesmen",
      options: [
        "Electricians",
        "Plumbers",
        "Handyman",
        "Painter",
        "Builder",
        "Roofer",
        "Solar Interior designers",
        "Construction",
        "Plasterers",
      ],
    },
  ];
  const [sortOption, setSortOption] = useState("relevance");
  const [optionCategory, setOptionCategory] = useState(0);
  const [optionIndex, setOptionIndex] = useState<any>(0);
  const [openSortBox, setOpenSortBox] = useState(false);

  const [openFilter, setOpenFilter] = useState(false);
  const [openOptionCategory, setOpenOptionCategory] = useState(
    Array(filterOptions.length).fill(true)
  );
  const handleSelected = (option: string, optionIndex: number) => {
    console.log(option);
    setSortOption(option);

    setOptionIndex(optionIndex);
  };

  const handleFiltersSelected = (
    categoryIndex: number,
    optionIndex: number
  ) => {
    if (categoryIndex >= 0) {
      setOpenOptionCategory((prevOpen) =>
        prevOpen.map((open, i) => (i === categoryIndex ? !open : open))
      );
    }
  };

  const options = ["relevance", "distance", "most Reviewed", "ratings"];

  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <Header />

        <div className="content_body max-sm:block md:grid md:grid-cols-12 md:pt-14 ">
          <div className="main col-span-9 bg-white relative md:mb-16 md:px-10 px-3">
            <div className="mobile_filter md:hidden flex items-center justify-between text-[16px]">
              <div
                className="flex items-center "
                onClick={() => {
                  setOpenFilter(!openFilter), setOpenSortBox(false);
                }}
              >
                <AdjustmentsHorizontalIcon width={20} height={20} />
                <p className="ml-1">Filter</p>
              </div>

              <div
                className="border border-grey rounded-md px-4 py-1 flex items-center"
                onClick={() => {
                  setOpenSortBox(!openSortBox), setOpenFilter(false);
                }}
              >
                <p>Sort</p>
                <ChevronDownIcon width={20} height={20} />
              </div>
            </div>

            <div className="mobile_options md:hidden">
              {openFilter && (
                <div className="">
                  <div className="absolute bg-white top-4 left-0 w-full z-50 all_promotions overflow-y-scroll h-[calc(90vh-4rem)] px-4 mt-7">
                    {filterOptions.map((category, categoryIndex) => (
                      <div className="rating" key={`sorting-${categoryIndex}`}>
                        <div
                          className="head flex items-center justify-between cursor-pointer"
                          onClick={() => {
                            handleFiltersSelected(categoryIndex, -1);
                          }}
                        >
                          <h1 className="font-bold text-[16px] capitalize mt-4">
                            {category.name}
                          </h1>
                          <ChevronDownIcon width={24} height={24} />
                        </div>
                        {openOptionCategory[categoryIndex] && (
                          <div className="sortOptions">
                            <div className="option my-3">
                              <ul>
                                {category.options.map((x: any, i: number) => (
                                  <li
                                    className="flex items-center mb-3 capitalize"
                                    key={i}
                                    onClick={() => {
                                      // handleSelected(x);
                                      setOptionIndex(i);
                                    }}
                                  >
                                    <label className="w-[24px] relative h-[24px] border border-grey bg-[#DFDFDF] rounded flex items-center justify-center">
                                      <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        className="form-checkbox-square w-[24px] h-[24px] rounded"
                                      />
                                    </label>
                                    <p className="ml-3 mr-1 text-[18px]">{x}</p>
                                    {category.name === "distance" && (
                                      <p>miles</p>
                                    )}
                                    {category.name === "star rating" && (
                                      <>
                                        <p className="mr-2">Star</p>

                                        <div className="flex items-center">
                                          {Array(5)
                                            .fill("")
                                            .reverse()
                                            .map((x, i) => (
                                              <div
                                                className="text-green  mr-1"
                                                key={i}
                                              >
                                                <StarIcon
                                                  width={16}
                                                  height={16}
                                                />
                                              </div>
                                            ))}
                                        </div>
                                      </>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {openSortBox && (
                <div className="sortOptions">
                  <div className="option ml-5 mt-4">
                    <ul>
                      {options.map((x: any, i: number) => (
                        <li
                          className="flex items-center mb-3 capitalize"
                          key={i}
                          onClick={() => {
                            handleSelected(x, i);
                            setOptionIndex(i);
                          }}
                        >
                          <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="form-checkbox rounded-full "
                              checked={optionIndex === i}
                            />
                          </label>
                          <p className="mx-3 text-[18px]">{x}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="nav_head flex items-center md:py-3 py-3  border-b  border-grey80">
              <div className="flex items-center w-full md:justify-between md:justify-center">
                <h1 className="font-bold capitalize text-[17px] max-md:text-left md:text-[20px] mt-2">
                  Electricians near Coventry
                </h1>
              </div>
            </div>
            <div className="">
              <OthersResults />
              <Promotions />

              <DealsOfTheDay />

              <OthersResults />

              <Promotions />

              <OthersResults />
            </div>
            <div className="flex justify-center mt-16">
              <button className="mx-auto text-green font-bold py-2 px-8 border-2 border-green rounded mb-4">
                Load More
              </button>
            </div>
          </div>

          <div className="max-sm:hidden bg-white md:z-20 py-2 px-3 md:col-span-3 relative z-50">
            <div className="md:fixed w-[292px] py-3">
              <div
                className="head flex items-center justify-between rounded  py-3 px-5 border border-grey80 text-[18px] cursor-pointer"
                onClick={() => setOpenSortBox(!openSortBox)}
              >
                <h1 className="font-bold">Sort By</h1>

                <h1 className="capitalize">{sortOption}</h1>
                <ChevronDownIcon width={24} height={24} />
              </div>

              {openSortBox && (
                <div className="sortOptions">
                  <div className="option ml-5 mt-4">
                    <ul>
                      {options.map((x: any, i: number) => (
                        <li
                          className="flex items-center mb-3 capitalize"
                          key={i}
                          onClick={() => {
                            handleSelected(x, i);
                            setOptionIndex(i);
                          }}
                        >
                          <label className="w-[24px] h-[24px] border border-green rounded-full flex items-center justify-center">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="form-checkbox rounded-full "
                              checked={optionIndex === i}
                            />
                          </label>
                          <p className="mx-3 text-[18px]">{x}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <h1 className="text-[20px] mt-3">Filters</h1>
              <div className="all_promotions md:overflow-y-scroll md:h-[calc(85vh-4rem)] max-md:flex mt-7">
                {filterOptions.map((category, categoryIndex) => (
                  <div className="rating" key={`sorting-${categoryIndex}`}>
                    <div
                      className="head flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        handleFiltersSelected(categoryIndex, -1);
                      }}
                    >
                      <h1 className="font-bold text-[16px] capitalize py-2">
                        {category.name}
                      </h1>
                      <ChevronDownIcon width={24} height={24} />
                    </div>
                    {openOptionCategory[categoryIndex] && (
                      <div className="sortOptions">
                        <div className="option my-3">
                          <ul>
                            {category.options.map((x: any, i: number) => (
                              <li
                                className="flex items-center text-[18px] mb-3 capitalize"
                                key={i}
                                onClick={() => {
                                  // handleSelected(x);
                                  setOptionIndex(i);
                                }}
                              >
                                <label className="w-[24px] relative h-[24px] border border-grey bg-[#DFDFDF] rounded flex items-center justify-center">
                                  <input
                                    type="checkbox"
                                    name=""
                                    id=""
                                    className="form-checkbox-square w-[24px] h-[24px] rounded"
                                  />
                                </label>
                                <p className="ml-3 mr-1 text-[18px]">{x}</p>
                                {category.name === "distance" && <p>miles</p>}
                                {category.name === "star rating" && (
                                  <>
                                    <p className="mr-2">Star</p>

                                    <div className="flex items-center">
                                      {Array(5)
                                        .fill("")
                                        .reverse()
                                        .map((x, i) => (
                                          <div
                                            className="text-green  mr-1"
                                            key={i}
                                          >
                                            <StarIcon width={16} height={16} />
                                          </div>
                                        ))}
                                    </div>
                                  </>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="bg-[#F6F6F6] py-10 px-10 rounded-lg my-10">
                  <h1 className="text-[20px] font-semibold">
                    Do you have a professional service to offer?
                  </h1>
                  <p className="text-[16px] my-3 text-grey20">
                    Post a job with your price in mind, then get offers
                  </p>
                  <button className="bg-green text-white w-full h-[32px] text-[14px] font-bold px-4 rounded">
                    Become a Professional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
