import Image from "next/image";
import { useState } from "react";

const StarReview = () => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return (
    <div className="stars flex items-center">
      {star.map((_: any, i: number) => (
        <Image
          key={i}
          src={"/assets/icons/filledStar.svg"}
          height={14}
          width={15}
          alt="icon"
          className=""
        />
      ))}
      <Image
        src={"/assets/icons/emptyStar.svg"}
        height={14}
        width={15}
        alt="icon"
      />
    </div>
  );
};

export default StarReview;
