import Image from "next/image";
import StarReview from "../starReview";
import WishListButton from "../wishlist";

const CardMedium = () => {
  const sampleText = "Spend $100 and get 20% off";

  return (
    <div className="card min-md:w-[181px] bg-white my-2 relative">
      <WishListButton />
      <div className="">
        <Image
          src={"/assets/images/promotions/01.png"}
          width={360}
          height={140}
          alt=""
          className="rounded-lg "
        />
      </div>

      <div className="card_content py-3">
        <div className="title">
          <div className="flex items-center">
            <Image
              src={"/assets/images/client_test.png"}
              width={20}
              height={20}
              alt="brand_logo "
              className="mr-2 max-sm:hidden"
            />
            <h4 className="font-bold text-[14px]">Elite Carpenters</h4>
          </div>

          <div className="flex items-center my-1 max-sm:text-[9px] text-[12px]">
            <StarReview />
            <p className="mx-1">5.0</p>
            <p>(300k)</p>
          </div>

          <div className="flex items-center font-light text-[12px]">
            <h5>Carpenrty</h5> <span className="mx-1">|</span>{" "}
            <h5>5 miles away</h5>
          </div>

          <div className="md:my-3 my-2 text-[12px]">
            <p className="text-center bg-lightWhite w-9/12 md:w-7/12 px-2 md:px-3 py-1 rounded-full mr-2 min-md:text-[10px]">
              Power contractors
            </p>
          </div>

          <div className="md:flex items-center justify-between mb-3 max-sm:text-[12px] text-[10px]">
            <p>{sampleText.substring(20, -1)}...</p>{" "}
            <p className="text-timerColor font-bold">
              Ends in: <span className="ml-1">04:34:40</span>{" "}
            </p>
          </div>
          <button className="w-full py-[4px] text-green text-[14px] max-sm:text-[10px] font-bold py-2 px-4 border-2 border-green rounded rounded items-center ">
            Get quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardMedium;
