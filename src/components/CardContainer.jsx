import React from "react";
import "./CardContainer.css";
import images from "../components/images";

const CardContainer = () => {
  return (
    <div className="CardContainer">
      <div id="class1" className="card1">
          <img src={images.card1} alt="" />
      </div>
      <div id="class2" className="card1">
        <img src={images.card2} alt="" />
      </div>
      <div id="class3" className="card1">
        <img src={images.card3} alt="" />
      </div>
      <div id="class4" className="card1">
        <img src={images.plus} alt="" />
      </div>
    </div>
  );
};

export default CardContainer;
