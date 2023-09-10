import Image from "next/image";

const CardPlain = () => {
  return (
    <div className="card  bg-white rounded-lg my-2 mr-5">
      <div className="">
        <Image
          src={"/assets/images/promotions/01.png"}
          width={360}
          height={140}
          alt=""
          className="rounded-t-lg"
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
