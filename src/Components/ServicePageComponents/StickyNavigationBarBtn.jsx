import React from "react";
import { StyleStickyNavBtn } from "../../StyledComponents/AcServiceAndRepairStyle";
import { AcServiceIn } from "./AcServiceIn.jsx";
import { NavLink, useParams } from "react-router-dom";
import { useState } from "react";
export const StickyNavigationBarBtn = (props) => {
  const [condition, setCondition] = useState(false);
  return (
    <a href="#technicians">
      <StyleStickyNavBtn
        onClick={() => setCondition(true)}
        style={condition ? props.style : {}}
      >
        {props.text}
      </StyleStickyNavBtn>
    </a>
  );
};
