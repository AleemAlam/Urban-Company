import React from "react";
import { SelectTheLocation } from "../../StyledComponents/Modal";

export default function SelectLocation({
  setMoveLocation,
  setSelectLocation,
  setSelectTime,
  userLocation,
}) {
  console.log(userLocation);
  return (
    <SelectTheLocation>
      <div className="header">
        <p
          onClick={() => {
            setMoveLocation(true);
            setSelectLocation(false);
          }}
        >
          &#129120;
        </p>
        <p>AC Service and Repair</p>
        <p onClick={() => setSelectLocation(false)}>✖</p>
      </div>
      <div className="location-data">
        <div className="liveMap">
          <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${userLocation.latitude},${userLocation.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7C${userLocation.latitude},${userLocation.longitude}&key=AIzaSyCig6cda2cZ89e1meuo7KkZupEbcsYoP04`}
            alt=""
          />
        </div>
        <div className="location-form">
          <div className="formSide">
            <p className="your-location">Your Location</p>
            <div className="inputs">
              <div>
                <input
                  style={{ height: "36px" }}
                  type="text"
                  placeholder="address"
                />
                <button>Change</button>
              </div>
              <div>
                <input type="text" placeholder="Flat/Building/street" />
              </div>
              <div>
                <select>
                  <option>Mr</option>
                  <option>Ms</option>
                </select>
                <input type="text" placeholder="Your Name" />
              </div>
            </div>

            <div className="options">
              <p>Save as</p>
              <div>
                <button style={{ background: "#304fee" }}>Home</button>
                <button>Office</button>
                <button>Other</button>
              </div>
            </div>
          </div>
          <div className="addButton">
            <button
              onClick={() => {
                setSelectTime(true);
                setSelectLocation(false);
              }}
            >
              Add Flat/Building/Street
            </button>
          </div>
        </div>
      </div>
    </SelectTheLocation>
  );
}
