import React from "react";
import "./mainSection.css";
import flat from "../../../assets/img/two.jpg";

const MainSection = () => {
  return (
    <div >
    <div className="main-container">
      <div className="text-section">
        <div className="heading">Apartment Heading</div>
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
    <div className="description">
      <h1>Description</h1>
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur fuga sit commodi dolor quia architecto quae quo sint consequatur natus? Amet fugiat dolore minima animi!
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
