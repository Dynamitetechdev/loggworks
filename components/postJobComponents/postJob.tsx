import { useState } from "react";
import ProfileCard from "../general/profileCard";
import PostJobForm from "./postJobForm";
import ProcessIndicator from "./processIndicator";

const PostJob: React.FC<{ activeStep: number; setActiveStep: any }> = ({
  activeStep,
  setActiveStep,
}) => {
  return (
    <div className="px-6 md:px-9 pt-10 md:flex ">
      <div className=" process_indicator  md:w-3/12">
        <ProcessIndicator
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className="form_container md:w-8/12 lp:w-7/12 lg:w-5/12">
        <ProfileCard />

        <PostJobForm activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
    </div>
  );
};

export default PostJob;
