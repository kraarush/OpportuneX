import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "@/utils/apis";
import Navbar from "../shared/Navbar";

const Logout = () => {
  const [message, setMessage] = useState("Logging out...");
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await axios.get(`${BACKEND_URL}/user/logout`);
        setMessage("You have been logged out successfully!!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } catch (error) {
        setMessage("Failed to log out. Please try again.");
      }
    };

    logout();
  }, [navigate]);

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center h-[90vh]">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <p className="text-lg text-gray-700">{message}</p>
      </div>
    </div>
    </>
  );
};

export default Logout;
