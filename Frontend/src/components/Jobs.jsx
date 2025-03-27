import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FilterCard from "./FilterCard";
import JobCard from "./shared/JobCard";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector } from "react-redux";

const Jobs = () => {
  const [showFilters, setShowFilters] = useState(false);

  const {allJobs} = useSelector(store => store.job);

  return (
    <>
      <Navbar />

      <div className="max-w-[1400px] mx-auto my-6 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-2">
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

          <div className="flex-1 max-h-[86vh] max-[640px]:w-4/5 max-[640px]:mx-auto overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
            {allJobs.map((job) => (
              <JobCard key={job._id} job={job} className="self-start"  />
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Jobs;
