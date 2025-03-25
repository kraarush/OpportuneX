import React from "react";
import Navbar from "./Navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Briefcase, MapPin, DollarSign, Users } from "lucide-react";

const JobDescription = () => {
  const job = {
    company: "InnoSoft",
    type: "Full-Time",
    positions: "3",
    role: "Frontend Developer",
    location: "Remote",
    description:
      "Build modern, responsive UIs using React and Tailwind CSS, ensuring seamless user experience across devices.",
    experience: 2,
    salary: 75,
    totalApplicant: 6,
    time: "1 week ago",
  };

  const isApplied = false;

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto my-12 p-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="font-bold text-2xl">{job.company}</h2>
              <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                <Badge>{job.positions} positions</Badge>
                <Badge>{job.type}</Badge>
              </div>
            </div>
            <Button
              disabled={isApplied}
              className={`w-3/4 sm:w-auto px-6 py-2 text-lg font-semibold rounded-lg 
                ${
                  isApplied
                    ? "bg-gray-800 cursor-not-allowed opacity-70"
                    : "bg-purple-700 hover:bg-purple-600"
                }
              `}
            >
              {isApplied ? "Already applied" : "Apply now"}
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 my-6">
              <div className="flex max-[400px]:items-start items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-600" />
                <div className="flex max-[300px]:flex-col gap-2">
                  <p className="font-semibold">Role:</p>
                  <p className="text-gray-700">{job.role}</p>
                </div>
              </div>

              <div className="flex max-[400px]:items-start items-center gap-2">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div className="flex max-[300px]:flex-col gap-2">
                  <p className="font-semibold">Location:</p>
                  <p className="text-gray-700">{job.location}</p>
                </div>
              </div>

              <div className="flex max-[400px]:items-start items-center gap-2">
                <Users className="w-5 h-5 text-gray-600" />
                <div className="flex max-[300px]:flex-col gap-2">
                  <p className="font-semibold">Total Applicants:</p>
                  <p className="text-gray-700">{job.totalApplicant}</p>
                </div>
              </div>

              <div className="flex max-[400px]:items-start items-center gap-2">
                <DollarSign className="w-5 h-5 text-gray-600" />
                <div className="flex max-[300px]:flex-col gap-2">
                  <p className="font-semibold">Salary:</p>
                  <p className="text-gray-700">{job.salary} LPA</p>
                </div>
              </div>

              <div className="flex max-[400px]:items-start items-center gap-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <div className="flex max-[300px]:flex-col gap-2">
                  <p className="font-semibold">Posted:</p>
                  <p className="text-gray-700">{job.time}</p>
                </div>
              </div>

              <div className="flex max-[400px]:items-start items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-600" />
                <div className="flex max-[300px]:flex-col gap-2">
                  <p className="font-semibold">Experience:</p>
                  <p className="text-gray-700">{job.experience} years</p>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-lg font-semibold border-b pb-2">
                Job Description
              </p>
              <p className="text-gray-700 mt-3">{job.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDescription;
