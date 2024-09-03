import React from "react";
import Header from "./Header";
import SweetList from "./SweetList";
import "../assets/css/space.css";

const Home = () => {
  return (
    <div className="container">
      <Header sweetName={"The Space"} />
      <SweetList />
    </div>
  );
};

export default Home;
