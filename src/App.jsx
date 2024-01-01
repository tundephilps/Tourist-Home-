import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import Filters from "./components/Filters";

function App() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-10">
        <div className="col-span-3  py-[84px] pl-[127px]">
          <Filters />
        </div>
        <div className="bg-green-100 h-[100vh] col-span-7"></div>
      </div>
    </>
  );
}

export default App;
