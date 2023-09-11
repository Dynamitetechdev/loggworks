import Image from "next/image";
import StarReview from "../starReview";
import WishListButton from "../wishlist";

interface CardSmallProps {
  reccomend?: boolean;
}

const CardSmall: React.FC<CardSmallProps> = ({ reccomend }) => {
  return (
    <div className="card  bg-white my-3 relative">
      <WishListButton />
      <Image
        src={"/assets/images/promotions/01.png"}
        width={360}
        height={140}
        alt=""
        className="rounded-t-lg"
      />

      <div className="card_content md:p-3 p-2">
        <div className="title">
          <div className="flex items-center">
            <div className="max-sm:hidden">
              <Image
                src={"/assets/images/client_test.png"}
                width={20}
                height={20}
                alt="brand_logo "
                className="mr-2"
              />
            </div>

            <h4 className="max-sm:text-[14px] font-bold">Elite Carpenters</h4>
          </div>

          <div className="flex items-center my-1 md:text-[14px] text-[9px]">
            <StarReview />
            <p className="mx-1">5.0</p>
            <p>(300k)</p>
          </div>

          <div className="flex items-center mb-2 md:text-[14px] text-[12px]">
            <h5>Carpenrty</h5> <span className="mx-1">|</span>{" "}
            <h5>5 miles away</h5>
          </div>

          {!reccomend && (
            <button className="w-full py-[4px] text-green text-[14px] text-white font-bold py-2 px-4 bg-green rounded items-center">
              Get quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
