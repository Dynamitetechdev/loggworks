import Image from "next/image";
import StarReview from "../starReview";
import WishListButton from "../wishlist";

interface CardSmallProps {
  reccomend?: boolean;
}

const CardSmall: React.FC<CardSmallProps> = ({ reccomend }) => {
  return (
    <div className="card  bg-white my-2 relative">
      <WishListButton />
      <Image
        src={"/assets/images/promotions/01.png"}
        width={360}
        height={140}
        alt=""
        className="rounded-lg "
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

          <div className="flex items-center my-1 max-sm:text-[14px]">
            <StarReview />
            <p className="mx-1">5.0</p>
            <p>(300k)</p>
          </div>

          <div className="flex items-center mb-2 max-sm:text-[14px]">
            <h5>Carpenrty</h5> <span className="mx-1">|</span>{" "}
            <h5>5 miles away</h5>
          </div>

          {!reccomend && (
            <button className="w-full h-[48px] text-white font-bold py-2 px-4 bg-green rounded items-center">
              Get quote
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
