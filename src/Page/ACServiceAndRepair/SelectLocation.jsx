import React, { useState } from "react";
import { SelectTheLocation } from "../../StyledComponents/Modal";

export default function SelectLocation({
  setMoveLocation,
  setSelectLocation,
  setSelectTime,
  userLocation,
}) {
  console.log(userLocation);

  const [liveInput, setLiveInput] = useState("Tilak Nagar, Delhi 110018");
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
        <p
          onClick={() => {
            setSelectLocation(false);
            localStorage.removeItem("cart");
          }}
        >
          ✖
        </p>
      </div>
      <div className="location-data">
        <div className="liveMap">
          {/* <img
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${userLocation.latitude},${userLocation.longitude}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7C${userLocation.latitude},${userLocation.longitude}&key=AIzaSyCig6cda2cZ89e1meuo7KkZupEbcsYoP04`}
            alt=""
          /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14006.800531311004!2d77.08537016986182!3d28.63874810127031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d049a52c282c7%3A0xfa68b5f8baf734a4!2sTilak%20Nagar%2C%20New%20Delhi%2C%20Delhi%20110018!5e0!3m2!1sen!2sin!4v1624080986379!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            title="liveMap"
          ></iframe>
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
                  value={liveInput}
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
