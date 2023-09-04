import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/general/nav/header";

import NavHead from "../../components/postJobComponents/navHead";
import PostJob from "../../components/postJobComponents/postJob";

const PostJobPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
        <Header />
        <div className="post-job bg-white h-screen relative md:mt-16">
          <NavHead
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            title="Post A Job"
          />
          <PostJob activeStep={activeStep} setActiveStep={setActiveStep} />
        </div>
      </div>
    </div>
  );
};

export default PostJobPage;
