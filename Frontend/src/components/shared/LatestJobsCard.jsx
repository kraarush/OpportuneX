import React from "react";
import { IndianRupee, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const LatestJobsCard = ({ _id, title, company, location, salary, type, positions, description }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/job/description/${_id}`)}
      className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-xl hover: cursor-pointer transition-shadow duration-300 flex flex-col gap-3"
    >
      <div>
        <h2 className="text-lg font-semibold">
          {company ? company.charAt(0).toUpperCase() + company.slice(1) : ""}
        </h2>

        <div className="flex items-center gap-2 text-sm mt-1">
          <MapPin size={16} className="text-gray-600" />
          <span>{location}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 my-2">
        <p className="font-semibold md:text-lg">{title}</p>
        <p>
          {description.length > 150 ? (
            <>
              {description.slice(0, 150)}...
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate(`/job/description/${_id}`)}
              >
                Read more
              </span>
            </>
          ) : (
            description
          )}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <IndianRupee size={16} className="text-gray-600" />
          <span>{salary} / month</span>
        </div>
      </div>

      <div className="flex gap-2 my-1">
        <Badge variant="ghost" className="text-purple-600 border-purple-400">
          {type}
        </Badge>
        <Badge variant="ghost" className="text-orange-600 border-purple-400">
          {positions} Position
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobsCard;
