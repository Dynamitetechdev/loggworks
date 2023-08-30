import Image from "next/image";

const LocationSearch = () => {
  return (
    <div className="location_search max-md:mt-5 max-md:mb-4  md:w-[416px] h-[44px] ">
      <form>
        <div className="relative grid grid-cols-6 w-full">
          <div className="col-span-4">
            <div className="absolute inset-y-0 left-0  flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="w-full p-3 pl-10 text-sm text-gray-900 border border-grey max-md:rounded-[0]"
              placeholder="Try searching carpenter..."
            />
          </div>

          <button
            type="submit"
            className="text-[#000000] col-span-2 flex pl-3 items-center border border-grey border-l-0 bg-none"
          >
            <Image
              src={"/assets/icons/nav_icons/location.svg"}
              width={24}
              height={24}
              alt=""
            />
            <p className="text-searchColor ml-1 text-1xl">Location</p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default LocationSearch;
