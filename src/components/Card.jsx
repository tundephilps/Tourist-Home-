import React, { useState } from "react";
import { FaRegMap } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";

import { data } from "../data/data";

const Card = () => {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState("");

  return (
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
            className="mt-[24px] sm:flex-col rounded-md bg-[#fefefe] border-1 border-[#e0e2eb] w-[100%] flex lg:flex-row items-center justify-start p-[24px] gap-[32px] text-[#000]"
          >
            <img
              className="h-[229px] lg:w-[230px] sm:w-full rounded-md"
              src={item.image}
              alt="room"
            />
            <div className="w-[100%] flex flex-col gap-8">
              <div className="flex flex-row items-center justify-between ">
                <div>
                  <h1 className="text-[20px] font-semibold">{item.name}</h1>
                  <h2 className="text-[13px]">{item.address}</h2>
                </div>
                <div className="flex flex-row gap-2 text-[#6C759D]">
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
  );
};

export default Card;
