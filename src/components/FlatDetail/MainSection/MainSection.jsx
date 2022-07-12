import React from "react";
import "./mainSection.css";
import flat from "../../../assets/img/two.jpg";

const MainSection = () => {
  return (
    <div className="main-container">
      <div className="text-section">
        <div className="heading">Flat Heading</div>
        <div className="address">America, USA</div>
        <div className="btn-section">
          <button className="view-flat-btn">View Flat</button>
          <button className="share-btn">Share</button>
        </div>
      </div>
      <div className="img-section">
        <img className="flat-image" src={flat} alt="" />
      </div>
    </div>
  );
};
export default MainSection;
