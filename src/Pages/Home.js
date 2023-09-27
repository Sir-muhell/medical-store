import React, { useState } from "react";
import { FaSyringe, FaStethoscope } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import Item from "../Assets/item.svg";
import Rating from "@mui/material/Rating";
import { Card } from "../Components/Card";

export const Home = () => {
  const [value, setValue] = React.useState(2);
  const [activeButton, setActiveButton] = useState("drugs"); // Initialize with the ID of the initially active button

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  const renderContent = () => {
    switch (activeButton) {
      case "drugs":
        return (
          <div id="drugsContent" className="content">
            <div className="pt-10 grid gap-5 lg:grid-cols-4 grid-cols-2 ">
              <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
          </div>
        );
      case "medication":
        return (
          <div id="medicationContent" className="content">
            <div className="pt-10 grid gap-10 lg:grid-cols-4 grid-cols-2">
              <Card /> <Card /> <Card /> <Card /> <Card />
            </div>
          </div>
        );
      case "equipment":
        return (
          <div id="equipmentContent" className="content">
            <div className="pt-10 grid gap-10 lg:grid-cols-4 grid-cols-2">
              <Card /> <Card />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="home lg:p-20 p-10 pt-10">
      <p className="text-center home-head">Our Products</p>
      <p className="home-sub mt-5">
        Check out our best and affordable medicines for you and your family
      </p>
      <div className=" switch-box mt-10">
        <div
          className={`switch-card ${
            activeButton === "drugs" ? "bg-primary" : "bg-grey"
          }`}
          onClick={() => handleButtonClick("drugs")}
        >
          <GiMedicines
            className={`icon ${
              activeButton === "drugs" ? "text-white" : "bg-grey"
            }`}
          />
          <p className={activeButton === "drugs" ? "text-white" : "text-black"}>
            Drugs
          </p>
        </div>
        <div
          className={`switch-card ml-8 ${
            activeButton === "medication" ? "bg-primary" : "bg-grey"
          }`}
          onClick={() => handleButtonClick("medication")}
        >
          <FaStethoscope
            className={`icon ${
              activeButton === "medication" ? "text-white" : "bg-grey"
            }`}
          />
          <p
            className={
              activeButton === "medication" ? "text-white" : "text-black"
            }
          >
            Medication
          </p>
        </div>
        <div
          className={`switch-card ml-8 ${
            activeButton === "equipment" ? "bg-primary" : "bg-grey"
          }`}
          onClick={() => handleButtonClick("equipment")}
        >
          <FaSyringe
            className={`icon ${
              activeButton === "equipment" ? "text-white" : "bg-grey"
            }`}
          />
          <p
            className={
              activeButton === "equipment" ? "text-white" : "text-black"
            }
          >
            Equipment
          </p>
        </div>
      </div>

      {renderContent()}
    </div>
  );
};
