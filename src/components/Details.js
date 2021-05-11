import React from "react";
import "../index.css";
const Details = ({ ipAdd, location, timeZone, isp }) => {
  return (
    <div className="details">
      <div className="ip-add text-gray-500">
        IP ADDRESS <br /> {ipAdd ? ipAdd : "-"}
      </div>
      <div className="location text-gray-500">
        LOCATION <br />
        {location ? location : "-"}
      </div>
      <div className="time-zone text-gray-500">
        TIME ZONE <br /> {timeZone ? timeZone : "-"}
      </div>
      <div className="isp text-gray-500">
        ISP <br />
        {isp ? isp : "-"}
      </div>
    </div>
  );
};

export default Details;
