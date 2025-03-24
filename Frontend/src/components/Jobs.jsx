import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FilterCard from "./FilterCard";
import JobCard from "./shared/JobCard";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import jobs from "@/data/latestJobsData";

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto my-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <button
            className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-md bg-gray-100 hover:bg-gray-200"
            onClick={() => setShowFilters(!showFilters)}
          >
            {showFilters ? (
              <AiOutlineClose size={20} />
            ) : (
              <AiOutlineMenu size={20} />
            )}
            Filters
          </button>

          <div
            className={`md:w-[15%] ${
              showFilters ? "block" : "hidden"
            } md:block`}
          >
            <div className="h-[40vh] sm:h-[50vh] md:h-[86vh] overflow-y-auto border-r border-gray-300 p-4">
              <FilterCard />
            </div>
          </div>

          <div className="flex-1 max-h-[86vh] max-[640px]:w-4/5 max-[640px]:mx-auto overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-1">
            {jobs.map((job, index) => (
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
      </div>
      <Footer/>
    </>
  );
};

export default Jobs;
