import Image from "next/image";
import { useState } from "react";

const WishListButton = () => {
  const [onWishlist, setOnwishList] = useState(false);
  return (
    <div
      className="wishlist absolute z-[9999] right-3 top-3 cursor-pointer rounded-full flex items-center justify-center"
      onClick={() => setOnwishList(!onWishlist)}
    >
      <Image
        src={
          onWishlist
            ? "/assets/icons/wishlist_filled.svg"
            : "/assets/icons/wishlist.svg"
        }
        width={20}
        height={20}
        alt=""
      />
    </div>
  );
};

export default WishListButton;
