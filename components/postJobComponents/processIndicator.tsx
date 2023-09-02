import { useState } from "react";

const ProcessIndicator: React.FC<{
  activeStep: number;
  setActiveStep: any;
}> = ({ activeStep, setActiveStep }) => {
  const steps = ["Job details", "Location", "Budget", "Upload images"];

  return (
    <>
      <ol className="max-md:hidden hrelative text-gray-500 ">
        {steps.map((text, index) => (
          <li
            key={index}
            className={` relative  ${
              activeStep >= index + 1 ? "border-dark" : "border-grey"
            } ${index === steps.length - 1 ? null : "pb-10 border-l-2"}`}
          >
            <div className="ml-5 flex items-top">
              <span
                className={`absolute w-3 h-3 bg-dark rounded-full -left-[7px] ${
                  activeStep >= index ? "bg-dark" : "bg-grey"
                } ${index === steps.length - 1 ? "-left-[4.57px] top-0" : ""}`}
              ></span>
              <h3
                className={`font-medium -mt-[6px] text-dark ${
                  activeStep >= index ? "font-semibold" : "font-light opacity-9"
                }`}
              >
                {text}
              </h3>
            </div>
          </li>
        ))}
      </ol>
      <ol className="md:hidden relative text-gray-500 flex items-center mb-10">
        {steps.map((text, index) => (
          <li
            key={index}
            className={`relative w-full border-t-2 ${
              activeStep >= index + 1 ? "border-dark" : "border-grey"
            } ${index === steps.length - 1 && "w-10"}`}
          >
            <div className="flex">
              <span
                className={`absolute w-3 h-3 bg-dark rounded-full -top-[7px] ${
                  activeStep >= index ? "bg-dark" : "bg-grey"
                } ${index === steps.length - 1 ? "" : ""}`}
              ></span>
              {/* <h3
                className={`font-medium text-dark ${
                  activeStep >= index ? "font-semibold" : "font-light opacity-9"
                }`}
              >
                {text}
              </h3> */}
            </div>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ProcessIndicator;
