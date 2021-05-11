import React, { useState, useEffect } from "react";
import bg from "../images/bg.png";
import "../index.css";
import Details from "./Details";
import MapComp from "./MapComp";
import arrow from "../images/arrow.svg";
import axios from "axios";

const Display = () => {
  const [address, setaddress] = useState(null);
  const [details, setDetails] = useState(null);
  const [addfrombutton, setAddfrombutton] = useState("-");

  useEffect(() => {
    async function fetchDetails() {
      let res = await axios.get(
        `https://geo.ipify.org/api/v1?apiKey=at_o3PQlFRBYmw2gESjAPj2xSTIj1r4x&ipAddress=${addfrombutton}`
      );
      setDetails(res.data);
    }
    fetchDetails();
  }, [addfrombutton]);

  const handleClick = () => {
    setAddfrombutton(address);
  };

  return (
    <div>
      <img src={bg} alt="background" className="nav-image" />
      <div className="header">
        <h1>IP ADDRESS TRACKER</h1>
        {/* search bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            className="search-input"
            type="search"
            name="search"
            placeholder="Enter ip address ..."
            onChange={(e) => setaddress(e.target.value)}
          />
          <button
            type="submit"
            style={{
              position: "absolute",
              width: "50px",
              height: "60px",
              top: "80px",
              left: "70vw",
              backgroundColor: "white",
              borderRadius: "20px",
            }}
            onClick={handleClick}
          >
            <img src={arrow} alt="go" />
          </button>
        </div>
      </div>
      {details !== null ? (
        <MapComp
          latitude={details.location.lat}
          longitude={details.location.lng}
        />
      ) : null}
      {details !== null ? (
        <Details
          ipAdd={details.ip}
          location={
            details.location.city +
            "," +
            details.location.region +
            "," +
            details.location.country
          }
          timeZone={"UTC" + details.location.timezone}
          isp={details.isp}
        />
      ) : null}
    </div>
  );
};

export default Display;
