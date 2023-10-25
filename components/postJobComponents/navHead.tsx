import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const NavHead: React.FC<{
  activeStep: any;
  setActiveStep: any;
  title: string | any;
  type?: string;
}> = ({ activeStep, setActiveStep, title, type }) => {
  const router = useRouter();
  const goBack = () => {
    if (activeStep) {
      if (activeStep != 0) {
        setActiveStep(activeStep - 1);
      }
    } else {
      router.back();
    }
  };

  return (
    <>
      {type === "notab" && (
        <div className="nav_head flex items-center py-3 md:mx-6 mx-3 border-b border-grey80">
          <div
            className="back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center"
            onClick={() => goBack()}
          >
            <ChevronLeftIcon width={20} height={20} />
          </div>

          <div className="md:w-9/12 w-full md:relative md:left-[33%] max-md:flex max-md:justify-center max-md:-ml-[40px]">
            <div className="flex items-start">
              <h1 className="font-bold capitalize md:text-[20px] text-[16px] md:-ml-20">
                {title}
              </h1>
            </div>
          </div>
        </div>
      )}

      {type == "plain" && (
        <div className="nav_head flex items-center md:py-5 py-3 md:mx-6 mx-3 border-b  border-grey80">
          <div className="flex items-center md:w-9/12 w-full justify-center">
            <h1 className="font-bold capitalize md:text-[20px] text-[16px] md:-ml-8">
              {title}
            </h1>
          </div>
        </div>
      )}

      {type === "notab-size" && (
        <div className="nav_head flex items-center py-3 md:mx-6 mx-3 border-b  border-grey80">
          <div
            className="back z-10 md:border border-grey80 w-[40px] h-[40px] flex items-center justify-center"
            onClick={() => goBack()}
          >
            <ChevronLeftIcon width={20} height={20} />
          </div>

          <div className="flex items-center md:w-4/12 w-full justify-center">
            <h1 className="font-bold capitalize md:text-[20px] text-[16px]">
              {title}
            </h1>
          </div>
        </div>
      )}
    </>
  );
};

export default NavHead;
