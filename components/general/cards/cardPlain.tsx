import Image from "next/image";

const CardPlain = () => {
  return (
    <div className="card  bg-white rounded-lg my-2 mr-5">
      <div className="max-w-[228px] w-[177px] md:w-[260px] h-[107px] relative mr-10">
        <Image
          src={"/assets/bg/te.jpg"}
          layout="fill"
          alt=""
          className="w-full rounded-t-lg object-center object-cover "
          objectFit="cover"
          objectPosition="center"
        />
      </div>

      <div className="card_content md:py-3 max-sm:text-[14px] max-sm:my-1">
        <div className="title">
          <h4>Elite Carpenters</h4>
        </div>
      </div>
    </div>
  );
};

export default CardPlain;
