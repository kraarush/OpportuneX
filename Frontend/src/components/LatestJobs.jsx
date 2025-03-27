import React from "react";
import LatestJobsCard from "./shared/LatestJobsCard";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  return (
    <div className="w-full max-w-7xl mx-auto p-3 my-16">
      <div>
        <p className="text-2xl py-2 md:text-4xl md:py-4 font-semibold">
          <span className="text-[#6A38C2]">Latest & Top</span> Jobs Openings
        </p>
      </div>
      <div className="grid grid-cols-1 max-[640px]:w-4/5 max-[640px]:mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-4 lg:p-6">
        {allJobs.length === 0 ? (
          <span className="block text-center text-gray-500 text-lg font-semibold py-6">
            🚀 No Jobs Yet... Stay Tuned!
          </span>
        ) : (
          allJobs.slice(0, 6).map((job) => (
              <LatestJobsCard
                key={job._id}
                _id={job._id}
                title={job.title}
                description={job.description}
                company={job.company?.name}
                location={job.location}
                salary={job.salary}
                type={job.jobType}
                positions={job.position}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default LatestJobs;
