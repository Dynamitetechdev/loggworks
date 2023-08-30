import { useState } from "react";
import ProfileCard from "../general/profileCard";
import PostJobForm from "./postJobForm";
import ProcessIndicator from "./processIndicator";

const PostJob = () => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div className="px-9 pt-10 flex ">
      <div className="process_indicator w-3/12">
        <ProcessIndicator
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </div>

      <div className="form_container w-5/12">
        <ProfileCard />

        <PostJobForm activeStep={activeStep} setActiveStep={setActiveStep} />
      </div>
    </div>
  );
};

export default PostJob;
