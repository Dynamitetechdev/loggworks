import Image from "next/image";
import SideBar from "../../components/general/sideBar";
import LocationSearch from "../../components/general/locationSearch";
import { useRef } from "react";
import StarReview from "../../components/general/starReview";
import Categories from "../../components/general/categories";
import BannerCarousel from "../../components/general/bannerCarousel";

const HomePage = () => {
  return (
    <div className="">
      <SideBar />
      <div className="main ml-[280px]">
        <div className="header bg-white z-50 fixed w-10/12 h-[62px] flex justify-between border-b border-grey items-center px-6 ">
          <LocationSearch />
          <div className="admin flex justify-between items-center">
            <div className="post flex items-center bg-green p-2.5  text-white rounded-md mr-10">
              <Image
                src={"/assets/icons/nav_icons/plus.svg"}
                width={24}
                height={24}
                alt=""
                className="mr-2"
              />
              <p>Post a job</p>
            </div>
            <div className="bookmarks flex flex-col items-center mr-10">
              <Image
                src={"/assets/icons/nav_icons/bookmark.svg"}
                width={24}
                height={24}
                alt=""
              />
              <p className="text-14px">Bookmarks</p>
            </div>

            <div className="adminOption">
              <div className="admin_image">
                <Image
                  src={"/assets/images/client_test.png"}
                  width={40}
                  height={40}
                  alt=""
                />
              </div>
              <div className="admin_nav"></div>
            </div>
          </div>
        </div>

        <div className="content_body h-screen grid grid-cols-12 pt-14 ">
          <div className="main col-span-9 bg-white ">
            <Categories />

            <BannerCarousel />
            <div className="mainPage">
              <div className="deals grid grid-cols-8 px-5">
                <div className="card max-w-lg card mx-4 col-span-4 bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="wishlist absolute right-3 top-3 cursor-pointer">
                    <Image
                      src={"/assets/icons/wishlist.png"}
                      width={32}
                      height={32}
                      alt="object-fit"
                    />
                  </div>

                  <div className="">
                    <Image
                      src={"/assets/images/promotions/01.png"}
                      width={360}
                      height={140}
                      alt="object-fit"
                    />
                  </div>

                  <div className="card_content p-3">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={24}
                          height={24}
                          alt="brand_logo "
                          className="mr-2"
                        />
                        <h4 className="font-bold">Elite Carpenters</h4>
                      </div>
                      <div className="flex items-center my-1">
                        <StarReview />
                        <p className="mx-1">5.0</p>
                        <p>(300k)</p>
                      </div>
                    </div>

                    <div className="job_category">
                      <h1>Job category</h1>

                      <ul className="flex my-3">
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Power contractors
                        </li>
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Generator installation
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h5>Get 20% off 5 weeks booking</h5>{" "}
                      <h5 className="text-green">
                        Ends in: <span className="ml-2">04:34:40</span>{" "}
                      </h5>
                    </div>
                    <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                      Request Quote
                    </button>
                  </div>
                </div>
                <div className="card max-w-lg card mx-4 col-span-4 bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="wishlist absolute right-3 top-3 cursor-pointer">
                    <Image
                      src={"/assets/icons/wishlist.png"}
                      width={32}
                      height={32}
                      alt="object-fit"
                    />
                  </div>

                  <div className="">
                    <Image
                      src={"/assets/images/promotions/01.png"}
                      width={360}
                      height={140}
                      alt="object-fit"
                    />
                  </div>

                  <div className="card_content p-3">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={24}
                          height={24}
                          alt="brand_logo "
                          className="mr-2"
                        />
                        <h4 className="font-bold">Elite Carpenters</h4>
                      </div>
                      <div className="flex items-center my-1">
                        <StarReview />
                        <p className="mx-1">5.0</p>
                        <p>(300k)</p>
                      </div>
                    </div>

                    <div className="job_category">
                      <h1>Job category</h1>

                      <ul className="flex my-3">
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Power contractors
                        </li>
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Generator installation
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h5>Get 20% off 5 weeks booking</h5>{" "}
                      <h5 className="text-green">
                        Ends in: <span className="ml-2">04:34:40</span>{" "}
                      </h5>
                    </div>
                    <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                      Request Quote
                    </button>
                  </div>
                </div>
                <div className="card max-w-lg card mx-4 col-span-4 bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="wishlist absolute right-3 top-3 cursor-pointer">
                    <Image
                      src={"/assets/icons/wishlist.png"}
                      width={32}
                      height={32}
                      alt="object-fit"
                    />
                  </div>

                  <div className="">
                    <Image
                      src={"/assets/images/promotions/01.png"}
                      width={360}
                      height={140}
                      alt="object-fit"
                    />
                  </div>

                  <div className="card_content p-3">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={24}
                          height={24}
                          alt="brand_logo "
                          className="mr-2"
                        />
                        <h4 className="font-bold">Elite Carpenters</h4>
                      </div>
                      <div className="flex items-center my-1">
                        <StarReview />
                        <p className="mx-1">5.0</p>
                        <p>(300k)</p>
                      </div>
                    </div>

                    <div className="job_category">
                      <h1>Job category</h1>

                      <ul className="flex my-3">
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Power contractors
                        </li>
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Generator installation
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h5>Get 20% off 5 weeks booking</h5>{" "}
                      <h5 className="text-green">
                        Ends in: <span className="ml-2">04:34:40</span>{" "}
                      </h5>
                    </div>
                    <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                      Request Quote
                    </button>
                  </div>
                </div>
                <div className="card max-w-lg card mx-4 col-span-4 bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="wishlist absolute right-3 top-3 cursor-pointer">
                    <Image
                      src={"/assets/icons/wishlist.png"}
                      width={32}
                      height={32}
                      alt="object-fit"
                    />
                  </div>

                  <div className="">
                    <Image
                      src={"/assets/images/promotions/01.png"}
                      width={360}
                      height={140}
                      alt="object-fit"
                    />
                  </div>

                  <div className="card_content p-3">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={24}
                          height={24}
                          alt="brand_logo "
                          className="mr-2"
                        />
                        <h4 className="font-bold">Elite Carpenters</h4>
                      </div>
                      <div className="flex items-center my-1">
                        <StarReview />
                        <p className="mx-1">5.0</p>
                        <p>(300k)</p>
                      </div>
                    </div>

                    <div className="job_category">
                      <h1>Job category</h1>

                      <ul className="flex my-3">
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Power contractors
                        </li>
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Generator installation
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h5>Get 20% off 5 weeks booking</h5>{" "}
                      <h5 className="text-green">
                        Ends in: <span className="ml-2">04:34:40</span>{" "}
                      </h5>
                    </div>
                    <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                      Request Quote
                    </button>
                  </div>
                </div>
                <div className="card max-w-lg card mx-4 col-span-4 bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="wishlist absolute right-3 top-3 cursor-pointer">
                    <Image
                      src={"/assets/icons/wishlist.png"}
                      width={32}
                      height={32}
                      alt="object-fit"
                    />
                  </div>

                  <div className="">
                    <Image
                      src={"/assets/images/promotions/01.png"}
                      width={360}
                      height={140}
                      alt="object-fit"
                    />
                  </div>

                  <div className="card_content p-3">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={24}
                          height={24}
                          alt="brand_logo "
                          className="mr-2"
                        />
                        <h4 className="font-bold">Elite Carpenters</h4>
                      </div>
                      <div className="flex items-center my-1">
                        <StarReview />
                        <p className="mx-1">5.0</p>
                        <p>(300k)</p>
                      </div>
                    </div>

                    <div className="job_category">
                      <h1>Job category</h1>

                      <ul className="flex my-3">
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Power contractors
                        </li>
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Generator installation
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h5>Get 20% off 5 weeks booking</h5>{" "}
                      <h5 className="text-green">
                        Ends in: <span className="ml-2">04:34:40</span>{" "}
                      </h5>
                    </div>
                    <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                      Request Quote
                    </button>
                  </div>
                </div>
                <div className="card max-w-lg card mx-4 col-span-4 bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="wishlist absolute right-3 top-3 cursor-pointer">
                    <Image
                      src={"/assets/icons/wishlist.png"}
                      width={32}
                      height={32}
                      alt="object-fit"
                    />
                  </div>

                  <div className="">
                    <Image
                      src={"/assets/images/promotions/01.png"}
                      width={360}
                      height={140}
                      alt="object-fit"
                    />
                  </div>

                  <div className="card_content p-3">
                    <div className="title flex items-center justify-between">
                      <div className="flex items-center">
                        <Image
                          src={"/assets/images/client_test.png"}
                          width={24}
                          height={24}
                          alt="brand_logo "
                          className="mr-2"
                        />
                        <h4 className="font-bold">Elite Carpenters</h4>
                      </div>
                      <div className="flex items-center my-1">
                        <StarReview />
                        <p className="mx-1">5.0</p>
                        <p>(300k)</p>
                      </div>
                    </div>

                    <div className="job_category">
                      <h1>Job category</h1>

                      <ul className="flex my-3">
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Power contractors
                        </li>
                        <li className="bg-lightWhite px-3 py-1 rounded-full mr-2">
                          Generator installation
                        </li>
                      </ul>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h5>Get 20% off 5 weeks booking</h5>{" "}
                      <h5 className="text-green">
                        Ends in: <span className="ml-2">04:34:40</span>{" "}
                      </h5>
                    </div>
                    <button className="w-full h-[48px] text-green font-bold py-2 px-4 border-2 border-green rounded mb-4">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="promotion py-4 px-3 col-span-3">
            <div className="head flex items-center py-5">
              <h1 className="text-2xl">Promotions</h1>

              <div className="ad bg-green py-2 px-3 rounded-md mx-3 text-white">
                Ads
              </div>
            </div>

            <div className="all_promotions">
              <div className="card max-w-sm bg-white rounded-lg my-5 shadow dark:bg-gray-800 dark:border-gray-700">
                <Image
                  src={"/assets/images/promotions/01.png"}
                  width={360}
                  height={140}
                  alt=""
                />

                <div className="card_content p-3">
                  <div className="title">
                    <div className="flex items-center">
                      <Image
                        src={"/assets/images/client_test.png"}
                        width={20}
                        height={20}
                        alt="brand_logo "
                        className="mr-2"
                      />
                      <h4>Elite Carpenters</h4>
                    </div>

                    <div className="flex items-center my-1">
                      <StarReview />
                      <p className="mx-1">5.0</p>
                      <p>(300k)</p>
                    </div>

                    <div className="flex items-center mb-2">
                      <h5>Carpenrty</h5> <span className="mx-1">|</span>{" "}
                      <h5>5 miles away</h5>
                    </div>

                    <button className="w-full h-[48px] text-white font-bold py-2 px-4 bg-green rounded items-center mb-4">
                      Get quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
