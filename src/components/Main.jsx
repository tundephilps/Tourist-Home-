import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import map from "../assets/map.png";

import { FaRegMap } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { data } from "../data/data";

import Card from "./Card";
import Pagination from "./Pagination";
const Main = () => {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState("");

  return (
    <div>
      {/* Search */}
      <div
        style={{
          position: "relative",
          borderRadius: "16px",
          backgroundColor: "#fff",
          boxShadow: "0px 13px 30px rgba(27, 27, 27, 0.06)",
          width: "291px",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "10%",
        }}
        className="lg:px-8 px-[40%]  "
      >
        <input
          className="text-[#232A43] text-[18px] border-0 outline-none"
          placeholder="Caută rapid!"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="bg-[#6c759d] p-[17px] rounded-md cursor-pointer">
          <IoSearch className="text-white text-[18px]" />
        </div>
      </div>
      <div className="h-12" />
      {/* Map */}
      <div className=" w-[100%] flex lg:justify-end lg:items-end items-center justify-center">
        <div
          className="relative flex items-center justify-center"
          style={{
            boxShadow: "0px 13px 30px rgba(27, 27, 27, 0.06)",
          }}
        >
          <img src={map} alt="map" />
          <div className="bg-[#fefefe] h-[40px] w-[165px]   absolute  rounded-md flex items-center justify-center">
            <h1 className="text-[#6c759d]">Vezi pe hartă</h1>
          </div>
        </div>
      </div>

      {/* Card */}
      <div>
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((item, index) => (
            <div
              key={index}
              className="mt-[24px] flex-col rounded-md bg-[#fefefe] border-1 border-[#e0e2eb] w-[100%] flex lg:flex-row items-center justify-start p-[24px] gap-[32px] text-[#000]"
            >
              <img
                className="h-[229px] lg:w-[230px] w-full rounded-md"
                src={item.image}
                alt="room"
              />
              <div className="w-[100%] flex flex-col gap-8">
                <div className="flex flex-row items-center justify-between ">
                  <div>
                    <h1 className="text-[20px] font-semibold">{item.name}</h1>
                    <h2 className="text-[13px]">{item.address}</h2>
                  </div>
                  <div
                    className="flex flex-row gap-2 text-[#6C759D] items-center"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {item.city}
                    <FaRegMap className="text-[#C2BCA3] text-[24px]" />
                  </div>
                </div>
                <div className="w-[300px]">
                  <h1 className="text-[10px] " style={{ lineHeight: "160%" }}>
                    {item.description}
                  </h1>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <h1 className="flex flex-row items-center gap-2 text-[#656565]">
                    <TiStarFullOutline className="text-[#FFF0A3] text-[26px]" />
                    <span className="font-semibold text-black">
                      {item.rating}{" "}
                    </span>
                    ({item.reviews}) recenzii
                  </h1>
                  <h1 className="text-[#0F444D] text-[20px] font-semibold">
                    {item.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Pagination */}
      <div className="py-[76px] lg:px-28 w-full lg:block flex items-center justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Main;
