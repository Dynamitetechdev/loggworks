import SideBar from "../../components/general/sideBar";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/general/nav/header";
import JobList from "../../components/postJobComponents/jobList";
import MobilePostButton from "../../components/postJobComponents/mobilePostButton";
import StepNavHead from "../../components/postJobComponents/stepNavHead";

const JobsPage = () => {
  useEffect(() => {}, []);
  return (
    <div className="md:grid md:grid-cols-12">
      <SideBar />
      <div className="main md:col-span-10">
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
