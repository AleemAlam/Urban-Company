import React from "react";
import { SelectTheLocation } from "../../StyledComponents/Modal";

export default function SelectLocation({ setMoveLocation, setSelectLocation }) {
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
        <p>Men's Haircut & Grooming</p>
        <p></p>
      </div>
      <div className="location-data">
        <div className="liveMap"></div>
        <div className="location-form"></div>
      </div>
    </SelectTheLocation>
  );
}
