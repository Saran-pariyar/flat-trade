import React from "react";
import "./apartmentDetail.css";
import Facilities from "./Facilites/Facilities";
import Location from "./LocationSection/Location";
import MainSection from "./MainSection/MainSection";
import Benefit from "./SecondSection/Benefit";


const ApartmentDetail = () => {
  return (
    <section className="hero-section">
      <div className="container">
      <MainSection />
      <Benefit />
      <Facilities />
      <Location />
      </div>
    </section>
  );
};
export default ApartmentDetail;
