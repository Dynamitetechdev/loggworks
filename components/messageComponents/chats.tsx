import Image from "next/image";

const Chats: React.FC<{
  chats: any[];
  active: number;
  quoteRequest: any;
  setQuoteRequest: any;
}> = ({ chats, active, quoteRequest, setQuoteRequest }) => {
  return (
    <div className="messages px-8 mt-16">
      <div className="flex flex-col">
        {chats[active].message.map((x: any, i: number) =>
          x.status === "sent" ? (
            <div className="sent flex justify-end mb-2" key={i}>
              <div className="bg-blue-500 p-3 rounded-lg max-w-[325px] bg-[#D2F0C1]">
                {x.quote ? (
                  <div className="mb-3">
                    <div className="quote">
                      <div className="img max-w-[288px] min-w-[288px] max-h-[104px] ">
                        <Image
                          src={"/assets/images/test_quote.png"}
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
                            onClick={() => setQuoteRequest("decline")}
                          >
                            Decline
                          </button>
                          <button
                            className="bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded"
                            onClick={() => setQuoteRequest("paid")}
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
                  <h1 className="text-[14px] mb-3">{x.text}</h1>
                )}
                <p className="text-xs text-right text-[#5E5E5E]">{x.time}</p>
              </div>
            </div>
          ) : (
            <div className="received flex justify-start mb-2" key={i}>
              <div className="bg-gray-300 p-3 rounded-lg max-w-[325px] bg-[#f6f6f6]">
                {x.quote ? (
                  <div className="mb-3">
                    <div className="quote">
                      <div className="img max-w-[288px] min-w-[288px] max-h-[104px] ">
                        <Image
                          src={"/assets/images/test_quote.png"}
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
                            onClick={() => setQuoteRequest("decline")}
                          >
                            Decline
                          </button>
                          <button
                            className="bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded"
                            onClick={() => setQuoteRequest("paid")}
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
