import Image from "next/image";
import QuoteMessage from "./quoteMessage";

const Chats: React.FC<{
  chats: any[];
  active: number;
  quoteRequest: any;
  setQuoteRequest: any;
  messageContainerRef: any;
}> = ({
  chats,
  active,
  quoteRequest,
  setQuoteRequest,
  messageContainerRef,
}) => {
  return (
    <div className="messages md:px-8 px-4 mt-16 ">
      <div className="flex flex-col pb-36" ref={messageContainerRef}>
        {chats[active].message.map((x: any, i: number) =>
          x.status === "sent" ? (
            <div className="sent flex justify-end mb-2" key={i}>
              <div className="bg-blue-500 p-3 rounded-lg max-w-[325px] bg-[#D2F0C1]">
                {x.quote ? (
                  <QuoteMessage
                    quoteRequest={quoteRequest}
                    setQuoteRequest={setQuoteRequest}
                  />
                ) : (
                  <h1 className="text-[14px] mb-3">{x.text}</h1>
                )}
                <p className="text-xs text-right text-[#5E5E5E]">{x.time}</p>
              </div>
            </div>
          ) : (
            <div className="received flex justify-start mb-2" key={i}>
              <div className="bg-gray-300 p-3 rounded-lg max-w-[325px] bg-[#f6f6f6]">
                {x.quote ? (
                  <QuoteMessage
                    quoteRequest={quoteRequest}
                    setQuoteRequest={setQuoteRequest}
                  />
                ) : (
                  <h1 className="text-[14px] mb-3">{x.text}</h1>
                )}

                <p className="text-xs"> {x.time}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Chats;
