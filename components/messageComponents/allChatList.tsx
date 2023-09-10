import Image from "next/image";

const AllChatList: React.FC<{
  data: any[];
  onChat: any;
  setActive: any;
  setShowChatList: any;
}> = ({ data, onChat, setActive, setShowChatList }) => {
  return (
    <div className="all_chat max-md:mt-24 md:overflow-y-scroll md:h-[calc(90vh-4rem)] ">
      {data.map((x, i) => (
        <div
          className={`chat flex items-center p-2 rounded mb-2 cursor-pointer ${
            onChat(i) && "bg-[#f6f6f6]"
          }`}
          key={i}
          onClick={() => {
            setActive(i);
            setShowChatList(false);
          }}
        >
          <div className="profile mr-2">
            <Image
              src={"/assets/images/client_test.png"}
              width={40}
              height={40}
              alt="profile"
            />
          </div>

          <div className="flex justify-between w-full ">
            <div className="">
              <h1 className="text-[18px] font-bold">{x.name}</h1>
              <p className="text-[14px] text-[#2E2E2E]">
                {x.message[x.message.length - 1]?.text
                  ? x.message[x.message.length - 1]?.text
                  : x.message[x.message.length - 1]?.quote
                  ? "A quote was sent"
                  : ""}
              </p>
            </div>

            <div className="flex flex-col items-end text-[12px]">
              <span className="my-1">Yesterday</span>
              {x.unread?.status && (
                <h2 className="px-2 text-white rounded-lg bg-green mt-1">
                  {x.unread.length}+
                </h2>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllChatList;
