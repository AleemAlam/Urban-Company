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
        <p>AC Service and Repair</p>
        <p onClick={() => setMoveLocation(false)}>✖</p>
      </div>
      <div className="containt">
        <h2>Where do you want the service?</h2>
        <button onClick={handleLocation}>Your current location</button>
        <button onClick={handleLocation}>Some other location</button>
      </div>
    </MoveToLocation>
  );
}
