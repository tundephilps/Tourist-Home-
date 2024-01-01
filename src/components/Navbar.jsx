import React from "react";
import logo from "../assets/logo.png";
import person from "../assets/Person.png";
import flag from "../assets/flag.png";

export const Navbar = () => {
  return (
    <div className="px-[127px] py-[15px] flex flex-row items-center justify-center">
      <img src={logo} alt="logo" />
      <div className="w-[127px]" />
      <div className="flex flex-row gap-[36px]">
        <h1 className="text-[16px] text-[#000]">Resedinte</h1>

        <h1 className="text-[16px] text-[#000]">Rezervari</h1>

        <h1 className="text-[16px] text-[#000]">Recenzi</h1>
      </div>

      <div className="w-[127px]" />
      <div className="flex flex-row gap-[36px]">
        <h1 className="text-[16px] text-[#000]">Favorite</h1>

        <h1 className="text-[16px] text-[#000]">Noutati</h1>

        <h1 className="text-[16px] text-[#000] items-center flex flex-row gap-1">
          RO
          <img src={flag} className="w-6 h-6" alt="person" />
        </h1>
      </div>

      <div className="w-[120px]" />
      <div className="flex flex-row items-center gap-[12px]">
        <div className="flex flex-row gap-[24px] ">
          <h1
            className="text-[16px] text-[#9d946c] text-center relative"
            style={{ whiteSpace: "nowrap" }}
          >
            Listeazaa-ti apartamentul
          </h1>

          <h1
            className="text-[16px] text-[#6c759d]"
            style={{ whiteSpace: "nowrap" }}
          >
            Contul meu
          </h1>
        </div>
        <img src={person} className="w-6 h-6" alt="person" />
      </div>
    </div>
  );
};
