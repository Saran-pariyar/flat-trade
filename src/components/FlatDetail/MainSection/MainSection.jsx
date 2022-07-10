import React from "react";
import "./mainSection.css";
import flat from "./five.jpg";

const MainSection = () => {
  return (
    <section className="main">
      <div className="main-container">
        <div className="flat-detail">
          <h1>Buildings</h1>
          <h5>Address,google map link,copy button</h5>
          <div className="buttons">
            <div className="btn">View Flat</div>
            <div className="btn">Share</div>
          </div>
        </div>
        <div className="flat-img">
          <img src={flat} alt="Image" className="image" />
        </div>
      </div>
    </section>
  );
};
export default MainSection;
