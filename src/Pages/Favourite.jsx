import React from "react";
import { Navbar } from "../components/Navbar";
import Filters from "../components/Filters";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Favourites = () => {
  return (
    <>
      <Navbar />
      <div className="grid lg:grid-cols-10 sm:grid-cols-1 ">
        <div className="col-span-3  py-[84px] lg:pl-[127px] pl-6  ">
          <Filters />
        </div>
        <div className=" py-[44px] lg:pl-[80px] lg:pr-[124px] col-span-7">
          <Main />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favourites;
