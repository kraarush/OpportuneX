import { Bookmark, IndianRupee, MapPin } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

const JobCard = ({ job, className }) => {
  console.log(job);
  const navigate = useNavigate();

  const calculateTime = () => {
    const createdAt = new Date(job.createdAt);
    const now = new Date();
    const diffInSeconds = Math.floor((now - createdAt) / 1000);

    if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) return `${diffInMinutes} min ago`;
    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24) return `${diffInHours} hrs ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 30) return `${diffInDays} days ago`;
    const diffInMonths = Math.floor(diffInDays / 30);
    if (diffInMonths < 12) return `${diffInMonths} months ago`;
    const diffInYears = Math.floor(diffInMonths / 12);
    return `${diffInYears} years ago`;
  };

  return (
    <div
      className={`border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col gap-2 ${className}`}
    >
      <div className="flex justify-between px-2">
        <p>{calculateTime()}...</p>
        <Bookmark />
      </div>

      <div className="flex items-center  gap-1 sm:gap-2">
        <div>
          <img
            src="/OpportuneX_logo.png"
            alt="company_logo"
            className="h-[4rem] rounded-md border border-gray-300"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold">
            {job.company?.name
              ? job.company.name.charAt(0).toUpperCase() +
                job.company.name.slice(1)
              : ""}
          </h2>
          <div className="flex items-center gap-2 text-sm mt-1">
            <MapPin size={16} className="text-gray-600" />
            <span>{job.location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-2">
        <p className="font-semibold md:text-lg">{job.title}</p>
        <p className="min-h-[100px]">
          {job.description.length > 150 ? (
            <>
              {job.description.slice(0, 150)}...
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate(`/job/description/${job._id}`)}
              >
                Read more
              </span>
            </>
          ) : (
            job.description
          )}
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <IndianRupee size={16} className="text-gray-600" />
            <span>{job.salary} / month</span>
          </div>
        </div>

        <div className="flex gap-2 my-2">
          <Badge variant="ghost" className="text-purple-600 border-purple-400">
            {job.jobType}
          </Badge>
          <Badge variant="ghost" className="text-orange-600 border-purple-400">
            {job.position} Positions
          </Badge>
        </div>
      </div>

      <div className="max-w-[250px] mx-1 md:mx-0 ">
        <div className="flex justify-around">
          <Button
            variant="outline"
            className=" md:mr-8"
            onClick={() => {
              navigate(`/job/description/${job._id}`);
            }}
          >
            Details
          </Button>
          <Button className="bg-[#6A38C2] hover:bg-purple-600">
            Save for later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
