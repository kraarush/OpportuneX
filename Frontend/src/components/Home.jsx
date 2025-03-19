import React from "react";
import Navbar from "./shared/Navbar";
import Typed from "./shared/Typed";
import Footer from "./shared/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="flex flex-col font-bold h-[84vh] items-center justify-center text-center text-5xl ">
        <h1>Hello from Home</h1>
        <Typed/>
      </div>
    <Footer/>
    </> 
  );
};

export default Home;
