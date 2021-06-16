import React from "react";
import { StyleStickyNavBtn } from "../../StyledComponents/AcServiceAndRepairStyle";
import { AcServiceIn } from "./AcServiceIn.jsx";
import { NavLink } from "react-router-dom";
export const StickyNavigationBarBtn = (props) => {
  return (
    <a href="#technicians">
      <StyleStickyNavBtn>{props.text}</StyleStickyNavBtn>
    </a>
  );
};
