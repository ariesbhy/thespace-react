import React from "react";
import sweets from "../assets/data/sweets";
import "../assets/css/space.css";
import SweetItems from "./SweetItems";

const SweetList = () => {
  const displaySweets = sweets.map((sweetObject) => {
    return <SweetItems sweet={sweetObject} />;
  });
  return <div className="sweets-section">{displaySweets}</div>;
};

export default SweetList;
