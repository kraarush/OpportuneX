import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "@/utils/apis";
import Navbar from "../shared/Navbar";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { toast } from "sonner";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        dispatch(setUser(null));
        await axios.get(`${BACKEND_URL}/user/logout`,{withCredentials: true});
        toast.success("You have been logged out successfully!!");
        navigate("/");
      } catch (error) {
        toast.error("Failed to log out. Please try again.");
      }
    };

    logout();
  }, []);

  return (<div></div>
  );
};

export default Logout;
