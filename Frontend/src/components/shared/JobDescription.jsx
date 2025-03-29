import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, Briefcase, MapPin, Users, IndianRupee, Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/apis";
import { setSingleJob } from "@/redux/jobSlice";

const JobDescription = () => {
  const { jobId } = useParams(); // destucturing jobid since in the approuter i have set jobid as query parameter
  const isApplied = false;
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);

  const calculateTime = () => {
    if (!singleJob?.createdAt) return ""; 

    const createdAt = new Date(singleJob?.createdAt);
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

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        
        console.log("API Response:", res.data);

        if (res.data.success) {
          console.log("Fetched Job:", res.data.job);
          dispatch(setSingleJob(res.data?.job));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSingleJob();
  }, [dispatch, jobId]);

  if (!singleJob) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-purple-700" />
      </div>
    );
  } else
    return (
      <div>
        <Navbar />
        <div className="max-w-4xl mx-auto my-12 p-6">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center border-b pb-4 gap-4">
              <div className="text-center sm:text-left">
                <h2 className="font-bold text-2xl">
                  {singleJob?.company?.name
                    ? singleJob.company.name.charAt(0).toUpperCase() +
                      singleJob.company.name.slice(1)
                    : ""}
                </h2>
                <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                  <Badge>{singleJob?.position} positions</Badge>
                  <Badge>{singleJob?.jobType}</Badge>
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
                    <p className="text-gray-700">{singleJob?.title}</p>
                  </div>
                </div>

                <div className="flex max-[400px]:items-start items-center gap-2">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <div className="flex max-[300px]:flex-col gap-2">
                    <p className="font-semibold">Location:</p>
                    <p className="text-gray-700">{singleJob?.location}</p>
                  </div>
                </div>

                <div className="flex max-[400px]:items-start items-center gap-2">
                  <Users className="w-5 h-5 text-gray-600" />
                  <div className="flex max-[300px]:flex-col gap-2">
                    <p className="font-semibold">Total Applicants:</p>
                    <p className="text-gray-700">
                      {singleJob?.applications.length}
                    </p>
                  </div>
                </div>

                <div className="flex max-[400px]:items-start items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-gray-600" />
                  <div className="flex max-[300px]:flex-col gap-2">
                    <p className="font-semibold">Salary:</p>
                    <p className="text-gray-700">{singleJob?.salary} / month</p>
                  </div>
                </div>

                <div className="flex max-[400px]:items-start items-center gap-2">
                  <Calendar className="w-5 h-5 text-gray-600" />
                  <div className="flex max-[300px]:flex-col gap-2">
                    <p className="font-semibold">Posted:</p>
                    <p className="text-gray-700">
                      {singleJob?.createdAt ? (
                        calculateTime()
                      ) : (
                        <Loader2 className="w-4 h-4 animate-spin text-gray-600" />
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex max-[400px]:items-start items-center gap-2">
                  <Briefcase className="w-5 h-5 text-gray-600" />
                  <div className="flex max-[300px]:flex-col gap-2">
                    <p className="font-semibold">Experience:</p>
                    <p className="text-gray-700">
                      {singleJob?.experienceLevel} years
                    </p>
                  </div>
                </div>
              </div>

              {/* Job Description */}
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <p className="text-lg font-semibold border-b pb-2">
                  Job Description
                </p>
                <p className="text-gray-700 mt-3">{singleJob?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default JobDescription;
