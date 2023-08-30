import Image from "next/image";
import { useState } from "react";

const JobList = () => {
  const [allJobs, setAllJobs] = useState<any[]>([]);
  return (
    <div className="all_job relative h-[550px] flex items-center justify-center">
      {allJobs.length > 0 ? (
        <div className="noJob text-center flex flex-col items-center ">
          <p className="my-2">IIIII</p>
        </div>
      ) : (
        <div className="noJob text-center flex flex-col items-center ">
          <Image
            src={"/assets/images/nojob.svg"}
            width={181}
            height={165}
            alt=""
          />
          <p className="my-2">No have not posted any Jobs</p>
        </div>
      )}
    </div>
  );
};

export default JobList;
