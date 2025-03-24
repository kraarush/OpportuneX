import { Bookmark, IndianRupee, MapPin } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const JobCard = ({ postedTime, company, location, title, description, salary, type, positions }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 shadow-md hover:shadow-xl cursor-pointer transition-shadow duration-300 flex flex-col gap-2">
      <div className="flex justify-between px-2">
        <p>{postedTime} ...</p>
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
          <h2 className="text-lg font-semibold">{company}</h2>
          <div className="flex items-center gap-2 text-sm mt-1">
            <MapPin size={16} className="text-gray-600" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-2">
        <p className="font-semibold md:text-lg">{title}</p>
        <p className="min-h-[100px]">{description}</p>
      </div>

      <div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <IndianRupee size={16} className="text-gray-600" />
            <span>{salary} LPA</span>
          </div>
        </div>

        <div className="flex gap-2 my-2">
          <Badge variant="ghost" className="text-purple-600 border-purple-400">
            {type}
          </Badge>
          <Badge variant="ghost" className="text-orange-600 border-purple-400">
            {positions} Positions
          </Badge>
        </div>
      </div>

      <div className="max-w-[250px] mx-1 md:mx-0 ">
        <div className="flex justify-around">
          <Button variant="outline" className=" md:mr-8">
            Details
          </Button>
          <Button className="bg-[#6A38C2] hover:bg-purple-600">Save for later</Button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
