import React, { useState } from "react";
import Typed from "./shared/Typed";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
    const [searchBox, setBoxValue] = useState("");

    const handleChange = (e) => {
        setBoxValue(e.target.value);
    }

  return (
    <div className="flex flex-col items-center justify-center my-16 gap-5">
        <span/>
      <div className="md:text-5xl sm:text-3xl text-2xl">
        <h1 className="font-bold text-center">
          Search, Apply & <br />
          Get your <span className="text-[#6A38C2]">Dream Jobs</span>
        </h1>
      </div>
      <div className="flex justify-center max-[460px]:min-h-[60px] w-full px-4 m-3 text-lg sm:text-2xl md:text-3xl text-gray-500">
        <Typed
          messages={[
            "Find your dream job in just a few clicks 🚀",
            "Find your dream job with top companies 💼",
            "Find your dream job and grow your career 🌟",
          ]}
        />
      </div>

      <div className="flex w-full max-w-3xl justify-center px-6">
        <input
          type="text"
          name="searchBox"
          value={searchBox}
          onChange={handleChange}
          placeholder="Find your dream Job"
          className="outline-none w-full border-gray-200 border rounded-l-full shadow-lg px-4 py-2"
        />
        <Button className="rounded-r-full md:p-6 sm:p-4 p-3 shadow-md shadow-gray-400">
            <Search/>
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
