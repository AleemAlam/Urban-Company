import React from "react";
import { SelectTiming } from "../../StyledComponents/Modal";

export default function SelectTime({
  setSelectLocation,
  setSelectTime,
  setPaymnet,
}) {
  return (
    <SelectTiming>
      <div className="header">
        <p
          onClick={() => {
            setSelectLocation(true);
            setSelectTime(false);
          }}
        >
          &#129120;
        </p>
        <p>AC Service and Repair</p>
        <p onClick={() => setSelectTime(false)}>✖</p>
      </div>
    </SelectTiming>
  );
}
