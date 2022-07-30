import React from "react";
import "./facilities.css";
import Facilities_card from "./Facilities_card";

const Facilities = ({facilities_array}) => {
  console.log(facilities_array)
  return (
    <div className="facilities-section">
{/* Iterating through items  */}

{facilities_array.map((item)=>{
 return <Facilities_card item_number={item.number} item_title={item.title} />
})}

    </div>
  );
};

export default Facilities;
