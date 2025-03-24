import React from "react";
import Navbar from "./shared/Navbar";
import jobs from "@/data/latestJobsData";
import JobCard from "./shared/JobCard";

const Browse = () => {
  let searchResult = jobs.slice(4,7);

  return (
    <>
      <Navbar />
      <div className="my-10 mx-auto max-w-7xl flex flex-col gap-3">
        <p className="font-bold md:font-medium text-lg sm:text-xl md:text-2xl">Search Results ({searchResult.length})</p>
        <div className="flex-1 max-h-[86vh] max-[640px]:w-4/5 max-[640px]:mx-auto overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {searchResult.map((job, index) => (
              <JobCard
                key={index}
                postedTime={job.time}
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
    </>
  );
};

export default Browse;
