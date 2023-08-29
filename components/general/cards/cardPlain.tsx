import Image from "next/image";

const CardPlain = () => {
  return (
    <div className="card  bg-white rounded-lg my-2">
      <Image
        src={"/assets/images/promotions/01.png"}
        width={360}
        height={140}
        alt=""
        className="rounded-lg "
      />

      <div className="card_content py-3 ">
        <div className="title">
          <h4>Elite Carpenters</h4>
        </div>
      </div>
    </div>
  );
};

export default CardPlain;
