import React from "react";
import Navbar from "./shared/Navbar";
import Typed from "./shared/Typed";
import Footer from "./shared/Footer";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <CategoryCarousel />
      <LatestJobs /> */}
    </>
  );
};

export default Home;
