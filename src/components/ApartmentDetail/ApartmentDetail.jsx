import React from "react";
import "./apartmentDetail.css";
import Facilities from "./Facilites/Facilities";
import Location from "./LocationSection/Location";
import MainSection from "./MainSection/MainSection";
import Benefit from "./SecondSection/Benefit";
import axios from "axios";
import { useEffect,useState } from "react";



const ApartmentDetail = () => {
  const [data, setData] = useState({})
  const [dataStatus, setDataStatus] = useState(false)
  useEffect(() => {
    axios
      .get("data.json")
      .then(function (response) {
        // handle success
        console.log(response.data.apartment.address[1]);
        setDataStatus(true)
        setData(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error );
        console.log("there is an error")
      });
  },[]);
  
  return (
    <section className="hero-section">
      {dataStatus ?  (<div className="container">
      <MainSection data={data} />
      <Benefit />
      <Facilities facilities_array={data.apartment.facilities}/>
      <Location />
      </div>) : "not found"} 
      
    </section>
  );
};
export default ApartmentDetail;
