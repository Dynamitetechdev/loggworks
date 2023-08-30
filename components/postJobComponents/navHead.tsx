import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";

interface NavHeadProps {
  postJob?: boolean;
}
const NavHead: React.FC<NavHeadProps> = ({ postJob }) => {
  return (
    <div className="max-md:hidden nav_head flex items-center md:py-3 md:mx-6  border-b  border-grey80">
      <div className="back border border-grey80 w-[40px] h-[40px] flex items-center justify-center">
        <ChevronLeftIcon width={20} height={20} />
      </div>

      <div className="flex items-center ml-36 w-full justify-between">
        <h1 className="font-bold">Post a Job</h1>
        {!postJob && (
          <button className="ad bg-green py-3 px-3 rounded mx-3 text-white flex items-center">
            <span className="mr-1">
              <PlusIcon width={16} height={16} />
            </span>
            <span>Post A Job</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavHead;
