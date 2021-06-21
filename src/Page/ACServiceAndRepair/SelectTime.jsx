import React from "react";
import { SelectTiming } from "../../StyledComponents/Modal";
import DateComponent, { TimingComponent } from "./MiniComponents";

export default function SelectTime({
  setSelectLocation,
  setSelectTime,
  setPayment,
}) {
  const date = [
    { day: "Tomorrow", date: "22" },
    { day: "Tuesday", date: "23" },
    { day: "Wednesday", date: "24" },
    { day: "Thursday", date: "25" },
  ];

  const time = [
    "8 am",
    "8:30 am",
    "9 am",
    "9:30 am",
    "10 am",
    "10:30 am",
    "11 am",
    "11:30 am",
    "12 am",
    "12:30 am",
    "1 pm",
    "1:30 pm",
    "2 pm",
    "2:30 pm",
    "3 pm",
    "3:30 pm",
    "4 pm",
    "4:30 pm",
    "5 pm",
    "5:30 pm",
    "6 pm",
    "6:30 pm",
    "7 pm",
    "7:30 pm",
  ];

  const handleNext = () => {
    setSelectTime(false);
    setPayment(true);
  };

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
        <p
          onClick={() => {
            setSelectTime(false);
            localStorage.removeItem("cart");
          }}
        >
          ✖
        </p>
      </div>
      <div className="content">
        <h4>When would you like Urban Company to serve you?</h4>
        <div className="dates">
          <p>Select date of service</p>
          <div>
            {date.map((e, i) => {
              return <DateComponent e={e} />;
            })}
          </div>
        </div>

        <div className="time">
          <p>Selecet time</p>
          <div>
            {time.map((e) => {
              return <TimingComponent e={e} />;
            })}
          </div>
        </div>
      </div>
      <div className="buttondiv">
        <button onClick={handleNext}>Next</button>
      </div>
    </SelectTiming>
  );
}
