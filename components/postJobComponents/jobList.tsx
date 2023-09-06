import Image from "next/image";
import { useState } from "react";
import JobCard from "../general/cards/jobListCard";

const JobList = () => {
  const [allJobs, setAllJobs] = useState<any[]>(Array(4).fill(""));

  return (
    <div className="all_job relative ">
      {allJobs.length > 0 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="form_container mt-8 md:w-5/12 max-sm:px-3">
            {allJobs.map((_: any, i: number) => (
              <JobCard key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex relative items-center justify-center w-full md:mt-[20%] mt-[50%]">
          <div className="nojob flex flex-col items-center text-center">
            <Image
              src={"/assets/images/nojob.svg"}
              width={181}
              height={165}
              alt=""
            />
            <p className="my-2">No have not posted any Jobs</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobList;
