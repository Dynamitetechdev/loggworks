import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const MobilePostButton = () => {
  return (
    <div className="md:hidden fixed mobile_post_button bottom-20 right-1">
      <Link href="/post-job">
        <button className="ad bg-green py-4 px-3 rounded mx-3 text-white flex items-center">
          <span className="mr-2 bg-white rounded text-green p-1">
            <PlusIcon width={16} height={16} />
          </span>
          <span className="font-bold">Post A Job</span>
        </button>
      </Link>
    </div>
  );
};

export default MobilePostButton;
