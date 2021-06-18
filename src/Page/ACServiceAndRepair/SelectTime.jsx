import { amber } from "@material-ui/core/colors";
import React from "react";
import { Date, SelectTiming, Timing } from "../../StyledComponents/Modal";

export default function SelectTime({
  setSelectLocation,
  setSelectTime,
  setPayment,
}) {
  const date = [
    { day: "Today", date: "19" },
    { day: "Tomorrow", date: "20" },
    { day: "Monday", date: "21" },
    { day: "Tuesday", date: "22" },
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
        <p onClick={() => setSelectTime(false)}>✖</p>
      </div>
      <div className="content">
        <h4>When would you like Urban Company to serve you?</h4>
        <div className="dates">
          <p>Select date of service</p>
          <div>
            {date.map((e, i) => {
              return (
                <Date>
                  <p>{e.day}</p>
                  <h2>{e.date}</h2>
                </Date>
              );
            })}
          </div>
        </div>

        <div className="time">
          <p>Selecet time</p>
          <div>
            {time.map((e) => {
              return (
                <Timing>
                  <p onClick={()=>{}}>{e}</p>
                </Timing>
              );
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
