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
    <div className="">NOT USED YET</div>
    // <div className="typeMessage w-7/12 fixed md:bottom-0 bottom-[55px] max-md:bg-white max-md:w-full">
    //   <div className="flex items-center md:px-8 px-4">
    //     <div className="w-full relative">
    //       <input
    //         className="appearance-none w-full text-gray-700 border border-red-500 rounded px-2 pr-16 py-3 my-2 focus:outline-none focus:bg-white bg-[#fafafa]  border border-grey80"
    //         id="grid-first-name"
    //         type="text"
    //         name="title"
    //         placeholder="Type something"
    //         value={message}
    //         onChange={handleInputChange}
    //         onKeyPress={handleSendMessage}
    //       />
    //       <Image
    //         src={"/assets/icons/attachment.svg"}
    //         width={32}
    //         height={32}
    //         alt="profile "
    //         className="absolute z-50 flex top-[18px] right-2 cursor-pointer"
    //         onClick={() => setOpenAttachment(!openAttachment)}
    //       />
    //     </div>

    //     <div className="md:p-[7px] ml-2 md:border border-grey80 md:bg-[#fafafa] rounded">
    //       <Image
    //         src={"/assets/icons/microphone.svg"}
    //         width={32}
    //         height={32}
    //         alt="profile"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default TypeMessage;
