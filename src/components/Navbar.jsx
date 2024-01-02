import React, { useState } from "react";
import logo from "../assets/logo.png";
import person from "../assets/Person.png";
import flag from "../assets/flag.png";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="lg:px-32 px-6 py-[15px] flex flex-row items-center justify-between">
      <img src={logo} alt="logo" />
      <div className="w-36" />
      <div className="lg:flex flex-row gap-[36px] hidden">
        <h1 className="text-[16px] text-[#000]">Resedinte</h1>

        <h1 className="text-[16px] text-[#000]">Rezervari</h1>

        <h1 className="text-[16px] text-[#000]">Recenzi</h1>
      </div>

      <div className="w-36" />
      <div className="lg:flex flex-row gap-[36px] hidden">
        <h1 className="text-[16px] text-[#000]">Favorite</h1>

        <h1 className="text-[16px] text-[#000]">Noutati</h1>

        <h1 className="text-[16px] text-[#000] items-center flex flex-row gap-1">
          RO
          <img src={flag} className="w-6 h-6" alt="person" />
        </h1>
      </div>

      <div className="w-[120px]" />
      <div className="lg:flex flex-row items-center gap-[12px] hidden">
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
      <GiHamburgerMenu
        className="text-4xl cursor-pointer flex lg:hidden"
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <div className="lg:hidden absolute right-8 top-14 bg-[#e8e8e8] p-6 rounded-md gap-5 flex flex-col cursor-pointer ">
          <h1 className="text-[16px] text-[#000] hover:text-[#ffffff]">
            Resedinte
          </h1>
          <h1 className="text-[16px] text-[#000] hover:text-[#ffffff]">
            Rezervari
          </h1>
          <h1 className="text-[16px] text-[#000] hover:text-[#ffffff]">
            Recenzi
          </h1>
          <h1 className="text-[16px] text-[#000] hover:text-[#ffffff]">
            Favorite
          </h1>
          <h1 className="text-[16px] text-[#000] hover:text-[#ffffff]">
            Noutati
          </h1>
          <div className="flex flex-row items-center gap-1">
            <h1 className="text-[16px] text-[#000] hover:text-[#ffffff]">RO</h1>
            <img src={flag} className="w-6 h-6" alt="flag" />
          </div>
          <div className="flex flex-row gap-[24px] ">
            <h1
              className="text-[16px] text-[#9d946c] text-center relative hover:text-[#ffffff]"
              style={{ whiteSpace: "nowrap" }}
            >
              Listeazaa-ti apartamentul
            </h1>
            <h1
              className="text-[16px] text-[#6c759d] hover:text-[#ffffff]"
              style={{ whiteSpace: "nowrap" }}
            >
              Contul meu
            </h1>
          </div>
          <img src={person} className="w-6 h-6" alt="person" />
        </div>
      )}
    </div>
  );
};
