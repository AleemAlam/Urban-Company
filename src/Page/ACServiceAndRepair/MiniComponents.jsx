import React, { useState } from "react";
import { Date, Timing } from "../../StyledComponents/Modal";

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
