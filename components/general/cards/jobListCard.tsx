import Image from "next/image";
import WishListButton from "../wishlist";
import Option from "../../postJobComponents/options";

const JobCard = () => {
  let sampleText =
    "I’m in need of a skilled electrician at Manchester UK. My circuit box just got blown due to flutuauting I’m in need of a skilled electrician at Manchester UK. My circuit box just got blown due to flutuauting I’m in need of a skilled electrician at Manchester UK. My circuit box just got blown due to flutuauting ";

  return (
    <div className="jobCard relative shadow h-[261px] mb-10 rounded">
      <Option />
      <div className="img w-full h-[99px] rounded-t bg-[red] bg-[url('/assets/bg/jobpost.png')] bg-cover bg-no-repeat bg-center"></div>
      <div className="card relative">
        <div className="card_content p-3">
          <div className="title">
            <h4 className="font-bold">Elite Carpenters</h4>

            <p className="text-grey20 font-light">
              {sampleText.substring(100, -1)}.....
            </p>
            <div className="flex items-center min-md:text-[14px] my-2">
              <Image
                src={"/assets/icons/money.svg"}
                width={20}
                height={20}
                alt=""
                className="mr-2"
              />
              <h5>
                £<span>600</span> - £<span>1000</span>
              </h5>
            </div>
            <div className="flex items-center min-md:text-[14px]">
              <Image
                src={"/assets/icons/location.svg"}
                width={20}
                height={20}
                alt=""
                className="mr-2"
              />
              <h5>5 Pereira Road, Birmingham, B17 9JG</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
