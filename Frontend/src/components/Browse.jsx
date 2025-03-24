import React from "react";
import Typed from "./shared/Typed";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const Browse = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col font-bold items-center h-[78vh] justify-center text-center text-5xl ">
        <h1>Hello from Browse Route</h1>
        <div className="text-gray-500 text-2xl my-3">
        <Typed
          messages={[
            "Find your dream job in just a few clicks 🚀",
            "Find your dream job with top companies 💼",
            "Find your dream job and grow your career 🌟",
          ]}
        />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Browse;
