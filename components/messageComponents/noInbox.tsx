import Image from "next/image";

const NoInbox = () => {
  return (
    <div className="absolute w-full h-[100vh] flex justify-center items-center">
      <div className="text-center text-[24px] font-bold">
        <Image
          src={"/assets/images/noMessageInbox.svg"}
          width={196}
          height={174}
          alt=""
        />
        <p>Inbox</p>
      </div>
    </div>
  );
};

export default NoInbox;
