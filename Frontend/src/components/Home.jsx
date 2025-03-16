import React from "react";
import Navbar from "./shared/Navbar";
import Typed from "./shared/Typed";

const Home = () => {
  return (
    <>
      <div className="flex flex-col font-bold h-screen items-center justify-center text-center text-5xl mt-[-100px] ">
        <h1>Hello from Home</h1>
        <Typed />
      </div>
    </> 
  );
};

export default Home;
