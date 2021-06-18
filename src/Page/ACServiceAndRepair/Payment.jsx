import React from "react";
import { MakePayment } from "../../StyledComponents/Modal";

export default function Payment({ setSelectTime, setPaymnet }) {
  return (
    <MakePayment>
      <div className="header">
        <p
          onClick={() => {
            setSelectTime(true);
            setPaymnet(false);
          }}
        >
          &#129120;
        </p>
        <p>AC Service and Repair</p>
        <p onClick={() => setPaymnet(false)}>✖</p>
      </div>
    </MakePayment>
  );
}
