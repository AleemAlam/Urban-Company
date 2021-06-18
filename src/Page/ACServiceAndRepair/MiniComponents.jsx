import React, { useState } from "react";
import { Date, PayUsingDetail, Timing } from "../../StyledComponents/Modal";

export function TimingComponent({ e }) {
  const [selectTiming, setSelectTiming] = useState(false);

  const handleSelectTiming = () => {
    setSelectTiming(!selectTiming);
  };
  return (
    <Timing
      onClick={handleSelectTiming}
      style={{
        border: `${selectTiming ? "1px solid black" : "1px solid #dbdbdb"}`,
      }}
    >
      <p>{e}</p>
    </Timing>
  );
}

export default function DateComponent({ e }) {
  const [selectDate, setSelectDate] = useState(false);

  const handleSelectDate = () => {
    setSelectDate(!selectDate);
  };
  return (
    <Date
      onClick={handleSelectDate}
      style={{
        border: `${selectDate ? "1px solid black" : "1px solid #dbdbdb"}`,
      }}
    >
      <p>{e.day}</p>
      <h2>{e.date}</h2>
    </Date>
  );
}

export function PayUsingDetails({ e, setSelectPayment }) {
  const [details, setDetails] = useState(false);
  return (
    <>
      <PayUsingDetail onClick={() => setDetails(!details)}>
        <img
          style={{ marginLeft: "20px", width: "30px", height: "30px" }}
          src={e.img}
          alt=""
        />
        <h3 style={{ width: "75%" }}>{e.type}</h3>
        <p style={{ marginRight: "20px", fontSize: "20px", color: "#757575" }}>
          {details ? e.arrow2 : e.arrow1}
        </p>
      </PayUsingDetail>
      <div>
        {details ? (
          <div className="details">
            <div
              style={{
                display: "flex",
                justifContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "80px",
                boxShadow: "0px 1px 1px 0px grey",
                margin: "5px",
                borderRadius: "5px",
              }}
            >
              <p style={{ width: "90%", marginLeft: "20px", fontSize: "18px" }}>
                Pay online after service
              </p>
              <input
                onChange={() => setSelectPayment(true)}
                style={{ marginRight: "20px" }}
                type="radio"
                value="pay"
                name="cash"
              />
            </div>
            <div
              style={{
                display: "flex",
                justifContent: "space-between",
                alignItems: "center",
                width: "100%",
                height: "80px",
                boxShadow: "0px 1px 1px 0px grey",
                margin: "5px",
                borderRadius: "5px",
              }}
            >
              <p style={{ width: "90%", marginLeft: "20px", fontSize: "18px" }}>
                Pay with cash
              </p>
              <input
                onChange={() => setSelectPayment(true)}
                style={{ marginRight: "20px" }}
                type="radio"
                value="pay"
                name="cash"
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
