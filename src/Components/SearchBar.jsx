import React, { useState } from "react";
import {
  ShowLocation,
  StyledInput,
} from "../StyledComponents/HomePageStyledComponents";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import axios from "axios";
import ClearIcon from "@material-ui/icons/Clear";
import Suggestion from "./Suggestion";

const initAddress = {
  houseNumber: "",
  houseName: "",
  poi: "",
  poi_dist: "",
  street: "",
  street_dist: "",
  subSubLocality: "",
  subLocality: "",
  locality: "",
  village: "",
  district: "",
  subDistrict: "",
  city: "",
  state: "",
  pincode: "",
  lat: "",
  lng: "",
  area: "",
  formatted_address: "",
};

export default function SearchBar() {
  const [textInput, setTextInput] = useState("");
  const [showLocationDiv, setShowLocationDiv] = useState(false);
  const [address, setAddress] = useState(initAddress);
  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getCoordinates);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSearch = (e) => {
    setTextInput(e.target.value);
  };

  const getCoordinates = (position) => {
    const { longitude, latitude } = position.coords;
    axios
      .get(
        `https://apis.mapmyindia.com/advancedmaps/v1/6hm1qanekr738vwho6stcqgyo47wrt4w/rev_geocode?lat=${latitude}&lng=${longitude}`
      )
      .then((res) => {
        setAddress(res.data.results[0]);
      })
      .catch(console.error);
  };
  return (
    <StyledInput>
      <div
        className="locationContainer"
        style={{
          position: "relative",
        }}
      >
        <input
          className="locationInput"
          placeholder={
            address.formatted_address.length > 0
              ? address.formatted_address
                  .split("")
                  .map((a, i) => (i <= 9 ? a : ""))
                  .join("") + "..."
              : "India"
          }
          readOnly
          type="text"
          onClick={() => setShowLocationDiv(true)}
        />
        <LocationOnOutlinedIcon style={{ color: "#555" }} />
        <ExpandMoreOutlinedIcon className="arrow" style={{ color: "#555" }} />
        {showLocationDiv && (
          <ShowLocation>
            <ClearIcon
              onClick={() => setShowLocationDiv(false)}
              className="clear"
            />
            {address.formatted_address === "" && (
              <div className="head">
                <LocationOnOutlinedIcon style={{ color: "#555" }} />
                <label>Current Location</label>
                <p className="blueText" onClick={handleLocation}>
                  Detect Using GPS{" "}
                </p>
              </div>
            )}
            <p>{address.formatted_address}</p>
          </ShowLocation>
        )}
      </div>
      <div className="searchInput" style={{ position: "relative" }}>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="search for a service "
        />

        <SearchIcon />
        <div style={{ marginTop: 7, textAlign: "left" }}>
          <Link>Salon for men</Link>
          <Link>Salon for women</Link>
          <Link>Massage for men</Link>
          <span>etc</span>
        </div>
        {textInput.length > 2 && <Suggestion text={textInput} />}
      </div>
    </StyledInput>
  );
}
