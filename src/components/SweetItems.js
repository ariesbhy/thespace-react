import React from "react";
import "../assets/css/space.css";

const SweetItems = (sweetImage, sweetName, sweetPrice) => {
  return (
    <div className="sweets-container">
      <img src={sweetImage} alt="sweets" />
      <h3>{sweetName}</h3>
      <p>{sweetPrice}</p>
    </div>
  );
};
export default SweetItems;
