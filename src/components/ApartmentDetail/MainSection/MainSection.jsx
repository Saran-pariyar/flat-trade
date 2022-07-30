import React from "react";
import "./mainSection.css";


const MainSection = ({data}) => {
  console.log(data.apartment.apartment_image);
  
  
  return (
    <div >
    <div className="main-container">
      <div className="text-section">
        <div className="heading margin-top-bottom">{data.apartment.address[0]}</div>
        <div className="address margin-top-bottom">{data.apartment.address[1]}</div>
        <div className="btn-section margin-top-bottom">
          <button className="view-flat-btn">View Flat</button>
          <button className="share-btn">Share</button>
        </div>
      </div>
      <div className="img-section">
        <img className="flat-image" src={data.apartment.apartment_image} alt="" />
      </div>
    </div>
    <div className="description">
      <h1>Description</h1>
      <p> {data.apartment.apartment_description}
      </p>
      </div>
      <div className='vacantFlats'>
<button className='view-flat-btn'>View Flats</button>
<p className="flat-detail">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aliquid nam animi! Rem, accusamus earum.
</p>
    </div>
    </div>
  );
};
export default MainSection;
