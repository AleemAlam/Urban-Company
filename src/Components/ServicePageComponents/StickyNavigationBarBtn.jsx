import React from "react";
// import { StyleStickyNavBtn } from "../../StyledComponents/AcServiceAndRepairStyle";
import styled from "styled-components";
import { AcServiceIn } from "./AcServiceIn.jsx";
import { NavLink } from "react-router-dom";
import { BiBorderBottom } from "react-icons/bi";
export const StickyNavigationBarBtn = (props) => {

const StyleStickyNavBtn = styled.div`
  padding: 24px 0px 15px;
  height: 33px;
  margin: 0px 12px 0px 20px;
  display: inline-block;
  font-size: 16.5px;
  text-align: left;
  color: #616161;
  cursor: pointer;
  font-family: axiforma-regular, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
`;


  return (
   <a href={props.id}>
      <StyleStickyNavBtn id={props.id}>{props.text}</StyleStickyNavBtn>
      </a>
  );
};
