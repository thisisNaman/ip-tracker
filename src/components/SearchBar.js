import { React, useState } from "react";
import "../index.css";
import arrow from "../images/arrow.svg";
function SearchBar({ keyword }) {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function getData(val) {
    setData(print ? val.target.value : null);
    console.log(val.target.value);
  }
  return (
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
        onChange={getData}
      />
      <button
        type="submit"
        style={{
          position: "absolute",
          width: "50px",
          height: "50px",
          top: "82px",
          left: "70vw",
        }}
        onClick={() => setPrint(true)}
      >
        <img src={arrow} alt="go" />
      </button>
    </div>
  );
}

export default SearchBar;
