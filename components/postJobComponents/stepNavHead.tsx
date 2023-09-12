import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavHeadProps {
  postJob?: boolean;
  setPostJob?: (x: any) => void;
}

const StepNavHead: React.FC<NavHeadProps> = ({ postJob, setPostJob }) => {
  const router = useRouter();

  return (
    <>
      <div className=" nav_head flex items-center md:py-3 md:mx-6  border-b  border-grey80">
        <div
          className="back md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon width={20} height={20} />
        </div>

        <div className="flex md:relative md:left-[25%] items-center justify-center md:justify-between md:w-5/12 w-full ">
          <h1 className="font-bold capitalize md:text-[20px] text-[16px] max-md:-ml-6">
            Post a Job
          </h1>

          <Link href={"/post-job"} className="max-md:hidden">
            <button className=" ad -mr-5 bg-green py-3 px-3 rounded mx-3 text-white flex items-center">
              <span className="mr-1">
                <PlusIcon width={16} height={16} />
              </span>
              <span>Post A Job</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="hidden nav_head flex items-center md:py-5 py-3 md:mx-6 mx-3 border-b  border-grey80">
        <div className="flex items-center md:w-8/12 w-full justify-center -ml-2">
          <h1 className="font-bold capitalize text-[20px]">Post a Job</h1>
        </div>
      </div>
    </>
  );
};

export default StepNavHead;
