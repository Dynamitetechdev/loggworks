import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const NavHead: React.FC<{
  activeStep: number;
  setActiveStep: any;
  title: string;
}> = ({ activeStep, setActiveStep, title }) => {
  const router = useRouter();
  const goBack = () => {
    if (activeStep != 0) {
      setActiveStep(activeStep - 1);
    } else router.push("/jobs");
  };

  return (
    <div className="nav_head flex items-center md:py-3  pb-3 md:mx-6 mx-3 border-b  border-grey80">
      <div
        className="back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center"
        onClick={() => goBack()}
      >
        <ChevronLeftIcon width={20} height={20} />
      </div>

      <div className="flex items-center md:ml-36 w-full md:justify-between justify-center -ml-12">
        <h1 className="font-bold capitalize">{title}</h1>
      </div>
    </div>
  );
};

export default NavHead;
