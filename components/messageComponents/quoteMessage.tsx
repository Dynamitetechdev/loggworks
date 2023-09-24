import { EyeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const QuoteMessage: React.FC<{
  quoteRequest: any;
  setQuoteRequest: any;
}> = ({ quoteRequest, setQuoteRequest }) => {
  return (
    <div className="mb-3">
      <div className="quote">
        <div className="img max-w-[288px] min-w-[288px] max-h-[104px] relative flex justify-center items-center">
          <Link
            className="bg-[#ccc] text-sm flex items-center absolute px-3 py-1 rounded-md text-white cursor-pointer"
            href={`/message/quote/1`}
          >
            <EyeIcon width={16} height={16} />
            <p className="ml-1">View quote</p>
          </Link>
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
            <Link href={`/message/quote/1`}>
              <button
                className="bg-green text-white w-[140px] text-[14px] py-[8px] px-4 rounded"
                onClick={() => setQuoteRequest("paid")}
              >
                Accept
              </button>
            </Link>
          </div>
        )}

        {quoteRequest && (
          <div className="acceptRequest">
            <button className="bg-[#FDE8E7] w-full text-[14px] text-[#F02D16] py-[8px] px-4 rounded mt-2 capitalize">
              {quoteRequest}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteMessage;
