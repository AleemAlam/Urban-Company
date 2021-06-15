import React from "react";
import { MoveToLocation } from "../../StyledComponents/Modal";

export default function MoveLocation({
  setMoveLocation,
  setSelectLocation,
  setSafteyAgree,
}) {
  const handleLocation = () => {
    setMoveLocation(false);
    setSelectLocation(true);
  };
  return (
    <MoveToLocation>
      <div className="header">
        <p
          onClick={() => {
            setSafteyAgree(true);
            setMoveLocation(false);
          }}
        >
          &#129120;
        </p>
        <p>Men's Haircut & Grooming</p>
        <p></p>
      </div>
      <div className="containt">
        <h2>Where do you want the service?</h2>
        <button onClick={handleLocation}>Your current location</button>
        <button>Some other location</button>
      </div>
    </MoveToLocation>
  );
}
