import Image from "next/image";
import { useState } from "react";

const Testimonial = () => {
  const [star, setStar] = useState<any[]>(Array(4).fill(""));
  return (
    <div className="left max-sm:hidden bg-[url('/assets/bg/bg-auth-testimonials.png')] bg-cover bg-no-repeat bg-center col-span-3 h-screen relative">
      <div className="top_shadow"></div>

      <div className="logo">
        <Image
          src={"/assets/images/Logo.png"}
          width={197}
          height={32}
          alt="client"
          className="mr-2 absolute top-10 left-14"
        />
      </div>
      <div className="testimonial text-[white]  text-left w-10/12 bottom-20 p-5">
        <p className="font-lighter mb-5">
          &quot;Great session! Dani was super helpful. She shared some practical
          advice on how can we go about refining our service offerings.&quot;
        </p>
        <div className="rating flex items-center justify-between">
          <div className="client flex items-center ">
            <Image
              src={"/assets/images/client_test.png"}
              height={32}
              width={32}
              alt="client"
              className="mr-2"
            />
            <p>Cameron Williamson</p>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
