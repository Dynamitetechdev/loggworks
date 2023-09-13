import Image from "next/image";
import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import AllChatList from "../../components/messageComponents/allChatList";
import AttachmentMenu from "../../components/messageComponents/attachmentComponent";
import NoInbox from "../../components/messageComponents/noInbox";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const Message = () => {
  const [chats, setChats] = useState([
    {
      name: "Dynamite Tech",
      unread: {
        status: true,
        length: 2,
      },
      message: [
        {
          status: "sent",
          text: "hello",
          time: "1:20",
        },

        {
          status: "sent",
          text: "hello",
          time: "1:22",
        },
        {
          status: "recieved",
          text: "hello",
          time: "1:23",
        },
        {
          status: "recieved",
          text: "hello",
          time: "1:24",
        },
        {
          status: "recieved",
          quote: true,

          time: "1:25",
        },
      ],
    },
    {
      name: "Capterner Guy",
      unread: {
        status: true,
        length: 2,
      },
      message: [
        {
          status: "recieved",
          text: "hello, Available for jobs",
          time: "1:20",
        },
        {
          status: "sent",
          text: "yes, thanks for reaching out",
          time: "1:22",
        },
        {
          status: "recieved",
          text: "i have a $3m contract i want to give to you",
          time: "1:23",
        },
        {
          status: "sent",
          text: "Wow🔥",
          time: "1:24",
        },
        {
          status: "recieved",
          quote: true,
          time: "1:25",
        },
        {
          status: "recieved",
          text: "Accept and let get started",
          time: "1:25",
        },
        {
          status: "recieved",
          text: "hello, Available for jobs",
          time: "1:20",
        },
        {
          status: "sent",
          text: "yes, thanks for reaching out",
          time: "1:22",
        },
        {
          status: "recieved",
          text: "i have a $3m contract i want to give to you",
          time: "1:23",
        },
        {
          status: "sent",
          text: "Wow🔥",
          time: "1:24",
        },
        {
          status: "recieved",
          quote: true,
          time: "1:25",
        },
        {
          status: "recieved",
          text: "Accept and let get started",
          time: "1:25",
        },
      ],
    },
    {
      name: "Nano Wandrack",
      unread: {
        status: true,
        length: 2,
      },
      message: [
        {
          status: "sent",
          text: "Hello Craig, I’m Wandrack",
          time: "1:22",
        },
        {
          status: "recieved",
          text: "Hi Wandrack, Nice to meet you. How can I help you?",
          time: "1:23",
        },
        {
          status: "sent",
          text: "I want to install a new Jacuzzi in my apartment. Can you handle that?",
          time: "1:24",
        },
        {
          status: "recieved",
          text: "Yeah, sure! I’ll send a quote to that effect now.",
          time: "1:24",
        },
        {
          status: "recieved",
          quote: true,
          time: "1:25",
        },
        {
          status: "sent",
          text: "yes, thanks for reaching out",
          time: "1:22",
        },
        {
          status: "recieved",
          text: "i have a $3m contract i want to give to you",
          time: "1:23",
        },
        {
          status: "sent",
          text: "Wow🔥",
          time: "1:24",
        },
      ],
    },
  ]);

  const [active, setActive] = useState(-1);
  const [openAttachment, setOpenAttachment] = useState(false);
  const [quoteRequest, setQuoteRequest] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const messageContainerRef: any = useRef(null);
  const [showChatList, setShowChatList] = useState(true);
  const onChat = (index: number) => {
    if (active === index) {
      return true;
    } else {
      return false;
    }
  };

  const handleInputChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleMessage = () => {
    console.log("working");
    if (message.trim() === "") {
      return;
    }

    const newMessage = {
      status: "sent",
      text: message,
      time: getCurrentTime(),
    };

    const newChatArr = [...chats];

    newChatArr[active].message.push(newMessage);
    setChats(newChatArr);
    setMessage("");
    setTimeout(scrollToNewMessage, 100);
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    if (parseInt(hours) >= 12) {
      return `${hours}:${minutes} pm`;
    } else {
      return `${hours}:${minutes} am`;
    }
  };

  const handleSendMessage = (e: any) => {
    console.log(e);
    if (e.key === "Enter") {
      handleMessage();
    }
  };

  const scrollToNewMessage = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToNewMessage();
  }, [chats, active]);

  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  };
  console.log(message);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <div className="content_body max-sm:block md:grid md:grid-cols-10 h-screen">
          <div
            className={`border-r border-grey80 relative bg-white md:z-20 py-2 px-4 md:px-5 md:col-span-3 relative md:z-50 h-screen ${
              showChatList ? "" : "max-md:hidden"
            }`}
          >
            <div className="w-full py-3 ">
              <div className="max-md:fixed max-md:w-11/12 max-md:top-0 bg-white">
                <h1 className="text-[20px] mt-3 font-bold">Messages</h1>
                <div className="search mb-3">
                  <input
                    className="appearance-none w-full text-gray-700 border border-red-500 rounded px-2 py-3 my-2 leading-tight focus:outline-none focus:bg-white bg-lightWhite border border-grey80"
                    id="grid-first-name"
                    type="text"
                    name="title"
                    placeholder="Search a name"
                    onChange={handleSearch}
                  />
                </div>
              </div>

              <AllChatList
                setActive={setActive}
                onChat={onChat}
                data={chats.filter((x) =>
                  x.name.toLowerCase().includes(searchValue.toLowerCase())
                )}
                setShowChatList={setShowChatList}
              />
            </div>
          </div>
          <div
            className={`main col-span-7 bg-white relative ${
              showChatList ? "max-md:hidden" : ""
            }`}
          >
            {active < 0 ? (
              <NoInbox />
            ) : (
              <div className="">
                {chats[active] && (
                  <>
                    <div className="max-md:fixed max-md:w-full max-md:top-0 z-50 bg-white chat_head flex items-center md:py-3 py-3 md:px-6  border-b  border-grey80">
                      <div className="flex items-center">
                        <div className="" onClick={() => setShowChatList(true)}>
                          <ChevronLeftIcon
                            width={28}
                            height={28}
                            className="mr-3 ml-2"
                          />
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
                    <div className="w-full h-[94vh] relative max-md:pt-10">
                      <div className="day flex justify-center">
                        <h1 className="fixed bg-[#f6f6f6] px-3 py-1 rounded-full text-[12px] top-20 md:mt-3">
                          Today
                        </h1>
                      </div>

                      <div
                        className="md:overflow-y-scroll md:h-[calc(95vh-4rem)]"
                        ref={messageContainerRef}
                      >
                        <div className="messages md:px-8 px-4 mt-16 ">
                          <div
                            className="flex flex-col pb-36"
                            ref={messageContainerRef}
                          >
                            {chats[active].message.map((x, i) =>
                              x.status === "sent" ? (
                                <div
                                  className="sent flex justify-end mb-2"
                                  key={i}
                                >
                                  <div className="bg-blue-500 p-3 rounded-lg max-w-[325px] bg-[#D2F0C1]">
                                    {x.quote ? (
                                      <div className="mb-3">
                                        <div className="quote">
                                          <div className="img max-w-[288px] min-w-[288px] max-h-[104px] ">
                                            <Image
                                              src={
                                                "/assets/images/test_quote.png"
                                              }
                                              width={288}
                                              height={104}
                                              alt="profile"
                                              className="object-fit"
                                            />
                                          </div>
                                          {!quoteRequest && (
                                            <div className="button mt-2">
                                              <button
                                                className="bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2"
                                                onClick={() =>
                                                  setQuoteRequest("decline")
                                                }
                                              >
                                                Decline
                                              </button>
                                              <button
                                                className="bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded"
                                                onClick={() =>
                                                  setQuoteRequest("paid")
                                                }
                                              >
                                                Accept
                                              </button>
                                            </div>
                                          )}

                                          {quoteRequest && (
                                            <div className="acceptRequest">
                                              <button className="bg-[#FDE8E7] text-dark w-full text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize">
                                                {quoteRequest}
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    ) : (
                                      <h1 className="text-[14px] mb-3">
                                        {x.text}
                                      </h1>
                                    )}
                                    <p className="text-xs text-right text-[#5E5E5E]">
                                      {x.time}
                                    </p>
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="received flex justify-start mb-2"
                                  key={i}
                                >
                                  <div className="bg-gray-300 p-3 rounded-lg max-w-[325px] bg-[#f6f6f6]">
                                    {x.quote ? (
                                      <div className="mb-3">
                                        <div className="quote">
                                          <div className="img max-w-[288px] min-w-[288px] max-h-[104px] ">
                                            <Image
                                              src={
                                                "/assets/images/test_quote.png"
                                              }
                                              width={288}
                                              height={104}
                                              alt="profile"
                                              className="object-fit"
                                            />
                                          </div>
                                          {!quoteRequest && (
                                            <div className="button mt-2">
                                              <button
                                                className="bg-white text-dark w-[140px] text-[14px] py-[8px] px-4 rounded mr-2"
                                                onClick={() =>
                                                  setQuoteRequest("decline")
                                                }
                                              >
                                                Decline
                                              </button>
                                              <button
                                                className="bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded"
                                                onClick={() =>
                                                  setQuoteRequest("paid")
                                                }
                                              >
                                                Accept
                                              </button>
                                            </div>
                                          )}

                                          {quoteRequest && (
                                            <div className="acceptRequest">
                                              <button className="bg-[#FDE8E7] text-dark w-full text-[14px] text-[#f02d16] py-[8px] px-4 rounded mt-2 capitalize">
                                                {quoteRequest}
                                              </button>
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    ) : (
                                      <h1 className="text-[14px] mb-3">
                                        {x.text}
                                      </h1>
                                    )}

                                    <p className="text-xs"> {x.time}</p>
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        </div>

                        <div className="typeMessage w-7/12 fixed md:bottom-0 bottom-[55px] max-md:bg-white max-md:w-full">
                          <div className="flex items-center md:px-8 px-4">
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
                                onClick={() =>
                                  setOpenAttachment(!openAttachment)
                                }
                              />
                            </div>

                            <div className="md:p-[7px] ml-2 md:border border-grey80 md:bg-[#fafafa] rounded">
                              <Image
                                src={"/assets/icons/microphone.svg"}
                                width={32}
                                height={32}
                                alt="profile"
                              />
                            </div>
                          </div>
                        </div>

                        {openAttachment && <AttachmentMenu />}
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
