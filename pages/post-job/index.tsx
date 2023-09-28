import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/general/nav/header";

import NavHead from "../../components/postJobComponents/navHead";
import PostJob from "../../components/postJobComponents/postJob";

const PostJobPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow overflow-x-hidden">
        <div className="post-job bg-white h-screen relative">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Post A Job"
            type="notab"
          />
          <PostJob activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;
