import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { MakePayment } from "../../StyledComponents/Modal";

export default function Payment({ setSelectTime, setPayment }) {
  const [selectPayment, setSelectPayment] = useState(false);

  const history = useHistory();

  const handleMove = () => {
    setPayment(false);
    alert("Congratulations Your service has been booked successfully");
    history.push("/ac-service-repair");
  };
  return (
    <MakePayment>
      <div className="header">
        <p
          onClick={() => {
            setSelectTime(true);
            setPayment(false);
          }}
        >
          &#129120;
        </p>
        <p>AC Service and Repair</p>
        <p onClick={() => setPayment(false)}>✖</p>
      </div>
      <div className="containt"></div>
      <div className="buttondiv">
        <button
          className="oldbtn"
          style={{ background: `${selectPayment ? "#4caf50" : "#d4d4d4"}` }}
          onClick={handleMove}
        >
          {" "}
          {selectPayment ? "Place Request" : "Continue"}
        </button>
      </div>
    </MakePayment>
  );
}
