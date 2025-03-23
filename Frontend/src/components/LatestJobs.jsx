import React from "react";
import LatestJobsCard from "./shared/LatestJobsCard";
import jobs from "@/data/latestJobsData";

const LatestJobs = () => {
  return (
    <div className="w-full max-w-7xl mx-auto p-3 my-16">
      <div>
        <p className="text-2xl py-2 md:text-4xl md:py-4 font-semibold">
          <span className="text-[#6A38C2]">Latest & Top</span> Jobs Openings
        </p>
      </div>
      <div className="grid grid-cols-1 max-[640px]:w-4/5 max-[640px]:mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2 md:p-4 lg:p-6">
        {jobs.map((job, index) => (
          <LatestJobsCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description}
            salary={job.salary}
            type={job.type}
            positions={job.positions}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
