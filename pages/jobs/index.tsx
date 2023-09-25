import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/general/nav/header";
import JobList from "../../components/postJobComponents/jobList";
import MobilePostButton from "../../components/postJobComponents/mobilePostButton";
import StepNavHead from "../../components/postJobComponents/stepNavHead";

const JobsPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="md:flex">
      <div className="w-[221px]">
        <SideBar />
      </div>
      <div className="flex-grow">
        <div className="post-job bg-white relative">
          <StepNavHead />
          <JobList />
          <MobilePostButton />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
