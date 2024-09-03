import React from "react";
import spacelogo from "../assets/media/space-logo.png";

const Header = ({ sweetName }) => {
  return (
    <>
      <img src={spacelogo} alt="space-logo" className="space-image" />
      <h1>{sweetName}</h1>
      <p>Eat!!, Taste, Now!! you are in space sweets</p>
      <p>Made with Love...</p>
    </>
  );
};

export default Header;
