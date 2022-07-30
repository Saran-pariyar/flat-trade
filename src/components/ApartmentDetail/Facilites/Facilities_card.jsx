import React from 'react'
import  {FaParking,FaSwimmingPool }    from "react-icons/fa";
import { CgGym } from "react-icons/cg";
import { FcLock, FcWiFiLogo, FcPackage } from "react-icons/fc";


const Facilities_card = ({item_number,item_title}) => {
    const facility_icons = [
        <FaParking className="facilities-main-icons" />,
         <CgGym  className="facilities-main-icons" />,
          <FcLock className="facilities-main-icons" />,
          <FcWiFiLogo className="facilities-main-icons" />,
          <FcPackage  className="facilities-main-icons" />,
          <FaSwimmingPool className="facilities-main-icons" />
        ];
  return (
    <div className="facilities-benefit-3 facilities-icon-section">
        {facility_icons[item_number]}
        <p>{item_title} </p>
      </div>
  )
}

export default Facilities_card;