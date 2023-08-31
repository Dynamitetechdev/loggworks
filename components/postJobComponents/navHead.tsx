import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const NavHead: React.FC<{ activeStep: number; setActiveStep: any }> = ({
  activeStep,
  setActiveStep,
}) => {
  const router = useRouter();
  const goBack = () => {
    if (activeStep != 0) {
      setActiveStep(activeStep - 1);
    } else router.push("/jobs");
  };

  return (
    <div className="max-md:hidden nav_head flex items-center md:py-3 md:mx-6  border-b  border-grey80">
      <div
        className="back border border-grey80 w-[40px] h-[40px] flex items-center justify-center"
        onClick={() => goBack()}
      >
        <ChevronLeftIcon width={20} height={20} />
      </div>

      <div className="flex items-center ml-36 w-full justify-between">
        <h1 className="font-bold">Post a Job</h1>
      </div>
    </div>
  );
};

export default NavHead;
