import React from "react";
import "./location.css";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Location = ({contact_details}) => {
  return (
    <div className="location-section">
      <section className="location-text-section">
        <h1>Nearby Places</h1>
        <div className="text-and-icon">
          <HiLocationMarker className="items" />
          <p>{contact_details.location}</p>
        </div>
        <div className="text-and-icon">
          <AiOutlineMail className="items" />
          <p>{contact_details.email}</p>
        </div>
        <div className="text-and-icon">
          <AiOutlinePhone className="items" />
          <p>{contact_details.contact_no} </p>
        </div>
      </section>
      <section className="map-section">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1121385406677!2d-77.03975593521126!3d38.89855087957051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b7bcdecbb1df%3A0x715969d86d0b76bf!2sThe%20White%20House!5e0!3m2!1sen!2snp!4v1658314672997!5m2!1sen!2snp"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Location;
