import Image from "next/image";

const ChatHead: React.FC<{ chats: any[]; active: number }> = ({
  chats,
  active,
}) => {
  return (
    <div className="chat_head flex items-center md:py-3 py-3 px-6  border-b  border-grey80">
      <Image
        src={"/assets/images/client_test.png"}
        width={32}
        height={32}
        alt="profile"
      />
      <h1 className="font-bold capitalize text-[16px] ml-2">
        {chats[active].name}
      </h1>
    </div>
  );
};

export default ChatHead;
