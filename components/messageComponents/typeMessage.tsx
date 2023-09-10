import Image from "next/image";

const TypeMessage: React.FC<{
  message: string;
  handleInputChange: any;
  handleSendMessage: any;
  setOpenAttachment: any;
  openAttachment: boolean;
}> = ({
  message,
  handleInputChange,
  handleSendMessage,
  setOpenAttachment,
  openAttachment,
}) => {
  return (
    <div className="typeMessage w-7/12 fixed bottom-0">
      <div className="flex items-center px-8">
        <div className="w-full relative">
          <input
            className="appearance-none w-full text-gray-700 border border-red-500 rounded px-2 pr-16 py-3 my-2 focus:outline-none focus:bg-white bg-[#fafafa]  border border-grey80"
            id="grid-first-name"
            type="text"
            name="title"
            placeholder="Type something"
            value={message}
            onChange={handleInputChange}
            onKeyPress={handleSendMessage}
          />
          <Image
            src={"/assets/icons/attachment.svg"}
            width={32}
            height={32}
            alt="profile "
            className="absolute z-50 flex top-[18px] right-2 cursor-pointer"
            onClick={() => setOpenAttachment(!openAttachment)}
          />
        </div>

        <div className="border p-[7px] ml-2 border border-grey80 bg-[#fafafa] rounded">
          <Image
            src={"/assets/icons/microphone.svg"}
            width={32}
            height={32}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default TypeMessage;
