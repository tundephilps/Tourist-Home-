import React from "react";
import logo from "../assets/logo.png";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#292d3d] lg:h-[267px] px-[124px] py-12">
      <div className=" flex lg:flex-row  lg:justify-between items-center pt-[80px] flex-col gap-12 ">
        <img src={logo} />
        <div className=" text-center flex lg:flex-row flex-col items-center justify-between gap-[44px] text-[18px] text-white">
          <h1>Despre noi</h1>

          <h1>Servicii</h1>
          <h1>Noutăți</h1>
          <h1>Contacte</h1>
          <h1 style={{ whiteSpace: "nowrap" }}>
            Politica de confidențialitate
          </h1>
        </div>
        <div className="flex flex-row items-center gap-[22px]">
          <AiFillFacebook className="text-white text-[42px]" />
          <AiFillInstagram className="text-white text-[42px]" />
        </div>
      </div>
      <div className="w-full flex items-center justify-center pt-[62px]">
        <h1
          className="text-[#757575] text-[16px]"
          style={{ whiteSpace: "nowrap" }}
        >
          © Toate drepturile sunt rezervate. Tourist Home 24
        </h1>
      </div>
    </div>
  );
};

export default Footer;
