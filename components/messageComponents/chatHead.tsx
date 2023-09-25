import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ChatHead: React.FC<{
  chats: any[];
  active: number;
  setShowChatList: any;
}> = ({ chats, active, setShowChatList }) => {
  return (
    <div className="max-md:fixed max-md:w-full max-md:top-0 z-50 bg-white chat_head flex items-center md:py-3 py-3 md:px-6  border-b  border-grey80">
      <div className="flex items-center">
        <div className="md:hidden" onClick={() => setShowChatList(true)}>
          <ChevronLeftIcon width={28} height={28} className="mr-3 ml-2" />
        </div>

        <Image
          src={"/assets/images/client_test.png"}
          width={32}
          height={32}
          alt="profile"
        />
      </div>

      <h1 className="font-bold capitalize text-[16px] ml-2">
        {chats[active].name}
      </h1>
    </div>
  );
};

export default ChatHead;
