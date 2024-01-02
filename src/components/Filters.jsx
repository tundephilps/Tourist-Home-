import React, { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

const Filters = () => {
  const [selectedResident, setSelectedResident] = useState(null);

  const [selectedFacility, setSelectedFacility] = useState(null);

  const [selectedNutri, setSelectedNutri] = useState(null);

  const [selectedTip, setSelectedTip] = useState(null);

  const [selectedInterior, setSelectedInterior] = useState(null);

  const resident = [
    "Hoteluri mici",
    "Apartamente",
    "Case și apartamente în întregime",
    "Saună",
    "Case de vacanță",
    "Hoteluri",
  ];

  const facility = [
    "Izolare fonică",
    "Balcon",
    "Terasă",
    "Baie proprie",
    "Loc de muncă pentru laptop",
    "Aer condiționat",
    "Bucătărie/chicinetă",
  ];
  const nutri = ["Mic dejun inclus", "Cu bucătărie proprie"];
  const tip = ["Două paturi separate", "Un pat dublu"];
  const interior = [
    "Indicii sonore",
    "Semne tactile",

    "Prompturi Braille",
    "Chiuvetă joasă",
    "Toaletă înaltă",
    "WC cu balustrade",
  ];

  const handleRadioChange = (resident) => {
    // Check if the selected resident is different from the current selection
    if (selectedResident !== resident) {
      // If different, update the selection
      setSelectedResident(resident);
    } else {
      // If the same resident is clicked again, deselect it
      setSelectedResident(null);
    }
  };

  const handleFacilityChange = (facility) => {
    // Check if the selected facility is different from the current selection
    if (selectedFacility !== facility) {
      // If different, update the selection
      setSelectedFacility(facility);
    } else {
      // If the same resident is clicked again, deselect it
      setSelectedFacility(null);
    }
  };
  const handleNutriChange = (nutri) => {
    // Check if the selected facility is different from the current selection
    if (selectedNutri !== nutri) {
      // If different, update the selection
      setSelectedNutri(nutri);
    } else {
      // If the same resident is clicked again, deselect it
      setSelectedNutri(null);
    }
  };

  const handleTipChange = (tip) => {
    // Check if the selected facility is different from the current selection
    if (selectedTip !== tip) {
      // If different, update the selection
      setSelectedTip(tip);
    } else {
      // If the same resident is clicked again, deselect it
      setSelectedTip(null);
    }
  };

  const handleInteriorChange = (interior) => {
    // Check if the selected facility is different from the current selection
    if (selectedInterior !== interior) {
      // If different, update the selection
      setSelectedInterior(interior);
    } else {
      // If the same resident is clicked again, deselect it
      setSelectedInterior(null);
    }
  };
  return (
    <div>
      <h1 className="text-[28px] font-semibold text-[#000] text-left">
        Favorite
      </h1>
      <div className="h-[71px]" />
      <h1 className="text-[16px] font-normal text-[#404e7c] flex flex-row items-center gap-[12px] border-b-2 border-[#6C759D] w-48 ">
        Sortare (mod implicit) <BsArrowDown className="text-[#404e7c]" />
      </h1>

      <div className="h-[1px] bg-[#F5F4F0] w-full mt-[58px] mb-[24px]" />

      {/* Filter */}
      <div>
        <h1 className="text-[#000] text-[14px] font-medium pb-[22px]">
          TIPUL REȘEDINȚEI
        </h1>
        <div className="flex flex-col gap-[12px]">
          {resident.map((resident) => (
            <label
              key={resident}
              className=" flex gap-[12px] whitespace-nowrap text-[#000000]"
            >
              <input
                type="checkbox"
                value={resident}
                checked={selectedResident === resident}
                onChange={() => handleRadioChange(resident)}
              />
              {resident}
            </label>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#F5F4F0] w-full mt-[58px] mb-[24px]" />
      {/* Filter Facility */}
      <div>
        <h1 className="text-[#000] text-[14px] font-medium pb-[22px]">
          FACILITĂȚI ÎN CAMERĂ
        </h1>
        <div className="flex flex-col gap-[12px]">
          {facility.map((facility) => (
            <label
              key={facility}
              className=" flex gap-[12px] whitespace-nowrap text-[#000000]"
            >
              <input
                type="checkbox"
                value={facility}
                checked={selectedFacility === facility}
                onChange={() => handleFacilityChange(facility)}
              />
              {facility}
            </label>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#F5F4F0] w-full mt-[58px] mb-[24px]" />
      {/* Nutri Facility */}
      <div>
        <h1 className="text-[#000] text-[14px] font-medium pb-[22px]">
          NUTRITE
        </h1>
        <div className="flex flex-col gap-[12px]">
          {nutri.map((nutri) => (
            <label
              key={nutri}
              className=" flex gap-[12px] whitespace-nowrap text-[#000000]"
            >
              <input
                type="checkbox"
                value={nutri}
                checked={selectedNutri === nutri}
                onChange={() => handleNutriChange(nutri)}
              />
              {nutri}
            </label>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#F5F4F0] w-full mt-[58px] mb-[24px]" />
      {/* Tip Facility */}
      <div>
        <h1 className="text-[#000] text-[14px] font-medium pb-[22px]">TIP</h1>
        <div className="flex flex-col gap-[12px]">
          {tip.map((tip) => (
            <label
              key={tip}
              className=" flex gap-[12px] whitespace-nowrap text-[#000000]"
            >
              <input
                type="checkbox"
                value={tip}
                checked={selectedTip === tip}
                onChange={() => handleTipChange(tip)}
              />
              {tip}
            </label>
          ))}
        </div>
      </div>

      <div className="h-[1px] bg-[#F5F4F0] w-full mt-[58px] mb-[24px]" />
      {/* Interior Facility */}
      <div>
        <h1 className="text-[#000] text-[14px] font-medium pb-[22px]">TIP</h1>
        <div className="flex flex-col gap-[12px]">
          {interior.map((interior) => (
            <label
              key={interior}
              className=" flex gap-[12px] whitespace-nowrap text-[#000000]"
            >
              <input
                type="checkbox"
                value={interior}
                checked={selectedInterior === interior}
                onChange={() => handleInteriorChange(interior)}
              />
              {interior}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
