import { ChevronLeftIcon, PlusIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import NavHead from "../postJobComponents/navHead";
import JobList from "../postJobComponents/jobList";
import PostJob from "../postJobComponents/postJob";

const PostJobTab = () => {
  const [postJob, setPostJob] = useState(true);

  return (
    <div className="post-job bg-white h-screen relative md:mt-16">
      {postJob ? (
        <>
          <NavHead postJob={postJob} />

          <PostJob />
        </>
      ) : (
        <>
          <NavHead />

          <JobList />
        </>
      )}
      <div className="md:hidden fixed mobile_post_button bottom-20 right-1">
        <button className="ad bg-green py-4 px-3 rounded mx-3 text-white flex items-center">
          <span className="mr-2 bg-white rounded text-green p-1">
            <PlusIcon width={16} height={16} />
          </span>
          <span className="font-bold">Post A Job</span>
        </button>
      </div>
    </div>
  );
};

export default PostJobTab;
