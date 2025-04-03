import { setAllJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/apis";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllJobs = async () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`);
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchJobs();
  }, []);
};

export default useGetAllJobs;


// loading all the jobs in the redux state for accessing in the home and jobs page without sending multiple api calls