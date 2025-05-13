import React from "react";
import Navbar from "./shared/Navbar";
import JobCard from "./shared/JobCard";
import { useSelector } from "react-redux";

const Browse = () => {
  let searchResult = useSelector((store) => store.job.allJobs).slice(0,5);

  return (
    <>
      <Navbar />
      <div className="my-10 mx-auto max-w-7xl flex flex-col gap-3 p-4">
        <p className="font-bold md:font-medium text-lg sm:text-xl md:text-2xl">Search Results ({searchResult.length})</p>
        <div className="flex-1 max-[640px]:w-4/5 max-[640px]:mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {searchResult.map((job) => (
              <JobCard key={job._id} job={job} className="self-start" />
            ))}
          </div>
      </div>
    </>
  );
};

export default Browse;
