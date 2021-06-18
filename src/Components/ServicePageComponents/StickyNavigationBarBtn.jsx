import React from "react";
// import { StyleStickyNavBtn } from "../../StyledComponents/AcServiceAndRepairStyle";
import styled from "styled-components";
import { AcServiceIn } from "./AcServiceIn.jsx";
import { NavLink } from "react-router-dom";
import { BiBorderBottom } from "react-icons/bi";
export const StickyNavigationBarBtn = (props) => {

const StyleStickyNavBtn = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 20px 18px 0px 0px;
  /* background-color: yellow; */
  display: inline-block;
  font-size: 16.5px;
  text-align: left;
  color: #616161;
  cursor: pointer;
  font-family: axiforma-regular, -apple-system, BlinkMacSystemFont, Segoe UI,
    Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  height: 40px;
  font-weight: 500;
  opacity: 9;
  :hover{
    color: black;
  }
    
  
`;


  return (
   <a href={props.id}>
      <StyleStickyNavBtn id={props.id} onClick={props.onclick} style={props.style}>{props.text}</StyleStickyNavBtn>
      </a>
  );
};
