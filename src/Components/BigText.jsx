import React from "react";
import { StyledText } from "../StyledComponents/HomePageStyledComponents";

export default function BigText({ text, size }) {
  return <h1 style={{ fontSize: size || 37 }}>{text}</h1>;
}
