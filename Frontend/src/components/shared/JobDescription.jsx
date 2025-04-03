import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import {
  Calendar,
  Briefcase,
  MapPin,
  Users,
  IndianRupee,
  Loader2,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/apis";
import { setSingleJob } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDescription = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);
  const { singleJob } = useSelector((store) => store.job);
  const { jobId } = useParams();

  const [isApplied, setIsApplied] = useState(false);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );
      if (res.data?.success) {
        setIsApplied(true);
        toast.success(res.data.message);

        dispatch(
          setSingleJob({
            ...singleJob,
            applications: [...singleJob.applications, { applicant: user._id }],
          })
        );
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`);
        if (res.data?.success) {
          dispatch(setSingleJob(res.data?.job));
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch]);

  useEffect(() => {
    if (singleJob) {
      const initialAppliedState = singleJob?.applications.some(
        (application) => application.applicant === user?._id
      );
      setIsApplied(initialAppliedState);
    }
  }, [singleJob, user]);

  if (!singleJob) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-purple-700" /> Loading
        Details
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
                onClick={applyJobHandler}
                // disabled={isApplied}
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
                    <p> {singleJob?.createdAt?.split("T")[0]} </p>
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
